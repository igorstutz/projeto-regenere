/**
 * Configuração global do site — fonte única de verdade para metadados,
 * informações de contato e redes sociais.
 *
 * ⚠️ DADOS A CONFIRMAR COM O CLIENTE (parecem dados de template/demo no site
 * atual): telefone e endereços. Estão marcados com `// TODO: confirmar`.
 */

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

export const siteConfig: SiteConfig = {
  name: "Projeto Regenere",
  shortName: "Regenere",
  tagline: "Desenvolvimento territorial com impacto real.",
  description:
    "O Projeto Regenere promove o desenvolvimento territorial em comunidades " +
    "urbanas e rurais por meio da revitalização de territórios, do fortalecimento " +
    "de empreendimentos locais e da construção de redes socioprodutivas.",
  url: "https://projeto-regenere.com.br",
  locale: "pt-BR",
  contact: {
    email: "contato@projeto-regenere.com.br",
    phone: "+55 (11) 3099-8877", // TODO: confirmar — DDD 11 destoa da atuação no RS
    phoneHref: "+551130998877", // TODO: confirmar
    addresses: [
      // TODO: confirmar — os endereços do site atual parecem dados de demonstração
      { label: "Atendimento", lines: ["A confirmar com a equipe do projeto"] },
    ],
  },
  social: {
    instagram: "https://instagram.com/projetoregenere",
  },
};
