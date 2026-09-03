/**
 * Importa as imagens do site original (WordPress) e gera versões WebP
 * otimizadas em `public/images/`. Reexecutável (idempotente).
 *
 * Uso:  node scripts/import-images.mjs
 *
 * Logos preservam transparência (alpha). Fotos/banners são redimensionados e
 * comprimidos para boa performance. A logo de marca também vira o favicon
 * (src/app/icon.png), gerado automaticamente pelo Next.
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB = resolve(__dirname, "..");
const BASE = "https://projeto-regenere.com.br/wp-content/uploads";

/** kind: "logo" (alpha, nítido) | "photo" (foto/banner comprimido) */
const ASSETS = [
  // ---- Marca ----
  { src: `${BASE}/2026/04/Logo-ReGENERE-08.png`, out: "public/images/brand/logo.webp", kind: "logo", w: 520 },
  { src: `${BASE}/2026/04/Logo-ReGENERE-13-2.png`, out: "public/images/brand/logo-inverted.webp", kind: "logo", w: 520 },

  // ---- Patrocinadores ----
  { src: `${BASE}/2026/05/Logo-brde.png`, out: "public/images/sponsors/brde.webp", kind: "logo", w: 360 },
  { src: `${BASE}/2026/05/Logo-ReGENERa.png`, out: "public/images/sponsors/regenera.webp", kind: "logo", w: 360 },
  { src: `${BASE}/2026/05/Logo-UMPE-06.png`, out: "public/images/sponsors/umpe.webp", kind: "logo", w: 360 },

  // ---- Fotos: Instituto Camélia (Kitandas) ----
  { src: `${BASE}/2026/05/Abertura-kitanda-da-Luana_2.webp`, out: "public/images/photos/kitanda-luana-1.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-da-Luana_integrantes-do-IC_1.webp`, out: "public/images/photos/kitanda-luana-2.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Comunicador-e-a-kitandeira-Luana.webp`, out: "public/images/photos/kitanda-luana-3.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-das-pretas_1.webp`, out: "public/images/photos/kitanda-pretas-1.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-das-pretas_4.webp`, out: "public/images/photos/kitanda-pretas-2.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-das-pretas_7.webp`, out: "public/images/photos/kitanda-pretas-3.webp", kind: "photo" },

  // ---- Instituto Camélia: galeria completa ----
  // Kitanda da Luana (demais fotos)
  { src: `${BASE}/2026/05/Abertura-kitanda-da-Luana_3.webp`, out: "public/images/photos/kitanda-luana-4.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-da-Luana_4.webp`, out: "public/images/photos/kitanda-luana-5.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-da-Luana_kitandeira-e-sua-filha.webp`, out: "public/images/photos/kitanda-luana-6.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-da-Luana_mulheres-do-IC-e-Luana-1.webp`, out: "public/images/photos/kitanda-luana-7.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Recebimento-dos-alimentos_Luana.webp`, out: "public/images/photos/kitanda-luana-8.webp", kind: "photo" },
  { src: `${BASE}/2026/05/preparativos-para-a-abertura_Luana.webp`, out: "public/images/photos/kitanda-luana-9.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-da-Luana_com-Bruno-REDECOOP-1.webp`, out: "public/images/photos/kitanda-luana-10.webp", kind: "photo" },
  // Kitanda das Pretas (demais fotos)
  { src: `${BASE}/2026/05/Abertura-kitanda-das-pretas_2.webp`, out: "public/images/photos/kitanda-pretas-4.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-das-pretas_3.webp`, out: "public/images/photos/kitanda-pretas-5.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-das-pretas_5.webp`, out: "public/images/photos/kitanda-pretas-6.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-das-pretas_6.webp`, out: "public/images/photos/kitanda-pretas-7.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Abertura-kitanda-das-pretas_8.webp`, out: "public/images/photos/kitanda-pretas-8.webp", kind: "photo" },
  // Feiras e eventos / articulação institucional
  { src: `${BASE}/2026/05/Feira-semana-da-consciencia-negra_POA-2.webp`, out: "public/images/photos/feira-1.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Premio-periferia-viva-2.webp`, out: "public/images/photos/feira-2.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Visita-no-CD-da-REDECOOP.jpeg`, out: "public/images/photos/articulacao-1.webp", kind: "photo" },

  // ---- Fotos: Experiências (territórios) — TODO confirmar qual é Bom Jesus x Tavares ----
  { src: `${BASE}/2026/05/WhatsApp-Image-2026-05-18-at-21.41.30-1.jpeg`, out: "public/images/photos/experiencia-1.webp", kind: "photo" },
  { src: `${BASE}/2026/05/WhatsApp-Image-2026-05-18-at-21.43.41.jpeg`, out: "public/images/photos/experiencia-2.webp", kind: "photo" },
  { src: `${BASE}/2026/05/671215329_18182351461391390_7309264116516891468_n.jpg`, out: "public/images/photos/experiencia-3.webp", kind: "photo" },
  { src: `${BASE}/2026/05/694639003_18182351443391390_8679571333544803790_n.jpg`, out: "public/images/photos/experiencia-4.webp", kind: "photo" },
  { src: `${BASE}/2026/05/558947046_1353882209434492_9040018134502868547_n.jpg`, out: "public/images/photos/experiencia-5.webp", kind: "photo" },
  { src: `${BASE}/2026/05/671209519_18182351431391390_3238234406279276150_n.jpg`, out: "public/images/photos/experiencia-6.webp", kind: "photo" },
  { src: `${BASE}/2026/05/WhatsApp-Image-2026-05-18-at-21.41.29.jpeg`, out: "public/images/photos/experiencia-7.webp", kind: "photo" },
  { src: `${BASE}/2026/05/WhatsApp-Image-2026-05-18-at-21.43.41-1.jpeg`, out: "public/images/photos/experiencia-8.webp", kind: "photo" },

  // ---- Fotos: Sobre / Home ----
  { src: `${BASE}/2026/04/0b178cf3ddde403d46392314c60bcedd3614ccbc.jpg`, out: "public/images/photos/home-hero.webp", kind: "photo" },
  { src: `${BASE}/2026/04/7460de1b62bb52c86615011571b8b1acbeb93f8c.jpg`, out: "public/images/photos/sobre-1.webp", kind: "photo" },
  { src: `${BASE}/2026/04/ebe1b4aa7006c69e40a58cd93a6234021986a881.jpg`, out: "public/images/photos/sobre-2.webp", kind: "photo" },

  // ---- Fotos editoriais da metodologia (cenas de campo / construção coletiva) ----
  { src: `${BASE}/2026/05/Untitled-design-5.webp`, out: "public/images/photos/metodologia-comunidade.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Untitled-design-6.webp`, out: "public/images/photos/metodologia-diagnostico.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Untitled-design-7.webp`, out: "public/images/photos/metodologia-resultados.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Untitled-design-8.webp`, out: "public/images/photos/metodologia-planejamento.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Untitled-design-9.webp`, out: "public/images/photos/metodologia-produtos.webp", kind: "photo" },
  { src: `${BASE}/2026/05/Untitled-design-10.webp`, out: "public/images/photos/metodologia-aprender.webp", kind: "photo" },

  // Obs.: as fotos de "encontros" do site original eram prints de reuniões no
  // Google Meet (com barra do navegador) — impróprias para o site.
];

// Logos dos parceiros (1.png … 13.png).
// 1, 4 e 5 ficam de fora: são as marcas institucionais do Governo do Estado do
// RS, da Prefeitura de Porto Alegre e do Governo Federal, retiradas do site em
// 28/07/2026 por causa do período pré-eleitoral. Não reimportar sem decisão.
const LOGOS_RETIRADOS = new Set([1, 4, 5]);

for (let i = 1; i <= 13; i++) {
  if (LOGOS_RETIRADOS.has(i)) continue;
  ASSETS.push({
    src: `${BASE}/2026/05/${i}.png`,
    out: `public/images/partners/${i}.webp`,
    kind: "logo",
    w: 320,
  });
}

async function fetchBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

let ok = 0;
let fail = 0;
const meta = {};

for (const asset of ASSETS) {
  try {
    const buf = await fetchBuffer(asset.src);
    const outPath = resolve(WEB, asset.out);
    await mkdir(dirname(outPath), { recursive: true });

    const pipeline =
      asset.kind === "logo"
        ? sharp(buf)
            .resize({ width: asset.w ?? 400, withoutEnlargement: true })
            .webp({ quality: 92, alphaQuality: 100, effort: 5 })
        : sharp(buf)
            .resize({ width: 1400, withoutEnlargement: true })
            .webp({ quality: 76, effort: 5 });

    const info = await pipeline.toFile(outPath);
    meta[asset.out] = { width: info.width, height: info.height, kb: Math.round(info.size / 1024) };
    ok++;
    console.log(`✓ ${asset.out}  (${info.width}×${info.height}, ${Math.round(info.size / 1024)}kb)`);
  } catch (err) {
    fail++;
    console.warn(`✗ ${asset.out}  <- ${asset.src}\n   ${err.message}`);
  }
}

// Favicon: gera src/app/icon.png a partir da logo (Next serve como favicon).
try {
  const buf = await fetchBuffer(`${BASE}/2026/04/cropped-Logo-ReGENERE-12.png`);
  const iconPath = resolve(WEB, "src/app/icon.png");
  await sharp(buf)
    .resize({ width: 256, height: 256, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(iconPath);
  console.log("✓ src/app/icon.png (favicon)");
} catch (err) {
  console.warn(`✗ favicon: ${err.message}`);
}

// Salva dimensões para uso opcional pelos componentes.
await writeFile(
  resolve(WEB, "src/content/_image-meta.json"),
  JSON.stringify(meta, null, 2) + "\n",
);

console.log(`\nConcluído: ${ok} imagens, ${fail} falhas.`);
