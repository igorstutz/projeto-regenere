import type { CallToAction, PageSeo, Stat } from "./_types";

/** Estudo de caso de um território onde o Regenere atua. */
export interface ExperienceCase {
  slug: string;
  name: string;
  /** Classificação curta, ex.: "Território urbano". */
  kind: string;
  /** Localização legível, ex.: "Porto Alegre · RS". */
  location: string;
  /** Tagline da experiência. */
  subtitle: string;
  /** Resumo de uma frase (usado em listagens). */
  summary: string;
  seo: PageSeo;
  /** Imagem principal (cartão e destaque). */
  image: string;
  /** Galeria de fotos do território. */
  gallery: string[];
  /** Parágrafos de contexto do território. */
  context: string[];
  /** Ações realizadas (lista de itens). */
  actions: string[];
  /** Objetivo / foco da experiência. */
  objective: string;
  /** Resultados quantificáveis. */
  results: Stat[];
}

export const experiencesIndex: {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  cta: CallToAction;
} = {
  seo: {
    title: "Experiências",
    description:
      "Territórios onde o Projeto Regenere atua: do bairro Bom Jesus, em Porto " +
      "Alegre, à comunidade quilombola de Tavares.",
  },
  hero: {
    eyebrow: "Experiências",
    title: "Iniciativas que inspiram, em contextos urbanos e rurais.",
    intro:
      "Iniciativas já implementadas com foco na geração de renda, no fortalecimento " +
      "produtivo e no desenvolvimento territorial — cada uma adaptada à realidade do " +
      "seu território.",
  },
  cta: {
    title: "Quer levar uma experiência como essas ao seu território?",
    primary: { label: "Como apoiar", href: "/como-apoiar" },
    secondary: { label: "Falar com a equipe", href: "/contato" },
  },
};

export const experienceCases: ExperienceCase[] = [
  {
    slug: "bom-jesus",
    name: "Bom Jesus",
    kind: "Território urbano",
    location: "Porto Alegre · RS",
    subtitle: "Fortalecimento do empreendedorismo local",
    summary:
      "Capacitação e mentoria para empreendedores locais, fortalecendo a economia " +
      "do bairro.",
    seo: {
      title: "Experiência Bom Jesus",
      description:
        "No bairro Bom Jesus, em Porto Alegre, o Regenere fortalece o empreendedorismo " +
        "local com capacitação, mentoria, acesso a crédito e redes produtivas.",
    },
    image: "/images/photos/experiencia-2.webp",
    gallery: [
      "/images/photos/experiencia-1.webp",
      "/images/photos/experiencia-7.webp",
      "/images/photos/experiencia-8.webp",
    ],
    context: [
      "O piloto urbano do Programa Regenere atua no bairro Bom Jesus, em Porto Alegre, " +
        "com foco na inclusão socioeconômica e no fortalecimento do empreendedorismo " +
        "local.",
      "A diversidade de negócios e iniciativas comunitárias do bairro é o ponto de " +
        "partida: o programa amplia capacidade de gestão, acesso a mercado e geração de " +
        "renda junto a quem já empreende ali.",
    ],
    actions: [
      "Capacitação e mentoria para empreendedores",
      "Acesso a crédito e microcrédito",
      "Plataforma digital de gestão e comercialização",
      "Fortalecimento de redes produtivas locais",
      "Eventos culturais e comunitários",
    ],
    objective:
      "Criar um ecossistema sustentável capaz de gerar renda, reduzir desigualdades e " +
      "servir como modelo replicável.",
    results: [
      { value: "20+", label: "negócios locais impulsionados", icon: "store" },
    ],
  },
  {
    slug: "tavares",
    name: "Tavares",
    kind: "Território rural · comunidade quilombola",
    location: "Tavares · RS",
    subtitle: "Desenvolvimento produtivo em comunidades quilombolas",
    summary:
      "Estruturação de cadeias produtivas junto a mais de 100 famílias quilombolas.",
    seo: {
      title: "Experiência Tavares",
      description:
        "Em Tavares, o Regenere fortalece a produção agrícola e a autonomia de mais de " +
        "100 famílias quilombolas, com estruturação produtiva e acesso a mercados.",
    },
    image: "/images/photos/experiencia-6.webp",
    gallery: [
      "/images/photos/experiencia-3.webp",
      "/images/photos/experiencia-4.webp",
      "/images/photos/experiencia-5.webp",
    ],
    context: [
      "No contexto rural, o Programa Regenere atua junto a comunidades quilombolas de " +
        "Tavares, no Rio Grande do Sul, promovendo o fortalecimento da produção agrícola " +
        "e a autonomia das famílias.",
      "O trabalho valoriza os saberes tradicionais e organiza a produção local, " +
        "conectando as famílias a crédito, infraestrutura e mercados.",
    ],
    actions: [
      "Estruturação da cadeia produtiva",
      "Construção de infraestrutura de armazenagem",
      "Acesso a crédito rural",
      "Capacitação técnica e produtiva",
      "Conexão com mercados e redes de comercialização",
    ],
    objective:
      "Reduzir perdas, aumentar a renda e valorizar modos de vida tradicionais, com " +
      "base em práticas sustentáveis.",
    results: [
      { value: "100+", label: "famílias quilombolas atendidas", icon: "users" },
    ],
  },
];

export function getExperienceCase(slug: string): ExperienceCase | undefined {
  return experienceCases.find((c) => c.slug === slug);
}
