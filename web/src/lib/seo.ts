import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Normaliza um caminho para o formato realmente servido pela hospedagem.
 * Como o build usa `trailingSlash: true` (gera `/sobre/index.html`), páginas
 * levam barra final — assim canonical e sitemap apontam para a URL final, sem
 * depender do redirecionamento do Apache. Arquivos (ex.: `/sitemap.xml`) ficam
 * intactos.
 */
export function pagePath(path = "/"): string {
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+$/i.test(withLeading);
  if (isFile || withLeading.endsWith("/")) return withLeading;
  return `${withLeading}/`;
}

/** Monta uma URL absoluta a partir de um caminho relativo. */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  return `${base}${pagePath(path)}`;
}

export interface BuildMetadataParams {
  title?: string;
  description?: string;
  /** Caminho relativo da página (ex.: "/sobre"). Usado para canonical e OG. */
  path?: string;
  /** Permite remover a página dos índices de busca. */
  noindex?: boolean;
}

/**
 * Helper central de metadados. Garante canonical, Open Graph e Twitter Card
 * consistentes em todas as páginas. O `metadataBase` e o template de título
 * ficam no layout raiz; aqui passamos apenas caminhos relativos.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  noindex = false,
}: BuildMetadataParams = {}): Metadata {
  const resolvedDescription = description ?? siteConfig.description;

  return {
    title,
    description: resolvedDescription,
    alternates: { canonical: pagePath(path) },
    openGraph: {
      title: title ?? siteConfig.name,
      description: resolvedDescription,
      url: pagePath(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.name,
      description: resolvedDescription,
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
