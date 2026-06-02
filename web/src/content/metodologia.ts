import type { CallToAction, Feature, PageSeo, Step } from "./_types";

export interface MetodologiaContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  pillars: { title: string; intro: string; items: Feature[] };
  steps: { title: string; intro: string; items: Step[] };
  platform: { eyebrow: string; title: string; paragraphs: string[] };
  cta: CallToAction;
}

export const metodologiaContent: MetodologiaContent = {
  seo: {
    title: "Metodologia",
    description:
      "A metodologia do Projeto Regenere: pilares, etapas de atuação nos " +
      "territórios e a plataforma UMPE de apoio aos empreendimentos locais.",
  },
  hero: {
    eyebrow: "Metodologia",
    title: "Um método estruturado, replicável e enraizado no território.",
    intro:
      "Nossa metodologia organiza a atuação em pilares e etapas claras, do " +
      "diagnóstico à autonomia — adaptável a diferentes contextos urbanos e rurais.",
  },
  pillars: {
    title: "Os pilares da metodologia",
    intro:
      "Cada território é único, mas a forma como atuamos se apoia em pilares comuns.",
    items: [
      {
        title: "Diagnóstico participativo",
        description:
          "Mapeamos vocações, ativos e desafios do território junto com a comunidade.",
      },
      {
        title: "Fortalecimento de empreendimentos",
        description:
          "Capacitação, mentoria e ferramentas para que os negócios locais cresçam " +
          "com solidez.",
      },
      {
        title: "Redes socioprodutivas",
        description:
          "Conexão entre produtores, empreendedores, instituições e poder público.",
      },
      {
        title: "Acesso a mercado",
        description:
          "Apoio à comercialização, à participação em feiras e à abertura de novos " +
          "canais de venda.",
      },
      {
        title: "Monitoramento de impacto",
        description:
          "Indicadores que acompanham a evolução e orientam decisões ao longo do " +
          "caminho.",
      },
    ],
  },
  steps: {
    title: "Como funciona, etapa por etapa",
    intro:
      "Da chegada ao território até a consolidação da autonomia local.",
    items: [
      {
        title: "Escuta e diagnóstico",
        description:
          "Imersão no território para compreender contexto, lideranças e " +
          "oportunidades.",
      },
      {
        title: "Planejamento conjunto",
        description:
          "Definição de prioridades e metas com a participação da comunidade.",
      },
      {
        title: "Capacitação e mentoria",
        description:
          "Formação prática para empreendedores e organizações locais.",
      },
      {
        title: "Estruturação produtiva",
        description:
          "Organização de cadeias produtivas e fortalecimento dos negócios.",
      },
      {
        title: "Articulação de redes",
        description:
          "Conexão com instituições, mercado e poder público para ampliar alcance.",
      },
      {
        title: "Autonomia e continuidade",
        description:
          "Consolidação dos resultados para que a transformação se sustente no tempo.",
      },
    ],
  },
  platform: {
    eyebrow: "Plataforma UMPE",
    title: "Tecnologia a serviço dos empreendimentos locais.",
    paragraphs: [
      "A plataforma UMPE (Universo MPE) apoia o acompanhamento e o fortalecimento dos " +
        "micro e pequenos empreendimentos atendidos pelo programa.",
      "Ela conecta dados, formação e gestão em um só lugar, ajudando empreendedores e " +
        "a equipe do Regenere a tomar decisões com base em informação.",
      // TODO: detalhar funcionalidades da UMPE com a equipe do projeto.
    ],
  },
  cta: {
    title: "Veja a metodologia transformando territórios reais.",
    primary: { label: "Conhecer as experiências", href: "/experiencias" },
    secondary: { label: "Levar ao meu território", href: "/como-apoiar" },
  },
};
