import type { CallToAction, Feature, PageSeo, Step } from "./_types";
import dados from "./data/como-apoiar.json";

export interface ComoApoiarContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  paths: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; description: string; icon: string; items: string[] }[];
  };
  highlight: { statement: string; image: string };
  enables: { eyebrow: string; title: string; intro: string; items: Feature[] };
  steps: { eyebrow: string; title: string; intro: string; items: Step[] };
  cta: CallToAction;
}

export const comoApoiarContent: ComoApoiarContent = dados;
