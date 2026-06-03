import { AppImage as Image } from "@/components/ui/app-image";
import { cn } from "@/lib/utils";
import { LeafIcon } from "@/components/ui/icons";

interface MediaPlaceholderProps {
  className?: string;
  /** Proporção do quadro. Padrão: "4/3". */
  ratio?: "4/3" | "3/2" | "16/9" | "1/1" | "3/4";
  /** Legenda opcional dentro do quadro (ex.: "Território Bom Jesus"). */
  caption?: string;
  /** Variação de tom para alternar visualmente entre blocos. */
  tone?: "brand" | "accent" | "sand";
  /**
   * Caminho da imagem real (ex.: "/images/photos/x.webp"). Se ausente, mostra
   * o placeholder decorativo on-brand.
   */
  src?: string;
  /** Texto alternativo da imagem (acessibilidade/SEO). Use quando houver `src`. */
  alt?: string;
  /** Dica de tamanho responsivo para o next/image. */
  sizes?: string;
  /** Prioriza o carregamento (use no hero/above-the-fold). */
  priority?: boolean;
}

const ratios: Record<NonNullable<MediaPlaceholderProps["ratio"]>, string> = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

const tones: Record<NonNullable<MediaPlaceholderProps["tone"]>, string> = {
  brand: "from-brand-200 to-brand-400 text-brand-700",
  accent: "from-accent-200 to-accent-400 text-accent-700",
  sand: "from-sand-200 to-sand-300 text-sand-600",
};

/**
 * Quadro de mídia com proporção fixa. Renderiza a imagem real (next/image) quando
 * `src` é informado; caso contrário, exibe um placeholder decorativo on-brand.
 */
export function MediaPlaceholder({
  className,
  ratio = "4/3",
  caption,
  tone = "brand",
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)]",
        ratios[ratio],
        !src && "bg-gradient-to-br",
        !src && tones[tone],
        className,
      )}
      role={src ? undefined : "img"}
      aria-label={!src ? (caption ? `Imagem: ${caption}` : "Imagem ilustrativa") : undefined}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? caption ?? ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <>
          <div className="animate-blob absolute -right-10 -top-10 size-44 bg-white/25 blur-md" />
          <div className="animate-float absolute -bottom-8 -left-6 size-28 rounded-full bg-black/10 blur-md" />
          <LeafIcon className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        </>
      )}

      {caption ? (
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {caption}
        </span>
      ) : null}
    </div>
  );
}
