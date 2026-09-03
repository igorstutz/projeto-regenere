import type { CallToAction, Feature, PageSeo, Stat } from "./_types";
import dados from "./data/home.json";

export interface HomeContent {
  seo: PageSeo;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    slides: { src: string; alt: string; caption?: string }[];
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  stats: Stat[];
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    href: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    items: Feature[];
    href: string;
  };
  experiences: {
    eyebrow: string;
    title: string;
    items: { name: string; kind: string; description: string; href: string; image: string }[];
  };
  cta: CallToAction;
}

export const homeContent: HomeContent = dados;
