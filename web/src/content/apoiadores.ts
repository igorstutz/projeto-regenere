import type { CallToAction, PageSeo } from "./_types";

/** Patrocinador ou parceiro do projeto. */
export interface Supporter {
  name: string;
  description?: string;
  /** Site oficial (link externo). */
  url?: string;
  /** Caminho do logo em /public (a adicionar quando recebido em alta resolução). */
  logo?: string;
}

export interface ApoiadoresContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  sponsors: { title: string; intro: string; items: Supporter[] };
  partners: { title: string; intro: string; items: Supporter[] };
  cta: CallToAction;
}

export const apoiadoresContent: ApoiadoresContent = {
  seo: {
    title: "Apoiadores",
    description:
      "Patrocinadores e parceiros que tornam o Projeto Regenere possível — " +
      "instituições comprometidas com o desenvolvimento territorial sustentável.",
  },
  hero: {
    eyebrow: "Apoiadores",
    title: "Construído de forma colaborativa.",
    intro:
      "O Regenere só é possível graças a instituições comprometidas com o " +
      "desenvolvimento sustentável, a inclusão produtiva e a inovação social.",
  },
  sponsors: {
    title: "Patrocinadores",
    intro: "Instituições que financiam e viabilizam o programa.",
    items: [
      {
        name: "Regenera RS",
        description:
          "Iniciativa de reconstrução e desenvolvimento socioeconômico do Rio Grande " +
          "do Sul.",
      },
      {
        name: "BRDE",
        description:
          "Banco Regional de Desenvolvimento do Extremo Sul, que financia projetos de " +
          "desenvolvimento econômico.",
      },
    ],
  },
  partners: {
    title: "Parceiros",
    intro:
      "Instituições de ensino e organizações que somam conhecimento e alcance ao " +
      "programa.",
    items: [
      { name: "IFRS", description: "Instituto Federal do Rio Grande do Sul." },
      { name: "UFRGS", description: "Universidade Federal do Rio Grande do Sul." },
      { name: "UMPE", description: "Universo MPE — plataforma de apoio aos empreendimentos.", url: "https://umpe.com.br" },
      // TODO: incluir os demais parceiros (o site atual exibe ~13 logos sem nome).
    ],
  },
  cta: {
    title: "Quer apoiar o Projeto Regenere?",
    description:
      "Empresas e instituições podem se tornar parceiras e ampliar o impacto nos " +
      "territórios.",
    primary: { label: "Como apoiar", href: "/como-apoiar" },
    secondary: { label: "Falar com a equipe", href: "/contato" },
  },
};
