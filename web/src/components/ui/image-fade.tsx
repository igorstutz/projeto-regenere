"use client";

import { AppImage as Image } from "@/components/ui/app-image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface FadeSlide {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageFadeProps {
  slides: FadeSlide[];
  ratio?: "4/3" | "3/2" | "16/9" | "1/1" | "3/4";
  /** Tempo de exibição de cada imagem (ms). */
  interval?: number;
  className?: string;
  sizes?: string;
  /** Prioriza o carregamento da primeira imagem (hero). */
  priority?: boolean;
}

const ratios: Record<NonNullable<ImageFadeProps["ratio"]>, string> = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

/**
 * Carrossel automático de imagens com transição por crossfade — sem setas e
 * sem indicadores; as imagens trocam sozinhas. Pausa quando a aba não está
 * visível e respeita `prefers-reduced-motion` (mostra a primeira imagem fixa).
 */
export function ImageFade({
  slides,
  ratio = "4/3",
  interval = 5000,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}: ImageFadeProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    // A rotação acontece sempre; sob prefers-reduced-motion a troca é instantânea
    // (sem o fade) — controlado por `motion-reduce:transition-none` nas imagens.

    let id: ReturnType<typeof setInterval>;
    const start = () => {
      id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    };
    const stop = () => clearInterval(id);

    const onVisibility = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [slides.length, interval]);

  const caption = slides[index]?.caption;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] bg-sand-100",
        ratios[ratio],
        className,
      )}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes={sizes}
          priority={priority && i === 0}
          aria-hidden={i !== index}
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      {caption ? (
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {caption}
        </span>
      ) : null}
    </div>
  );
}
