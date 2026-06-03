"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/ui/icons";

interface CarouselProps {
  slides: ReactNode[];
  /** Rótulo acessível do carrossel. */
  label: string;
  /** Avanço automático (ms). 0 = desativado. Padrão: 6000. */
  autoplay?: number;
  className?: string;
}

/**
 * Carrossel acessível e sem dependências, baseado em scroll-snap nativo
 * (swipe natural no toque). Inclui controles, indicadores (dots) e autoplay
 * que pausa ao passar o mouse/foco e respeita prefers-reduced-motion.
 */
export function Carousel({ slides, label, autoplay = 6000, className }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (index + count) % count;
    track.scrollTo({ left: track.clientWidth * clamped, behavior: "smooth" });
  }, [count]);

  // Atualiza o slide ativo conforme a rolagem.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        setActive(index);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Autoplay (pausado em hover/foco e com reduced-motion).
  useEffect(() => {
    if (!autoplay || paused || count <= 1) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => goTo(active + 1), autoplay);
    return () => clearInterval(id);
  }, [autoplay, paused, active, count, goTo]);

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full shrink-0 snap-center px-1"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${count}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {count > 1 ? (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Selecionar slide">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Ir para o slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  active === i ? "w-6 bg-brand-600" : "w-2 bg-sand-300 hover:bg-sand-400",
                )}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Slide anterior"
              className="grid size-10 place-items-center rounded-full border border-border text-sand-700 transition-colors hover:bg-sand-50"
            >
              <ArrowRightIcon className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Próximo slide"
              className="grid size-10 place-items-center rounded-full border border-border text-sand-700 transition-colors hover:bg-sand-50"
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
