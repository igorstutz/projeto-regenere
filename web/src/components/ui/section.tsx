import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Variante de fundo da seção. */
  tone?: "default" | "muted" | "brand" | "dark";
  /** Espaçamento vertical. Padrão: "default". */
  spacing?: "default" | "compact" | "spacious";
  id?: string;
}

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background text-foreground",
  muted: "bg-sand-50 text-foreground",
  brand: "bg-brand-50 text-brand-950",
  dark: "bg-brand-950 text-sand-50",
};

const spacings: Record<NonNullable<SectionProps["spacing"]>, string> = {
  compact: "py-12 sm:py-16",
  default: "py-16 sm:py-24",
  spacious: "py-20 sm:py-32",
};

/** Faixa de conteúdo de página, com tom de fundo e espaçamento padronizados. */
export function Section({
  children,
  className,
  tone = "default",
  spacing = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(tones[tone], spacings[spacing], className)}>
      {children}
    </section>
  );
}
