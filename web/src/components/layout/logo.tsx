import Link from "next/link";
import { AppImage as Image } from "@/components/ui/app-image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  /** Usa cores claras para o texto (fundos escuros). */
  inverted?: boolean;
}

/**
 * Logo do Projeto Regenere: o símbolo oficial (árvore) + wordmark.
 * O símbolo fica num badge claro para boa leitura em qualquer fundo.
 */
export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — página inicial`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="grid size-10 place-items-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/brand/logo.webp"
          alt=""
          width={32}
          height={32}
          className="size-8 object-contain"
          priority
        />
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
