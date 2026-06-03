import type { CallToAction, PageSeo } from "./_types";

export interface InstitutoContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; image: string };
  objectives: { title: string; items: string[]; conclusion: string };
  initiatives: { name: string; description: string; gallery: string[] }[];
  actions: {
    eyebrow: string;
    title: string;
    intro: string;
    gallery: { src: string; caption: string }[];
  };
  cta: CallToAction;
}

const luanaGallery = Array.from(
  { length: 10 },
  (_, i) => `/images/photos/kitanda-luana-${i + 1}.webp`,
);
const pretasGallery = Array.from(
  { length: 8 },
  (_, i) => `/images/photos/kitanda-pretas-${i + 1}.webp`,
);

export const institutoContent: InstitutoContent = {
  seo: {
    title: "Instituto Camélia",
    description:
      "O Instituto Camélia é a organização que idealiza e conduz o Projeto " +
      "Regenere, articulando comunidades, instituições de ensino e poder público.",
  },
  hero: {
    eyebrow: "Instituto Camélia",
    title: "Quem está por trás do Regenere.",
    intro:
      "O Instituto Camélia é o articulador e coordenador do Programa Regenere, " +
      "atuando na conexão entre comunidades, instituições de ensino e os setores " +
      "público e privado.",
  },
  about: {
    eyebrow: "O Instituto",
    title: "Catalisador de transformações nos territórios",
    paragraphs: [
      "A atuação do Instituto Camélia é orientada pela promoção do desenvolvimento " +
        "territorial regenerativo, com foco na inclusão produtiva, na valorização " +
        "cultural e no fortalecimento de redes socioprodutivas.",
    ],
    image: "/images/photos/kitanda-luana-7.webp",
  },
  objectives: {
    title: "O Instituto trabalha para:",
    items: [
      "Integrar conhecimento acadêmico e prática territorial",
      "Fortalecer empreendimentos locais",
      "Promover inovação social e econômica",
      "Valorizar saberes tradicionais e identidades culturais",
      "Impulsionar políticas públicas e soluções sustentáveis",
    ],
    conclusion:
      "Com uma abordagem colaborativa e multidisciplinar, o Instituto Camélia atua " +
      "como catalisador de transformações estruturais nos territórios.",
  },
  initiatives: [
    {
      name: "Kitanda da Luana",
      description:
        "Fortalecimento do empreendedorismo comunitário e geração de renda local em " +
        "território periférico.",
      gallery: luanaGallery,
    },
    {
      name: "Kitanda das Pretas",
      description:
        "Ação de empreendedorismo periférico com foco em autonomia econômica e " +
        "fortalecimento comunitário.",
      gallery: pretasGallery,
    },
  ],
  actions: {
    eyebrow: "No território",
    title: "Feiras, eventos e articulação",
    intro:
      "Atividades de articulação territorial, valorização da produção local e " +
      "conexão com redes de apoio, em parceria com organizações e apoiadores.",
    gallery: [
      {
        src: "/images/photos/feira-1.webp",
        caption: "Feira da Semana da Consciência Negra · Porto Alegre",
      },
      { src: "/images/photos/feira-2.webp", caption: "Prêmio Periferia Viva" },
      { src: "/images/photos/articulacao-1.webp", caption: "Visita ao CD da REDECOOP" },
    ],
  },
  cta: {
    title: "Conheça o trabalho do Instituto no território.",
    primary: { label: "Ver as experiências", href: "/experiencias" },
    secondary: { label: "Falar com o Instituto", href: "/contato" },
  },
};
