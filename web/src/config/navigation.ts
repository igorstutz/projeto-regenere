/**
 * Estrutura de navegação do site — usada pelo cabeçalho, menu mobile e rodapé.
 * Centralizar aqui garante consistência e facilita reordenar/adicionar páginas.
 */

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
export const mainNav: NavItem[] = [
  { label: "O Projeto", href: "/sobre", description: "Quem somos e o que fazemos" },
  { label: "Metodologia", href: "/metodologia", description: "Como atuamos nos territórios" },
  { label: "Instituto Camélia", href: "/instituto-camelia", description: "A organização mantenedora" },
  { label: "Experiências", href: "/experiencias", description: "Territórios onde atuamos" },
  { label: "Impacto", href: "/impacto", description: "Resultados e indicadores" },
  { label: "Apoiadores", href: "/apoiadores", description: "Patrocinadores e parceiros" },
  { label: "Contato", href: "/contato", description: "Fale com a gente" },
];

/** Ação principal de conversão, destacada no cabeçalho. */
export const primaryCta: NavItem = {
  label: "Como apoiar",
  href: "/como-apoiar",
  description: "Leve o Regenere ao seu território",
};

/** Agrupamentos exibidos no rodapé. */
export const footerNav: NavGroup[] = [
  {
    title: "O Projeto",
    items: [
      { label: "Sobre", href: "/sobre" },
      { label: "Metodologia", href: "/metodologia" },
      { label: "Instituto Camélia", href: "/instituto-camelia" },
      { label: "Impacto", href: "/impacto" },
    ],
  },
  {
    title: "Atuação",
    items: [
      { label: "Experiências", href: "/experiencias" },
      { label: "Apoiadores", href: "/apoiadores" },
      { label: "Como apoiar", href: "/como-apoiar" },
    ],
  },
  {
    title: "Institucional",
    items: [
      { label: "Contato", href: "/contato" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    ],
  },
];
