/**
 * Confere se o painel (`public/admin/config.yml`) descreve exatamente os dados
 * de `src/content/data/`.
 *
 * Por que isso importa: o Sveltia CMS grava apenas os campos declarados no
 * config. Uma chave que exista no JSON e não esteja no config é APAGADA na
 * primeira vez que alguém salvar aquela página pelo painel — silenciosamente.
 *
 * Uso:  npm run cms:check
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB = resolve(__dirname, "..");
const RAIZ = resolve(WEB, ".."); // os caminhos do config são relativos ao repositório
const CONFIG = join(WEB, "public/admin/config.yml");

const erros = [];
const avisos = [];

/** Índice dos campos declarados, por nome. */
function indexar(fields = []) {
  return new Map(fields.map((f) => [f.name, f]));
}

/**
 * Compara um valor do JSON com o campo que o descreve no config.
 * `caminho` é usado só para mensagens de erro.
 */
function conferirValor(valor, campo, caminho) {
  if (valor === null || valor === undefined) return;

  // Lista: pode ser de objetos (`fields`) ou de valores simples (`field`/nada).
  if (Array.isArray(valor)) {
    if (campo.fields) {
      valor.forEach((item, i) => conferirObjeto(item, campo.fields, `${caminho}[${i}]`));
    } else if (typeof valor[0] === "object" && valor[0] !== null) {
      erros.push(`${caminho}: lista de objetos sem "fields" declarados no config`);
    }
    return;
  }

  if (typeof valor === "object") {
    if (campo.fields) conferirObjeto(valor, campo.fields, caminho);
    else erros.push(`${caminho}: objeto sem "fields" declarados no config`);
    return;
  }

  // Valores de um select precisam estar entre as opções oferecidas ao editor.
  if (campo.widget === "select" && Array.isArray(campo.options)) {
    const validas = campo.options.map((o) => (typeof o === "object" ? o.value : o));
    if (!validas.includes(valor)) {
      avisos.push(`${caminho}: valor "${valor}" fora das opções do select (${validas.join(", ")})`);
    }
  }
}

/** Confere um objeto do JSON contra a lista de campos declarada. */
function conferirObjeto(dados, fields, caminho) {
  const declarados = indexar(fields);

  for (const [chave, valor] of Object.entries(dados)) {
    const campo = declarados.get(chave);
    if (!campo) {
      erros.push(`${caminho}.${chave}: existe no JSON mas NÃO está no config (seria apagado ao salvar)`);
      continue;
    }
    conferirValor(valor, campo, `${caminho}.${chave}`);
  }

  for (const campo of fields) {
    if (!(campo.name in dados) && campo.required !== false) {
      avisos.push(`${caminho}.${campo.name}: declarado no config e ausente no JSON`);
    }
  }
}

function lerJson(caminho) {
  return JSON.parse(readFileSync(caminho, "utf8"));
}

// ---------------------------------------------------------------------------

const config = parse(readFileSync(CONFIG, "utf8"));
let arquivosConferidos = 0;

for (const colecao of config.collections ?? []) {
  // Coleção de arquivos fixos (páginas, configurações).
  for (const arquivo of colecao.files ?? []) {
    const caminho = join(RAIZ, arquivo.file);
    if (!existsSync(caminho)) {
      erros.push(`${colecao.name}/${arquivo.name}: arquivo inexistente — ${arquivo.file}`);
      continue;
    }
    conferirObjeto(lerJson(caminho), arquivo.fields, arquivo.name);
    arquivosConferidos += 1;
  }

  // Coleção de pasta (experiências): confere todas as entradas.
  if (colecao.folder) {
    const pasta = join(RAIZ, colecao.folder);
    if (!existsSync(pasta)) {
      erros.push(`${colecao.name}: pasta inexistente — ${colecao.folder}`);
      continue;
    }
    for (const nome of readdirSync(pasta).filter((n) => n.endsWith(".json"))) {
      conferirObjeto(lerJson(join(pasta, nome)), colecao.fields, `${colecao.name}/${nome}`);
      arquivosConferidos += 1;
    }
  }
}

// Pastas de mídia referenciadas pelo painel.
for (const alvo of [config, ...(config.asset_collections ?? [])]) {
  const pasta = alvo.media_folder;
  if (pasta && !pasta.startsWith("http") && !existsSync(join(RAIZ, pasta))) {
    avisos.push(`media_folder inexistente: ${pasta} (será criada no primeiro envio)`);
  }
}

console.log(`Painel conferido contra ${arquivosConferidos} arquivo(s) de conteúdo.\n`);

if (avisos.length) {
  console.log(`Avisos (${avisos.length}):`);
  for (const a of avisos) console.log(`  • ${a}`);
  console.log("");
}

if (erros.length) {
  console.error(`✗ ${erros.length} problema(s) que causam perda de conteúdo:`);
  for (const e of erros) console.error(`  • ${e}`);
  process.exit(1);
}

console.log("✓ Todos os campos dos JSON estão declarados no config.yml.");
