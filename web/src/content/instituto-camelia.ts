import type { CallToAction, Feature, PageSeo, ProseBlock } from "./_types";

export interface InstitutoContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  blocks: ProseBlock[];
  objectives: { title: string; items: Feature[] };
  initiatives: { title: string; items: { name: string; description: string }[] };
  cta: CallToAction;
}

export const institutoContent: InstitutoContent = {
  seo: {
    title: "Instituto Camélia",
    description:
      "O Instituto Camélia é a organização que idealiza e conduz o Projeto " +
      "Regenere, articulando comunidades, instituições de ensino e poder público.",
  },
  hero: {
    eyebrow: "Instituto Camélia",
    title: "A organização por trás do Regenere.",
    intro:
      "O Instituto Camélia idealiza e conduz o Projeto Regenere, atuando como ponte " +
      "entre comunidades, instituições de ensino e os setores público e privado.",
  },
  blocks: [
    {
      paragraphs: [
        "O Instituto Camélia trabalha para integrar conhecimento acadêmico e prática " +
          "territorial, fortalecendo empreendimentos locais e promovendo inovação " +
          "social com valorização dos saberes tradicionais.",
      ],
    },
  ],
  objectives: {
    title: "O que buscamos",
    items: [
      {
        title: "Conectar saberes",
        description:
          "Integrar conhecimento técnico-acadêmico e saberes da comunidade.",
      },
      {
        title: "Fortalecer negócios locais",
        description: "Apoiar micro e pequenos empreendimentos a crescer com autonomia.",
      },
      {
        title: "Articular instituições",
        description:
          "Aproximar universidades, poder público e setor privado dos territórios.",
      },
      {
        title: "Promover inovação social",
        description:
          "Desenvolver soluções que respeitam a cultura e o contexto de cada lugar.",
      },
      {
        title: "Gerar renda e autonomia",
        description:
          "Criar condições para desenvolvimento econômico sustentável e duradouro.",
      },
    ],
  },
  initiatives: {
    title: "Iniciativas",
    items: [
      {
        name: "Kitanda da Luana",
        description:
          "Iniciativa de empreendedorismo que apoia a geração de renda no território.",
        // TODO: descrição completa a confirmar com a equipe.
      },
      {
        name: "Kitanda das Pretas",
        description:
          "Iniciativa voltada à autonomia econômica e ao protagonismo comunitário.",
        // TODO: descrição completa a confirmar com a equipe.
      },
    ],
  },
  cta: {
    title: "Conheça o trabalho do Instituto no território.",
    primary: { label: "Ver as experiências", href: "/experiencias" },
    secondary: { label: "Falar com o Instituto", href: "/contato" },
  },
};
