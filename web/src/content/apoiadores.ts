import type { CallToAction, PageSeo } from "./_types";

/** Apoiador com logo e descrição (exibida no modal). */
export interface Supporter {
  id: string;
  name: string;
  logo: string;
  description: string;
  /** Site oficial (link externo), se houver. */
  url?: string;
}

export interface SupporterGroup {
  eyebrow: string;
  title: string;
  intro: string;
  items: Supporter[];
}

export interface ApoiadoresContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  groups: SupporterGroup[];
  cta: CallToAction;
}

export const apoiadoresContent: ApoiadoresContent = {
  seo: {
    title: "Apoiadores",
    description:
      "Patrocinadores, financiadores e parceiros técnicos que tornam o Projeto " +
      "Regenere possível — clique em cada logo para conhecer a instituição.",
  },
  hero: {
    eyebrow: "Apoiadores",
    title: "Construído de forma colaborativa.",
    intro:
      "O Regenere é realizado pelo Instituto Camélia e só é possível graças a " +
      "instituições comprometidas com o desenvolvimento sustentável, a inclusão " +
      "produtiva e a inovação social. Clique em um logo para saber mais.",
  },
  groups: [
    {
      eyebrow: "Patrocínio e fomento",
      title: "Quem viabiliza o programa",
      intro:
        "Instituições públicas e de fomento que financiam e dão sustentação ao " +
        "Regenere.",
      items: [
        {
          id: "regenera-rs",
          name: "Regenera RS",
          logo: "/images/partners/3.webp",
          description:
            "Iniciativa de reconstrução e desenvolvimento socioeconômico do Rio " +
            "Grande do Sul, que apoia projetos de impacto nos territórios.",
        },
        {
          id: "brde",
          name: "BRDE",
          logo: "/images/partners/2.webp",
          description:
            "Banco Regional de Desenvolvimento do Extremo Sul — instituição " +
            "financeira pública de fomento ao desenvolvimento econômico da região.",
          url: "https://www.brde.com.br",
        },
        {
          id: "governo-rs",
          name: "Governo do Estado do Rio Grande do Sul",
          logo: "/images/partners/1.webp",
          description:
            "Governo estadual, parceiro nas políticas de desenvolvimento e " +
            "reconstrução do Rio Grande do Sul.",
          url: "https://www.rs.gov.br",
        },
        {
          id: "prefeitura-poa",
          name: "Prefeitura de Porto Alegre",
          logo: "/images/partners/4.webp",
          description:
            "Poder público municipal, parceiro na atuação em territórios urbanos da " +
            "capital, como o bairro Bom Jesus.",
        },
        {
          id: "mda",
          name: "Ministério do Desenvolvimento Agrário e Agricultura Familiar",
          logo: "/images/partners/5.webp",
          description:
            "Órgão do Governo Federal voltado ao desenvolvimento rural e ao " +
            "fortalecimento da agricultura familiar.",
          url: "https://www.gov.br/mda",
        },
      ],
    },
    {
      eyebrow: "Parceiros técnicos e institucionais",
      title: "Quem soma conhecimento e alcance",
      intro:
        "Universidades, cooperativas e organizações que somam pesquisa, assistência " +
        "técnica, crédito e acesso a mercado.",
      items: [
        {
          id: "ifrs",
          name: "IFRS",
          logo: "/images/partners/6.webp",
          description:
            "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do " +
            "Sul — parceiro em ensino, pesquisa e extensão nos territórios.",
          url: "https://ifrs.edu.br",
        },
        {
          id: "ufrgs",
          name: "UFRGS",
          logo: "/images/partners/7.webp",
          description:
            "Universidade Federal do Rio Grande do Sul — parceira em pesquisa e " +
            "extensão, conectando conhecimento acadêmico e prática territorial.",
          url: "https://www.ufrgs.br",
        },
        {
          id: "emater",
          name: "EMATER/RS",
          logo: "/images/partners/9.webp",
          description:
            "Empresa de Assistência Técnica e Extensão Rural do RS — apoio técnico à " +
            "produção e à organização rural.",
          url: "https://www.emater.tche.br",
        },
        {
          id: "credisis",
          name: "CrediSIS Coopesa",
          logo: "/images/partners/8.webp",
          description:
            "Cooperativa de crédito que amplia o acesso a serviços financeiros e " +
            "microcrédito nos territórios.",
        },
        {
          id: "rs-garanti",
          name: "RS Garanti",
          logo: "/images/partners/10.webp",
          description:
            "Fundo garantidor que facilita o acesso a crédito por micro e pequenos " +
            "empreendedores.",
        },
        {
          id: "cooptma",
          name: "COOPTMA",
          logo: "/images/partners/12.webp",
          description:
            "Cooperativa parceira na organização produtiva e na comercialização da " +
            "produção local.", // TODO: confirmar nome/atuação completos
        },
        {
          id: "cooperativa-rural",
          name: "Cooperativa comunitária rural",
          logo: "/images/partners/11.webp",
          description:
            "Cooperativa de integração de trabalho, produção e consumo comunitário " +
            "rural, parceira na estruturação produtiva.", // TODO: confirmar nome oficial
        },
        {
          id: "umpe",
          name: "UMPE",
          logo: "/images/sponsors/umpe.webp",
          description:
            "Universo do Micro e Pequeno Empreendedor — plataforma digital que integra " +
            "gestão, capacitação e acesso a mercado, potencializando a metodologia.",
        },
      ],
    },
  ],
  cta: {
    title: "Quer apoiar o Projeto Regenere?",
    description:
      "Empresas e instituições podem se tornar parceiras e ampliar o impacto nos " +
      "territórios.",
    primary: { label: "Como apoiar", href: "/como-apoiar" },
    secondary: { label: "Falar com a equipe", href: "/contato" },
  },
};
