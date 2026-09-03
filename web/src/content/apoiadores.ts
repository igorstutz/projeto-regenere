import type { CallToAction, PageSeo } from "./_types";
import dados from "./data/apoiadores.json";

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

export const apoiadoresContent: ApoiadoresContent = dados;
