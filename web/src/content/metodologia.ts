import type { CallToAction, Feature, PageSeo, Step } from "./_types";
import dados from "./data/metodologia.json";

export interface MetodologiaContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  approach: { eyebrow: string; title: string; paragraphs: string[]; image: string };
  frameworks: { eyebrow: string; title: string; intro: string; items: Feature[] };
  platform: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items: string[];
  };
  steps: { eyebrow: string; title: string; intro: string; items: Step[] };
  encounters: {
    eyebrow: string;
    title: string;
    intro: string;
    gallery: { src: string; caption: string }[];
  };
  cta: CallToAction;
}

export const metodologiaContent: MetodologiaContent = dados;
