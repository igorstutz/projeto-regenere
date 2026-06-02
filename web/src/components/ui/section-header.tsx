import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Alinhamento do bloco. Padrão: "left". */
  align?: "left" | "center";
  className?: string;
}

/** Cabeçalho padronizado de seção: rótulo (eyebrow) + título + introdução. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl text-balance">{title}</h2>
      {intro ? (
        <div className="mt-4 text-lg leading-relaxed text-muted">{intro}</div>
      ) : null}
    </div>
  );
}
