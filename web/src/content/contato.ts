import type { PageSeo } from "./_types";
import dados from "./data/contato.json";

export interface ContatoContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  panel: { title: string; text: string };
  formTitle: string;
  formNote: string;
}

export const contatoContent: ContatoContent = dados;
