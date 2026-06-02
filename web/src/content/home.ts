import type { CallToAction, Feature, PageSeo, Stat } from "./_types";

export interface HomeContent {
  seo: PageSeo;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  stats: Stat[];
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    href: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    items: Feature[];
    href: string;
  };
  experiences: {
    eyebrow: string;
    title: string;
    items: { name: string; kind: string; description: string; href: string }[];
  };
  cta: CallToAction;
}

export const homeContent: HomeContent = {
  seo: {
    title: "Projeto Regenere — Desenvolvimento territorial com impacto real",
    description:
      "Revitalizamos territórios urbanos e rurais, fortalecemos empreendimentos " +
      "locais e construímos redes socioprodutivas. Conheça o Projeto Regenere.",
  },
  hero: {
    eyebrow: "Desenvolvimento territorial",
    title: "Regenerar territórios é transformar vidas.",
    subtitle:
      "Atuamos em comunidades urbanas e rurais integrando as dimensões econômica, " +
      "social, cultural e ambiental para gerar renda, autonomia e desenvolvimento " +
      "duradouro.",
    primary: { label: "Conheça o projeto", href: "/sobre" },
    secondary: { label: "Leve ao seu território", href: "/como-apoiar" },
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
      value: "Modelo",
      label: "replicável e adaptável",
      description: "a diferentes territórios e contextos.",
    },
  ],
  about: {
    eyebrow: "O que é o Regenere",
    title:
      "Um programa que integra economia, sociedade, cultura e meio ambiente.",
    paragraphs: [
      "O Projeto Regenere promove o desenvolvimento de territórios urbanos e rurais a " +
        "partir das pessoas que vivem neles. Em vez de soluções de prateleira, " +
        "construímos caminhos junto com cada comunidade.",
      "Fortalecemos empreendimentos locais, articulamos redes socioprodutivas e " +
        "conectamos saberes tradicionais a conhecimento técnico e acadêmico — sempre " +
        "com foco em resultados concretos e duradouros.",
    ],
    href: "/sobre",
  },
  pillars: {
    eyebrow: "Por que é diferente",
    title: "Impacto que nasce do território, não de fora dele.",
    href: "/metodologia",
    items: [
      {
        title: "Olhar integrado",
        description:
          "Tratamos as dimensões econômica, social, cultural e ambiental como partes " +
          "de um mesmo sistema vivo.",
      },
      {
        title: "Protagonismo local",
        description:
          "As comunidades são protagonistas das soluções, valorizando saberes e " +
          "lideranças que já existem no território.",
      },
      {
        title: "Redes socioprodutivas",
        description:
          "Conectamos produtores, empreendedores, instituições e poder público em " +
          "torno de objetivos comuns.",
      },
      {
        title: "Modelo replicável",
        description:
          "Nossa metodologia é estruturada para se adaptar e ser replicada em novos " +
          "territórios.",
      },
    ],
  },
  experiences: {
    eyebrow: "Onde atuamos",
    title: "Experiências que mostram o método na prática.",
    items: [
      {
        name: "Bom Jesus",
        kind: "Território urbano · Porto Alegre",
        description:
          "Capacitação, mentoria e fortalecimento de empreendedores locais para gerar " +
          "renda e autonomia no bairro.",
        href: "/experiencias/bom-jesus",
      },
      {
        name: "Tavares",
        kind: "Território rural · Comunidade quilombola",
        description:
          "Estruturação de cadeias produtivas e fortalecimento de redes com mais de 100 " +
          "famílias quilombolas.",
        href: "/experiencias/tavares",
      },
    ],
  },
  cta: {
    title: "Leve o Regenere ao seu território.",
    description:
      "Trabalhamos com comunidades, instituições e empresas que buscam soluções de " +
      "impacto integrado. Vamos conversar?",
    primary: { label: "Como apoiar", href: "/como-apoiar" },
    secondary: { label: "Falar com a equipe", href: "/contato" },
  },
};
