/**
 * Publica o site estático (`out/`) na hospedagem HostGator via FTP.
 *
 * Credenciais ficam em `web/.env.deploy` (não versionado). Copie o modelo:
 *   cp .env.deploy.example .env.deploy
 *
 * Uso:
 *   node scripts/deploy-ftp.mjs --dry-run    # conecta, mostra o plano, não escreve nada
 *   node scripts/deploy-ftp.mjs --arquivar   # move o site antigo para fora do public_html
 *   node scripts/deploy-ftp.mjs              # envia out/ por cima do que já existe
 *
 * A publicação nunca apaga arquivos: `--arquivar` move o conteúdo atual para
 * `../_site-antigo-<data>/` (fora da pasta pública), o que é reversível por um
 * simples rename. O backup do banco MySQL do WordPress NÃO é feito aqui —
 * gere-o no cPanel (Backup Wizard) antes de arquivar.
 */
import { Client } from "basic-ftp";
import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB = resolve(__dirname, "..");
const DIR_LOCAL = join(WEB, "out");

/** Entradas do servidor que nunca devem ser movidas ou sobrescritas. */
const PRESERVAR = new Set([
  "cgi-bin",
  ".well-known", // validação/renovação do certificado SSL
  ".htpasswd",
  ".ftpquota",
]);

const flags = new Set(process.argv.slice(2));
const dryRun = flags.has("--dry-run");
const arquivar = flags.has("--arquivar");

function log(msg) {
  console.log(msg);
}

/**
 * Lê as credenciais de `.env.deploy` (KEY=valor por linha, # para comentário).
 * Sem esse arquivo, cai para as variáveis de ambiente — é assim que o GitHub
 * Actions publica, com os valores vindos dos secrets do repositório.
 */
async function carregarEnv() {
  const caminho = join(WEB, ".env.deploy");
  let bruto;
  try {
    bruto = await readFile(caminho, "utf8");
  } catch {
    if (process.env.FTP_HOST) {
      // Um secret opcional não cadastrado chega como string vazia, não como
      // ausente — descartá-las é o que faz os padrões abaixo valerem.
      const doAmbiente = Object.fromEntries(
        ["FTP_HOST", "FTP_USER", "FTP_PASSWORD", "FTP_PORT", "FTP_REMOTE_DIR"]
          .map((chave) => [chave, process.env[chave]?.trim()])
          .filter(([, valor]) => valor),
      );
      for (const obrigatoria of ["FTP_USER", "FTP_PASSWORD"]) {
        if (!doAmbiente[obrigatoria]) {
          throw new Error(`Defina a variável de ambiente ${obrigatoria}`);
        }
      }
      doAmbiente.FTP_REMOTE_DIR ??= "/public_html";
      log("Credenciais lidas do ambiente (sem .env.deploy).");
      return doAmbiente;
    }
    throw new Error(
      `Arquivo de credenciais não encontrado: ${caminho}\n` +
        "Crie-o a partir de .env.deploy.example — ou defina FTP_HOST, FTP_USER " +
        "e FTP_PASSWORD no ambiente.",
    );
  }

  const env = {};
  for (const linha of bruto.split(/\r?\n/)) {
    const limpa = linha.trim();
    if (!limpa || limpa.startsWith("#")) continue;
    const idx = limpa.indexOf("=");
    if (idx === -1) continue;
    const chave = limpa.slice(0, idx).trim();
    // Remove aspas ao redor do valor, se houver.
    const valor = limpa
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    // Linha sem valor equivale a chave ausente, para os padrões valerem.
    if (valor) env[chave] = valor;
  }

  for (const obrigatoria of ["FTP_HOST", "FTP_USER", "FTP_PASSWORD"]) {
    if (!env[obrigatoria]) {
      throw new Error(`Defina ${obrigatoria} em .env.deploy`);
    }
  }
  env.FTP_REMOTE_DIR ??= "/public_html";
  return env;
}

/** Conecta tentando FTPS explícito e caindo para FTP simples se indisponível. */
async function conectar(client, env) {
  const base = {
    host: env.FTP_HOST,
    user: env.FTP_USER,
    password: env.FTP_PASSWORD,
    // `|| 21` e não `?? 21`: um valor invalido ou vazio vira 0 em Number(),
    // e conectar na porta 0 falha com um ECONNREFUSED enganoso.
    port: Number(env.FTP_PORT) || 21,
  };
  log(`Conectando em ${base.host}:${base.port} como ${base.user}…`);

  try {
    await client.access({
      ...base,
      secure: true,
      // Hospedagem compartilhada costuma usar certificado do servidor, não do
      // domínio — a criptografia vale, a validação do nome não se aplica.
      secureOptions: { rejectUnauthorized: false },
    });
    log("Conectado com FTPS (AUTH TLS).");
  } catch {
    await client.access({ ...base, secure: false });
    log("⚠ FTPS indisponível — conectado com FTP simples (sem criptografia).");
  }
}

