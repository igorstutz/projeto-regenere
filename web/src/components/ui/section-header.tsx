import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Alinhamento do bloco. Padrão: "left". */
  align?: "left" | "center";
  /** Renderiza o eyebrow como Badge (pílula coral) em vez de texto simples. */
  badge?: boolean;
  /** Ícone do Badge (quando `badge` é true). */
  icon?: ReactNode;
  className?: string;
}

/** Cabeçalho padronizado de seção: rótulo (eyebrow) + título + introdução. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  badge = false,
  icon,
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
        badge ? (
          <Badge icon={icon} className="mb-4">
            {eyebrow}
          </Badge>
        ) : (
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">
            {eyebrow}
          </p>
        )
      ) : null}
      <h2 className="text-3xl sm:text-4xl text-balance">{title}</h2>
      {intro ? (
        <div className="mt-4 text-lg leading-relaxed text-muted">{intro}</div>
      ) : null}
    </div>
  );
}
