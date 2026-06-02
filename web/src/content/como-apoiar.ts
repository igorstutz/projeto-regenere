import type { CallToAction, Feature, PageSeo } from "./_types";

export interface ComoApoiarContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  paths: { title: string; intro: string; items: Feature[] };
  cta: CallToAction;
}

export const comoApoiarContent: ComoApoiarContent = {
  seo: {
    title: "Como apoiar",
    description:
      "Empresas, instituições e comunidades podem se somar ao Projeto Regenere e " +
      "levar desenvolvimento territorial de impacto a novos territórios.",
  },
  hero: {
    eyebrow: "Como apoiar",
    title: "Leve o Regenere ao seu território.",
    intro:
      "Trabalhamos com quem busca soluções de impacto integrado. Há diferentes " +
      "formas de caminhar com a gente — escolha a que faz sentido para você.",
  },
  paths: {
    title: "Formas de apoiar",
    intro: "Cada perfil contribui de um jeito para ampliar o impacto.",
    items: [
      {
        title: "Empresas e patrocinadores",
        description:
          "Patrocine o programa e associe sua marca a um impacto social mensurável " +
          "nos territórios.",
      },
      {
        title: "Instituições e universidades",
        description:
          "Some conhecimento, pesquisa e extensão ao trabalho desenvolvido nas " +
          "comunidades.",
      },
      {
        title: "Comunidades e lideranças",
        description:
          "Quer levar a metodologia ao seu território? Vamos construir esse caminho " +
          "juntos.",
      },
    ],
  },
  cta: {
    title: "Vamos conversar?",
    description:
      "Conte para a gente quem você é e como gostaria de apoiar. Retornaremos o " +
      "contato.",
    primary: { label: "Falar com a equipe", href: "/contato" },
  },
};
