import type { CallToAction, Feature, PageSeo, Stat } from "./_types";

/** Estudo de caso de um território onde o Regenere atua. */
export interface ExperienceCase {
  slug: string;
  name: string;
  /** Classificação curta, ex.: "Território urbano". */
  kind: string;
  /** Localização legível, ex.: "Porto Alegre · RS". */
  location: string;
  /** Resumo de uma frase (usado em listagens). */
  summary: string;
  seo: PageSeo;
  /** Parágrafos de contexto do território. */
  context: string[];
  /** Ações realizadas no território. */
  actions: Feature[];
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
    title: "O método na prática, em territórios reais.",
    intro:
      "Cada experiência mostra como a metodologia do Regenere se adapta ao contexto " +
      "— gerando renda, autonomia e fortalecimento das redes locais.",
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
    summary:
      "Capacitação e mentoria para empreendedores locais, fortalecendo a economia " +
      "do bairro.",
    seo: {
      title: "Experiência Bom Jesus",
      description:
        "No bairro Bom Jesus, em Porto Alegre, o Regenere fortaleceu mais de 20 " +
        "negócios locais por meio de capacitação, mentoria e acesso a mercado.",
    },
    context: [
      "O bairro Bom Jesus, em Porto Alegre, reúne uma rica diversidade de " +
        "empreendedores e iniciativas comunitárias. O Regenere atuou no fortalecimento " +
        "desses negócios, ampliando capacidade de gestão, acesso a mercado e geração de " +
        "renda.",
    ],
    actions: [
      {
        title: "Capacitação",
        description: "Formação prática em gestão, finanças e vendas para empreendedores.",
      },
      {
        title: "Mentoria",
        description: "Acompanhamento individualizado dos negócios locais.",
      },
      {
        title: "Acesso a mercado",
        description: "Apoio à comercialização e à conexão com novos canais de venda.",
      },
    ],
    results: [
      { value: "20+", label: "negócios locais impulsionados" },
      // TODO: complementar com indicadores adicionais e depoimentos.
    ],
  },
  {
    slug: "tavares",
    name: "Tavares",
    kind: "Território rural · comunidade quilombola",
    location: "Tavares · RS",
    summary:
      "Estruturação de cadeias produtivas junto a mais de 100 famílias quilombolas.",
    seo: {
      title: "Experiência Tavares",
      description:
        "Em Tavares, o Regenere atuou com mais de 100 famílias quilombolas na " +
        "estruturação de cadeias produtivas e no fortalecimento das redes locais.",
    },
    context: [
      "Em Tavares, no Rio Grande do Sul, o Regenere atuou junto a comunidades " +
        "quilombolas no fortalecimento da produção local e na organização de cadeias " +
        "produtivas, valorizando saberes tradicionais e gerando renda no território.",
    ],
    actions: [
      {
        title: "Estruturação produtiva",
        description: "Organização das cadeias produtivas locais.",
      },
      {
        title: "Fortalecimento de redes",
        description: "Articulação entre famílias, instituições e mercado.",
      },
      {
        title: "Valorização cultural",
        description: "Reconhecimento e valorização dos saberes quilombolas.",
      },
    ],
    results: [
      { value: "100+", label: "famílias quilombolas atendidas" },
      // TODO: complementar com indicadores adicionais e depoimentos.
    ],
  },
];

export function getExperienceCase(slug: string): ExperienceCase | undefined {
  return experienceCases.find((c) => c.slug === slug);
}
