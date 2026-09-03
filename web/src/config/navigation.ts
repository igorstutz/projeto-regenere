/**
 * Estrutura de navegação do site — usada pelo cabeçalho, menu mobile e rodapé.
 * Centralizar aqui garante consistência e facilita reordenar/adicionar páginas.
 *
 * Os dados ficam em `src/content/data/navegacao.json`, editável pelo painel
 * em /admin; este módulo apenas os tipa e reexporta.
 */
import dados from "../content/data/navegacao.json";

export interface NavItem {
  label: string;
  href: string;
  /** Descrição curta, usada em menus expandidos e como apoio de acessibilidade. */
  description?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

/** Navegação principal (cabeçalho). */
export const mainNav: NavItem[] = dados.mainNav;

/** Ação principal de conversão, destacada no cabeçalho. */
export const primaryCta: NavItem = dados.primaryCta;

/** Agrupamentos exibidos no rodapé. */
export const footerNav: NavGroup[] = dados.footerNav;
