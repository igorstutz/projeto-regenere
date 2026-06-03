import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
}

/**
 * Faixa horizontal com rolagem contínua (efeito "esteira"). O conteúdo é
 * duplicado para um loop sem emendas; a cópia é ocultada de leitores de tela.
 * A animação pausa no hover e é desativada por prefers-reduced-motion (CSS).
 */
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "pause-on-hover group relative overflow-hidden",
        // máscara para esmaecer as bordas
        "[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
        className,
      )}
    >
      <div className="flex w-max animate-marquee gap-12 pr-12">
        {items.map((item, i) => (
          <div key={`a-${i}`} className="flex items-center">
            {item}
          </div>
        ))}
        {/* cópia para loop contínuo */}
        {items.map((item, i) => (
          <div key={`b-${i}`} className="flex items-center" aria-hidden="true">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
