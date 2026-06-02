/**
 * Concatena classes condicionalmente, ignorando valores falsy.
 *
 * Versão leve e sem dependências. Se no futuro o projeto precisar resolver
 * conflitos entre utilitários do Tailwind, troque por `clsx` + `tailwind-merge`
 * mantendo a mesma assinatura.
 */
export type ClassValue = string | number | null | false | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
