import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Monta uma URL absoluta a partir de um caminho relativo. */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix === "/" ? "" : suffix}`;
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
    alternates: { canonical: path },
    openGraph: {
      title: title ?? siteConfig.name,
      description: resolvedDescription,
      url: path,
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
