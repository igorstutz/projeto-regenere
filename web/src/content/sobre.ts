import type { CallToAction, Feature, PageSeo, Stat } from "./_types";
import dados from "./data/sobre.json";

interface StoryBlock {
  title: string;
  paragraphs: string[];
  image: string;
}

export interface SobreContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  whatIs: { eyebrow: string; title: string; paragraphs: string[] };
  blocks: StoryBlock[];
  impact: { eyebrow: string; title: string; intro: string; stats: Stat[] };
  highlight: { eyebrow: string; statement: string };
  values: { eyebrow: string; title: string; items: Feature[] };
  institute: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items: string[];
    image: string;
    link: { label: string; href: string };
  };
  cta: CallToAction;
}

export const sobreContent: SobreContent = dados;
