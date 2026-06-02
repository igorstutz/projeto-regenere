import type { CallToAction, Feature, PageSeo, ProseBlock } from "./_types";

export interface SobreContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  blocks: ProseBlock[];
  values: { title: string; items: Feature[] };
  cta: CallToAction;
}

export const sobreContent: SobreContent = {
  seo: {
    title: "O Projeto",
    description:
      "Conheça o Projeto Regenere: o que fazemos, por que existimos e como " +
      "promovemos desenvolvimento territorial com impacto real.",
  },
  hero: {
    eyebrow: "O Projeto",
    title: "Desenvolvimento que começa pelas pessoas do território.",
    intro:
      "O Regenere é um programa de desenvolvimento territorial que integra as " +
      "dimensões econômica, social, cultural e ambiental para gerar transformação " +
      "duradoura em comunidades urbanas e rurais.",
  },
  blocks: [
    {
      title: "O desafio",
      paragraphs: [
        "Muitos territórios urbanos e rurais concentram talento, cultura e potencial " +
          "produtivo, mas enfrentam barreiras de acesso a mercado, crédito, " +
          "qualificação e redes de apoio. Iniciativas pontuais e de fora raramente " +
          "geram mudança que permanece.",
      ],
    },
    {
      title: "A nossa abordagem",
      paragraphs: [
        "O Regenere atua de dentro para fora: parte dos saberes, das lideranças e das " +
          "vocações que já existem na comunidade. Em vez de soluções prontas, " +
          "construímos caminhos junto com cada território.",
        "Fortalecemos empreendimentos locais, articulamos redes socioprodutivas e " +
          "conectamos a comunidade a instituições de ensino, ao poder público e ao setor " +
          "privado — sempre com foco em resultados concretos e mensuráveis.",
      ],
    },
  ],
  values: {
    title: "Princípios que orientam o nosso trabalho",
    items: [
      {
        title: "Protagonismo local",
        description:
          "As pessoas do território são protagonistas das soluções, não " +
          "beneficiárias passivas.",
      },
      {
        title: "Visão integrada",
        description:
          "Economia, sociedade, cultura e meio ambiente são tratados como partes de " +
          "um mesmo sistema.",
      },
      {
        title: "Valorização de saberes",
        description:
          "Conhecimento técnico e acadêmico caminham junto com saberes tradicionais " +
          "e populares.",
      },
      {
        title: "Impacto duradouro",
        description:
          "Buscamos autonomia e continuidade — não dependência de um programa " +
          "externo.",
      },
    ],
  },
  cta: {
    title: "Quer entender como aplicamos isso na prática?",
    description: "Conheça a metodologia que estrutura a atuação do Regenere.",
    primary: { label: "Ver a metodologia", href: "/metodologia" },
    secondary: { label: "Conhecer as experiências", href: "/experiencias" },
  },
};
