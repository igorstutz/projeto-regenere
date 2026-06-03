"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightMarqueeProps {
  items: ReactNode[];
  /** Velocidade em pixels por milissegundo. Padrão: 0.06 (~60 px/s). */
  speed?: number;
  className?: string;
}

/**
 * Esteira de logos com rolagem automática contínua (loop infinito) e "spotlight"
 * no centro: o item mais próximo do centro fica colorido e ampliado; os demais
 * em escala de cinza. O conteúdo é duplicado para o loop ser perfeito.
 *
 * O movimento é controlado por JavaScript (requestAnimationFrame), e não por
 * animação CSS — assim funciona de forma consistente, pausa ao passar o mouse e
 * só roda quando a faixa está visível na tela.
 */
export function SpotlightMarquee({ items, speed = 0.06, className }: SpotlightMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const count = items.length;
    let x = 0;
    let last: number | null = null;
    let raf = 0;
    let running = false;
    let paused = false;
    let loopWidth = 0;

    // Largura de um conjunto (do 1º item da cópia A ao 1º da cópia B).
    const measure = () => {
      const first = track.children[0] as HTMLElement | undefined;
      const second = track.children[count] as HTMLElement | undefined;
      loopWidth = first && second ? second.offsetLeft - first.offsetLeft : track.scrollWidth / 2;
    };

    const tick = (time: number) => {
      if (last === null) last = time;
      let dt = time - last;
      last = time;
      if (dt > 50) dt = 16; // evita "salto" ao voltar o foco para a aba

      if (!paused && loopWidth > 0) {
        x -= speed * dt;
        if (x <= -loopWidth) x += loopWidth;
        track.style.transform = `translate3d(${x}px,0,0)`;
      }

      // Spotlight: cor/escala conforme proximidade do centro.
      const v = viewport.getBoundingClientRect();
      const center = v.left + v.width / 2;
      const reach = Math.max(160, v.width * 0.28);
      for (const node of track.children) {
        const el = node as HTMLElement;
        const r = el.getBoundingClientRect();
        const closeness = Math.max(0, 1 - Math.abs(r.left + r.width / 2 - center) / reach);
        el.style.filter = `grayscale(${(1 - closeness).toFixed(3)})`;
        el.style.opacity = (0.4 + 0.6 * closeness).toFixed(3);
        el.style.transform = `scale(${(1 + 0.22 * closeness).toFixed(3)})`;
      }

      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = null;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    measure();
    const onResize = () => measure();
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    window.addEventListener("resize", onResize);
    viewport.addEventListener("mouseenter", onEnter);
    viewport.addEventListener("mouseleave", onLeave);

    const observer = new IntersectionObserver(
      ([entry]) => (entry?.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    observer.observe(viewport);

    return () => {
      observer.disconnect();
      stop();
      window.removeEventListener("resize", onResize);
      viewport.removeEventListener("mouseenter", onEnter);
      viewport.removeEventListener("mouseleave", onLeave);
    };
  }, [items.length, speed]);

  return (
    <div
      ref={viewportRef}
      className={cn(
        "relative overflow-hidden",
        "[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]",
        className,
      )}
    >
      <div ref={trackRef} className="flex w-max items-center gap-16 will-change-transform">
        {items.map((item, i) => (
          <div key={`a-${i}`} className="flex shrink-0 items-center justify-center will-change-transform">
            {item}
          </div>
        ))}
        {items.map((item, i) => (
          <div
            key={`b-${i}`}
            aria-hidden="true"
            className="flex shrink-0 items-center justify-center will-change-transform"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
