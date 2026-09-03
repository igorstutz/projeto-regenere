import type { CallToAction, Feature, PageSeo, Stat } from "./_types";
import dados from "./data/impacto.json";

export interface ImpactoContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  statsTitle: string;
  stats: Stat[];
  dimensions: { eyebrow: string; title: string; intro: string; items: Feature[] };
  measure: { eyebrow: string; title: string; paragraphs: string[]; image: string };
  cta: CallToAction;
}

export const impactoContent: ImpactoContent = dados;
