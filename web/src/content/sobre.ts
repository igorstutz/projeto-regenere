import type { CallToAction, Feature, PageSeo, Stat } from "./_types";

interface StoryBlock {
  title: string;
  paragraphs: string[];
  image: string;
}

export interface SobreContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  whatIs: { eyebrow: string; title: string; paragraphs: string[] };
  blocks: StoryBlock[];
  impact: { eyebrow: string; title: string; intro: string; stats: Stat[] };
  highlight: { eyebrow: string; statement: string };
  values: { eyebrow: string; title: string; items: Feature[] };
  institute: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items: string[];
    image: string;
    link: { label: string; href: string };
  };
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
  whatIs: {
    eyebrow: "O programa",
    title: "O que é o Regenere",
    paragraphs: [
      "O Programa Regenere — Rede de Geração Econômica e Regeneração Territorial — é " +
        "uma iniciativa estruturante de desenvolvimento territorial que atua na " +
        "revitalização de territórios urbanos e rurais, com foco em comunidades " +
        "periféricas.",
      "Mais do que um programa de apoio ao empreendedorismo, o Regenere propõe um " +
        "modelo sistêmico de transformação, integrando as dimensões econômica, social, " +
        "cultural e ambiental.",
      "O objetivo é construir territórios resilientes e regenerativos, onde o " +
        "desenvolvimento econômico esteja conectado à inclusão social, à valorização " +
        "cultural e à sustentabilidade.",
    ],
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
      image: "/images/photos/experiencia-3.webp",
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
      image: "/images/photos/kitanda-luana-1.webp",
    },
  ],
  impact: {
    eyebrow: "Impacto",
    title: "O que já construímos nos territórios",
    intro:
      "Dados que ilustram as conquistas do Regenere e o alcance do seu modelo de " +
      "desenvolvimento territorial.",
    stats: [
      {
        value: "100+",
        label: "famílias quilombolas atendidas",
        description: "Reestruturação produtiva e geração de renda em Tavares (RS).",
        icon: "users",
      },
      {
        // TODO: a página /sobre original indicava "+50". Mantido 20+ para coerência
        // com a Home e a página Impacto — confirmar o número correto com a equipe.
        value: "20+",
        label: "negócios locais impulsionados",
        description: "Autonomia econômica no bairro Bom Jesus, em Porto Alegre.",
        icon: "store",
      },
      {
        value: "Escala",
        label: "modelo com potencial de expansão",
        description: "Estrutura metodológica adaptável a diferentes contextos.",
        icon: "repeat",
      },
      {
        value: "Redes",
        label: "articulação socioprodutiva",
        description: "Integração entre empreendedores, instituições e mercados.",
        icon: "network",
      },
    ],
  },
  highlight: {
    eyebrow: "No que acreditamos",
    statement:
      "O desenvolvimento que permanece é aquele que nasce das pessoas do território — não o que chega pronto de fora.",
  },
  values: {
    eyebrow: "Nossos princípios",
    title: "O que orienta o nosso trabalho",
    items: [
      {
        title: "Protagonismo local",
        description:
          "As pessoas do território são protagonistas das soluções, não " +
          "beneficiárias passivas.",
        icon: "users",
      },
      {
        title: "Visão integrada",
        description:
          "Economia, sociedade, cultura e meio ambiente são tratados como partes de " +
          "um mesmo sistema.",
        icon: "sparkles",
      },
      {
        title: "Valorização de saberes",
        description:
          "Conhecimento técnico e acadêmico caminham junto com saberes tradicionais " +
          "e populares.",
        icon: "leaf",
      },
      {
        title: "Impacto duradouro",
        description:
          "Buscamos autonomia e continuidade — não dependência de um programa " +
          "externo.",
        icon: "repeat",
      },
    ],
  },
  institute: {
    eyebrow: "Quem está por trás",
    title: "Uma realização do Instituto Camélia",
    paragraphs: [
      "O Instituto Camélia é o articulador e coordenador do Programa Regenere, " +
        "conectando comunidades, instituições de ensino e os setores público e privado " +
        "em torno do desenvolvimento territorial regenerativo.",
    ],
    items: [
      "Integrar conhecimento acadêmico e prática territorial",
      "Fortalecer empreendimentos locais",
      "Promover inovação social e econômica",
      "Valorizar saberes tradicionais e identidades culturais",
      "Impulsionar políticas públicas e soluções sustentáveis",
    ],
    image: "/images/photos/kitanda-luana-2.webp",
    link: { label: "Conhecer o Instituto Camélia", href: "/instituto-camelia" },
  },
  cta: {
    title: "Quer entender como aplicamos isso na prática?",
    description: "Conheça a metodologia que estrutura a atuação do Regenere.",
    primary: { label: "Ver a metodologia", href: "/metodologia" },
    secondary: { label: "Conhecer as experiências", href: "/experiencias" },
  },
};
