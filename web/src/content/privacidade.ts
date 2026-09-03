import type { PageSeo } from "./_types";
import dados from "./data/privacidade.json";

export interface PrivacidadeSection {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface PrivacidadeContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  updatedAt: string;
  sections: PrivacidadeSection[];
}

/**
 * ⚠️ MINUTA — este texto é um rascunho-base e PRECISA de revisão jurídica antes
 * da publicação definitiva, ajustando-o ao tratamento de dados real do projeto
 * (LGPD — Lei nº 13.709/2018). Confirmar dados do controlador e do encarregado.
 */
export const privacidadeContent: PrivacidadeContent = dados;
