import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LeafIcon } from "@/components/ui/icons";

interface BadgeProps {
  children: ReactNode;
  /** Ícone à esquerda. Padrão: folha. Passe `null` para ocultar. */
  icon?: ReactNode;
  className?: string;
}

/**
 * Pílula arredondada (ícone + texto) com fundo verde "metálico" e um brilho
 * que percorre o fundo de um lado ao outro e volta (vai-e-volta).
 * Reutilizável como rótulo/eyebrow em heros e seções.
 */
export function Badge({ children, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-2 overflow-hidden rounded-lg",
        "bg-gradient-to-b from-accent-500 to-accent-700 px-3.5 py-1.5",
        "text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/15",
        className,
      )}
    >
      {/* Brilho metálico em movimento */}
      <span
        aria-hidden="true"
        className="badge-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      {icon !== null ? (
        <span className="relative inline-flex">{icon ?? <LeafIcon className="size-4" />}</span>
      ) : null}
      <span className="relative">{children}</span>
    </span>
  );
}