/** Conta arquivos e bytes de um diretório local, recursivamente. */
async function medirLocal(dir) {
  let arquivos = 0;
  let bytes = 0;
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, entrada.name);
    if (entrada.isDirectory()) {
      const sub = await medirLocal(caminho);
      arquivos += sub.arquivos;
      bytes += sub.bytes;
    } else {
      arquivos += 1;
      bytes += (await stat(caminho)).size;
    }
  }
  return { arquivos, bytes };
}

/**
 * Move todo o conteúdo atual da pasta pública para um diretório de arquivo
 * morto, um nível acima (fora do alcance da web). Renomeia diretórios inteiros,
 * então é rápido e reversível.
 */
async function arquivarSiteAntigo(client, remoteDir, selo) {
  const atual = await client.list(remoteDir);
  const mover = atual.filter((e) => !PRESERVAR.has(e.name));

  if (mover.length === 0) {
    log("Pasta pública já está vazia — nada a arquivar.");
    return;
  }

  // Um nível acima da pasta pública: `/public_html` → `/_site-antigo-<data>`.
  const pai = remoteDir.replace(/\/+$/, "").split("/").slice(0, -1).join("/");
  const destino = `${pai}/_site-antigo-${selo}`;
  log(`\nArquivando ${mover.length} entrada(s) em ${destino}`);

  if (dryRun) {
    for (const e of mover) log(`  [dry-run] mover ${e.name}`);
    return;
  }

  await client.ensureDir(destino);
  await client.cd(remoteDir);

  for (const entrada of mover) {
    try {
      await client.rename(entrada.name, `${destino}/${entrada.name}`);
      log(`  movido: ${entrada.name}`);
    } catch (erro) {
      log(`  ⚠ falhou ao mover ${entrada.name}: ${erro.message}`);
    }
  }
}

async function main() {
  const env = await carregarEnv();
  const remoteDir = env.FTP_REMOTE_DIR;

  const { arquivos, bytes } = await medirLocal(DIR_LOCAL).catch(() => {
    throw new Error(`Build não encontrado em ${DIR_LOCAL}. Rode: npm run build`);
  });

  log("— Publicação do Projeto Regenere —");
  log(`Origem:  ${DIR_LOCAL} (${arquivos} arquivos, ${(bytes / 1024 / 1024).toFixed(1)} MB)`);
  log(`Destino: ${env.FTP_HOST}:${remoteDir}`);
  log(`Modo:    ${dryRun ? "SIMULAÇÃO (nada será escrito)" : "PUBLICAÇÃO REAL"}${arquivar ? " + arquivar site antigo" : ""}`);

  const client = new Client(30_000);
  client.ftp.verbose = false;

  try {
    await conectar(client, env);

    const antes = await client.list(remoteDir);
    log(`\nConteúdo atual de ${remoteDir}: ${antes.length} entrada(s)`);
    for (const e of antes.slice(0, 25)) {
      log(`  ${e.isDirectory ? "d" : "-"} ${e.name}`);
    }
    if (antes.length > 25) log(`  … e outras ${antes.length - 25}`);

    if (arquivar) {
      // Selo de data para o nome da pasta de arquivo morto.
      const selo = new Date().toISOString().slice(0, 10);
      await arquivarSiteAntigo(client, remoteDir, selo);
    }

    if (dryRun) {
      log(`\n[dry-run] Enviaria ${arquivos} arquivos para ${remoteDir}. Nada foi alterado.`);
      return;
    }

    log("\nEnviando arquivos…");
    client.trackProgress((info) => {
      if (info.name) process.stdout.write(`\r  ${info.name.padEnd(60).slice(0, 60)}`);
    });
    await client.ensureDir(remoteDir);
    await client.uploadFromDir(DIR_LOCAL, remoteDir);
    client.trackProgress();

    log("\n\n✓ Publicação concluída.");
    log("Confira: https://projeto-regenere.com.br");
  } finally {
    client.close();
  }
}

main().catch((erro) => {
  console.error(`\n✖ ${erro.message}`);
  process.exit(1);
});
