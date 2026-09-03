/**
 * Atualiza a marca do site a partir de um arquivo de imagem novo.
 *
 * Uso:
 *   node scripts/atualizar-marca.mjs <caminho-da-imagem>
 *   node scripts/atualizar-marca.mjs <caminho> --completa   # mantém o wordmark
 *
 * O cabeçalho e o rodapé usam apenas o símbolo (a árvore) num badge circular —
 * a palavra "Regenere" é tipografia CSS, não imagem. Por isso o script detecta
 * quando o arquivo traz símbolo + wordmark empilhados e recorta só o símbolo.
 * Com `--completa` a imagem inteira é usada.
 *
 * Fundo branco opaco (comum em exportações e capturas de tela) é convertido em
 * transparência, preservando as cores vivas das folhas.
 *
 * Gera:
 *   public/images/brand/logo.webp   — símbolo usado no site
 *   src/app/icon.png                — favicon (o Next detecta pelo nome)
 * e atualiza as dimensões em src/content/_image-meta.json.
 */
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB = resolve(__dirname, "..");

/** Um pixel é fundo quando está a menos de LIMITE do branco em todos os canais. */
const LIMITE = 20;

const [caminhoEntrada, ...resto] = process.argv.slice(2);
const usarCompleta = resto.includes("--completa");

if (!caminhoEntrada) {
  console.error("Informe o caminho da imagem. Ex.: node scripts/atualizar-marca.mjs logo.png");
  process.exit(1);
}

const original = sharp(caminhoEntrada).ensureAlpha();
const { data, info } = await original.raw().toBuffer({ resolveWithObject: true });
const { width: L, height: A, channels: C } = info;

/** Distância do branco: 0 = branco puro, 255 = cor saturada/escura. */
function distDoBranco(x, y) {
  const i = (y * L + x) * C;
  return Math.max(255 - data[i], 255 - data[i + 1], 255 - data[i + 2]);
}

// Blocos verticais de conteúdo, separados por faixas de fundo.
const blocos = [];
let inicio = null;
for (let y = 0; y < A; y++) {
  let temConteudo = false;
  for (let x = 0; x < L; x++) {
    if (distDoBranco(x, y) >= LIMITE) {
      temConteudo = true;
      break;
    }
  }
  if (temConteudo && inicio === null) inicio = y;
  if (!temConteudo && inicio !== null) {
    blocos.push([inicio, y - 1]);
    inicio = null;
  }
}
if (inicio !== null) blocos.push([inicio, A - 1]);

if (blocos.length === 0) {
  console.error("A imagem parece vazia (nenhum pixel diferente do branco).");
  process.exit(1);
}

/**
 * Junta blocos separados por lacunas pequenas — pontos soltos da copa da árvore
 * ficam isolados e não devem ser confundidos com uma seção à parte.
 */
const LACUNA_DE_SECAO = 15;
const secoes = [blocos[0].slice()];
for (const [de, ate] of blocos.slice(1)) {
  const atual = secoes[secoes.length - 1];
  if (de - atual[1] - 1 <= LACUNA_DE_SECAO) atual[1] = ate;
  else secoes.push([de, ate]);
}

console.log(`Imagem: ${L}×${A}`);
console.log(`Seções de conteúdo detectadas: ${secoes.length}`);
secoes.forEach(([de, ate], i) => console.log(`  ${i + 1}: y ${de}–${ate} (altura ${ate - de + 1})`));

// Sem --completa, usa a primeira seção (o símbolo) quando há mais de uma.
const [topo, base] =
  usarCompleta || secoes.length === 1 ? [secoes[0][0], secoes[secoes.length - 1][1]] : secoes[0];

if (!usarCompleta && secoes.length > 1) {
  console.log(`→ Recortando apenas o símbolo (y ${topo}–${base}); wordmark descartado.`);
} else {
  console.log(`→ Usando a imagem completa (y ${topo}–${base}).`);
}

// Extensão horizontal do recorte.
let minX = L;
let maxX = 0;
for (let y = topo; y <= base; y++) {
  for (let x = 0; x < L; x++) {
    if (distDoBranco(x, y) >= LIMITE) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
    }
  }
}

const largura = maxX - minX + 1;
const altura = base - topo + 1;
console.log(`Recorte: x ${minX}–${maxX}, y ${topo}–${base} (${largura}×${altura})`);

