/**
 * Primitivos de conteúdo reutilizáveis entre páginas.
 * A camada de conteúdo é puramente de dados (tipada), separada da apresentação:
 * os componentes em `src/components` consomem estas estruturas.
 */

/** Indicador numérico (ex.: "100+ famílias atendidas"). */
export interface Stat {
  value: string;
  label: string;
  description?: string;
  /** Ícone opcional: "users" | "store" | "repeat" | "leaf". */
  icon?: string;
}

/** Item de destaque com título e descrição (pilares, diferenciais, etc.). */
export interface Feature {
  title: string;
  description: string;
  /** Nome do ícone (mapeado no componente). Opcional. */
  icon?: string;
}

/** Etapa numerada de um processo/metodologia. */
export interface Step {
  title: string;
  description: string;
}

/** Chamada para ação com um ou dois botões. */
export interface CallToAction {
  title: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** Bloco de texto com título e parágrafos. */
export interface ProseBlock {
  title?: string;
  paragraphs: string[];
}

/** Metadados de SEO específicos de uma página. */
export interface PageSeo {
  title: string;
  description: string;
}
