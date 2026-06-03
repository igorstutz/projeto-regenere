import type { NextConfig } from "next";

// Quando publicado no GitHub Pages sob um sub-caminho (ex.: /projeto-regenere),
// o workflow define NEXT_PUBLIC_BASE_PATH. Em desenvolvimento fica vazio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Exportação estática (HTML/CSS/JS) — compatível com GitHub Pages.
  output: "export",
  // GitHub Pages serve melhor com barra final (gera /pagina/index.html).
  trailingSlash: true,
  // Prefixo de caminho quando hospedado em sub-pasta.
  basePath: basePath || undefined,
  images: {
    // As imagens já são pré-otimizadas em WebP por scripts/import-images.mjs,
    // então servimos os arquivos diretamente — necessário para exportação
    // estática e compatível com qualquer hospedagem.
    unoptimized: true,
  },
};

export default nextConfig;
