import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  /** Usa cores claras (para fundos escuros). */
  inverted?: boolean;
}

/**
 * Logotipo provisório em texto (wordmark). Quando o cliente enviar a marca
 * oficial em vetor, basta substituir o conteúdo deste componente por um <Image>
 * ou SVG — todos os pontos do site já apontam para cá.
 */
export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — página inicial`}
      className={cn("inline-flex items-center gap-2", className)}
    >
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full text-base font-bold",
          inverted ? "bg-white text-brand-700" : "bg-brand-600 text-white",
        )}
        aria-hidden="true"
      >
        R
      </span>
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          inverted ? "text-white" : "text-brand-800",
        )}
      >
        Regenere
      </span>
    </Link>
  );
}
