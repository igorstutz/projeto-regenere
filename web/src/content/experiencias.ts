/**
 * Experiências (estudos de caso) e a página que as lista.
 *
 * Cada experiência é um arquivo em `data/experiencias/<slug>.json` — o nome do
 * arquivo define a URL (`/experiencias/<slug>/`). O painel em /admin cria,
 * edita e remove esses arquivos; nada precisa ser alterado no código.
 *
 * ⚠️ Este módulo lê o disco em tempo de build e só pode ser importado por
 * componentes de servidor (as páginas em `src/app`). Nunca importe em um
 * arquivo com "use client".
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { CallToAction, PageSeo, Stat } from "./_types";
import indice from "./data/experiencias.json";

/** Estudo de caso de um território onde o Regenere atua. */
export interface ExperienceCase {
  /** Derivado do nome do arquivo JSON — é o endereço da página. */
  slug: string;
  /** Posição na listagem (menor aparece primeiro). */
  order?: number;
  name: string;
  /** Classificação curta, ex.: "Território urbano". */
  kind: string;
  /** Localização legível, ex.: "Porto Alegre · RS". */
  location: string;
  /** Tagline da experiência. */
  subtitle: string;
  /** Resumo de uma frase (usado em listagens). */
  summary: string;
  seo: PageSeo;
  /** Imagem principal (cartão e destaque). */
  image: string;
  /** Galeria de fotos do território. */
  gallery: string[];
  /** Parágrafos de contexto do território. */
  context: string[];
  /** Ações realizadas (lista de itens). */
  actions: string[];
  /** Objetivo / foco da experiência. */
  objective: string;
  /** Resultados quantificáveis. */
  results: Stat[];
}

export const experiencesIndex: {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  cta: CallToAction;
} = indice;

const PASTA_CASOS = join(process.cwd(), "src", "content", "data", "experiencias");

/** Lê todos os casos do disco, ordenados por `order` e depois pelo slug. */
function carregarCasos(): ExperienceCase[] {
  return readdirSync(PASTA_CASOS)
    .filter((nome) => nome.endsWith(".json") && !nome.startsWith("_"))
    .map((nome) => {
      const dados = JSON.parse(readFileSync(join(PASTA_CASOS, nome), "utf8"));
      return { ...dados, slug: nome.replace(/\.json$/, "") } as ExperienceCase;
    })
    .sort(
      (a, b) =>
        (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) ||
        a.slug.localeCompare(b.slug, "pt-BR"),
    );
}

export const experienceCases: ExperienceCase[] = carregarCasos();

export function getExperienceCase(slug: string): ExperienceCase | undefined {
  return experienceCases.find((c) => c.slug === slug);
}