/*
 * Converte o fundo branco em transparência recuperando a cor real das bordas.
 *
 * Um pixel de borda suavizada é a cor do desenho (C) misturada com o branco do
 * fundo na proporção da cobertura (α):  P = α·C + (1−α)·255.  Reescrevendo em
 * termos da distância do branco (d = 255 − valor):  d(P) = α · d(C).  Então,
 * conhecendo a cor pura mais próxima, saem tanto α quanto a cor sem a mistura.
 *
 * Sem essa correção a borda fica com a cor lavada de branco, o que produz um
 * halo claro em volta do desenho sobre fundos escuros (visível no favicon
 * quando o navegador está em tema escuro).
 */
const LIMITE_FUNDO = 6; // até aqui é fundo puro
const LIMITE_NUCLEO = 100; // a partir daqui a cor já é a do desenho
const RAIO_BUSCA = 6;

const distEm = (x, y) => {
  const i = (y * L + x) * C;
  return Math.max(255 - data[i], 255 - data[i + 1], 255 - data[i + 2]);
};

/** Cor pura mais próxima de (x, y), buscando em anéis crescentes. */
function corDoNucleo(x, y) {
  for (let raio = 1; raio <= RAIO_BUSCA; raio++) {
    let melhor = null;
    let melhorDist = -1;
    for (let dy = -raio; dy <= raio; dy++) {
      for (let dx = -raio; dx <= raio; dx++) {
        // Só a borda do anel atual.
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== raio) continue;
        const vx = x + dx;
        const vy = y + dy;
        if (vx < 0 || vy < 0 || vx >= L || vy >= A) continue;
        const d = distEm(vx, vy);
        if (d >= LIMITE_NUCLEO && d > melhorDist) {
          melhorDist = d;
          const i = (vy * L + vx) * C;
          melhor = [data[i], data[i + 1], data[i + 2], d];
        }
      }
    }
    if (melhor) return melhor;
  }
  return null;
}

const recorte = Buffer.alloc(largura * altura * 4);
for (let y = 0; y < altura; y++) {
  for (let x = 0; x < largura; x++) {
    const ox = x + minX;
    const oy = y + topo;
    const origem = (oy * L + ox) * C;
    const destino = (y * largura + x) * 4;
    const dist = distEm(ox, oy);
    const alphaOriginal = C === 4 ? data[origem + 3] : 255;

    let r = data[origem];
    let g = data[origem + 1];
    let b = data[origem + 2];
    let alpha;

    if (dist <= LIMITE_FUNDO) {
      alpha = 0;
    } else if (dist >= LIMITE_NUCLEO) {
      alpha = 255;
    } else {
      const nucleo = corDoNucleo(ox, oy);
      if (nucleo) {
        const [nr, ng, nb, distNucleo] = nucleo;
        r = nr;
        g = ng;
        b = nb;
        alpha = Math.round(Math.min(1, dist / distNucleo) * 255);
      } else {
        // Sem cor pura por perto: trata como véu do fundo.
        alpha = Math.round((dist / LIMITE_NUCLEO) * 255);
      }
    }

    recorte[destino] = r;
    recorte[destino + 1] = g;
    recorte[destino + 2] = b;
    recorte[destino + 3] = Math.min(alphaOriginal, alpha);
  }
}

const base4 = { raw: { width: largura, height: altura, channels: 4 } };

const destinoLogo = resolve(WEB, "public/images/brand/logo.webp");
const infoLogo = await sharp(recorte, base4)
  // Não amplia: preserva a nitidez do arquivo enviado.
  .resize({ width: 520, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100, effort: 5 })
  .toFile(destinoLogo);
console.log(`✓ public/images/brand/logo.webp (${infoLogo.width}×${infoLogo.height}, ${Math.round(infoLogo.size / 1024)}kb)`);

const destinoIcone = resolve(WEB, "src/app/icon.png");
await sharp(recorte, base4)
  .resize({
    width: 256,
    height: 256,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(destinoIcone);
console.log("✓ src/app/icon.png (favicon 256×256)");

// Mantém as dimensões registradas em sincronia com o arquivo gerado.
const caminhoMeta = resolve(WEB, "src/content/_image-meta.json");
const meta = JSON.parse(await readFile(caminhoMeta, "utf8"));
meta["public/images/brand/logo.webp"] = {
  width: infoLogo.width,
  height: infoLogo.height,
  kb: Math.round(infoLogo.size / 1024),
};
await writeFile(caminhoMeta, `${JSON.stringify(meta, null, 2)}\n`, "utf8");
console.log("✓ src/content/_image-meta.json atualizado");
