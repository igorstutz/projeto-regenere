import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

/**
 * Dados estruturados (Schema.org) para a organização. Inserir uma única vez,
 * no layout raiz, melhora a forma como o site aparece em buscadores.
 */
export function organizationJsonLd() {
  const sameAs = [siteConfig.social.instagram].filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    logo: absoluteUrl("/opengraph-image"),
  };
}

/** Dados estruturados para o site (habilita caixa de busca / nome do site). */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
  };
}
