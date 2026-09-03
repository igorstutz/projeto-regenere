import type { CallToAction, PageSeo } from "./_types";
import dados from "./data/instituto-camelia.json";

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

export const institutoContent: InstitutoContent = dados;
