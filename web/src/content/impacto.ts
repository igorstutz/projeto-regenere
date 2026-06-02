import type { CallToAction, PageSeo, ProseBlock, Stat } from "./_types";

export interface ImpactoContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  stats: Stat[];
  blocks: ProseBlock[];
  cta: CallToAction;
}

export const impactoContent: ImpactoContent = {
  seo: {
    title: "Impacto",
    description:
      "Os resultados do Projeto Regenere nos territórios: famílias atendidas, " +
      "negócios fortalecidos e redes socioprodutivas construídas.",
  },
  hero: {
    eyebrow: "Impacto",
    title: "Resultados que se medem em vidas transformadas.",
    intro:
      "Acompanhamos de perto o efeito da nossa atuação. Os números abaixo resumem " +
      "parte do que já foi construído junto às comunidades.",
  },
  stats: [
    {
      value: "100+",
      label: "famílias quilombolas atendidas",
      description: "no território rural de Tavares (RS).",
    },
    {
      value: "20+",
      label: "negócios locais impulsionados",
      description: "no bairro Bom Jesus, em Porto Alegre.",
    },
    {
      value: "2",
      label: "territórios ativos",
      description: "um urbano e um rural, com modelo replicável.",
    },
  ],
  blocks: [
    {
      title: "Como medimos impacto",
      paragraphs: [
        "Mais do que contabilizar atividades, o Regenere acompanha indicadores de " +
          "geração de renda, autonomia dos empreendimentos e fortalecimento das redes " +
          "locais ao longo do tempo.",
        "Esta página será atualizada periodicamente com novos indicadores, relatórios " +
          "e histórias de transformação dos territórios.",
        // TODO: inserir indicadores consolidados, relatórios e depoimentos reais.
      ],
    },
  ],
  cta: {
    title: "Ajude a ampliar esse impacto.",
    primary: { label: "Como apoiar", href: "/como-apoiar" },
    secondary: { label: "Conhecer as experiências", href: "/experiencias" },
  },
};
