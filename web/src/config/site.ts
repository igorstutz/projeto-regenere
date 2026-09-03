/**
 * Configuração global do site — fonte única de verdade para metadados,
 * informações de contato e redes sociais.
 *
 * ⚠️ Endereços ainda não confirmados — por isso não são exibidos em nenhuma
 * página. Estão marcados com `// TODO: confirmar`.
 */

import dados from "../content/data/site.json";

export interface PostalAddress {
  /** Rótulo curto, ex.: "Sede" ou "Atendimento". */
  label?: string;
  /** Linhas do endereço, na ordem de exibição. */
  lines: string[];
}

export interface ContactInfo {
  email: string;
  /** Telefone formatado para exibição. */
  phone?: string;
  /** Telefone em formato E.164 para o link `tel:`. */
  phoneHref?: string;
  /** WhatsApp em formato internacional (somente dígitos) para link wa.me. */
  whatsapp?: string;
  addresses?: PostalAddress[];
}

export interface SocialLinks {
  instagram?: string;
}

export interface SiteConfig {
  /** Nome completo, usado em títulos e metadados. */
  name: string;
  /** Nome curto / marca. */
  shortName: string;
  /** Frase-síntese exibida em destaques. */
  tagline: string;
  /** Descrição padrão para SEO (meta description fallback). */
  description: string;
  /** URL canônica de produção (sem barra final). */
  url: string;
  /** Locale no formato BCP-47. */
  locale: string;
  contact: ContactInfo;
  social: SocialLinks;
}

export const siteConfig: SiteConfig = dados;
