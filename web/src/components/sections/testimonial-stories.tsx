"use client";

import { useEffect, useRef, useState } from "react";
import { AppImage as Image } from "@/components/ui/app-image";
import { cn } from "@/lib/utils";
import { QuoteIcon } from "@/components/ui/icons";
import type { Testimonial } from "@/content/depoimentos";

/** Duração de cada "story" em ms. */
const DURATION = 6500;

/** Gradientes que se alternam por depoimento — dão cor e vida. */
const gradients = [
  "from-brand-600 to-brand-800",
  "from-accent-500 to-accent-700",
  "from-brand-700 via-brand-800 to-accent-800",
  "from-accent-600 to-brand-800",
];

/**
 * Player de depoimentos no formato "stories" (estilo Instagram): barras de
 * progresso, avanço automático, navegação tocando nas laterais e pausa no hover.
 * O tempo é controlado por JavaScript (rAF), então funciona mesmo com
 * prefers-reduced-motion.
 */
export function TestimonialStories({ items }: { items: Testimonial[] }) {
  const n = items.length;
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const elapsedRef = useRef(0);
  const indexRef = useRef(0);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    let last: number | null = null;

    const tick = (t: number) => {
      if (last === null) last = t;
      const dt = t - last;
      last = t;

      if (!pausedRef.current) {
        elapsedRef.current += dt;
        const p = Math.min(elapsedRef.current / DURATION, 1);

        // Atualiza a barra ativa direto no DOM (sem re-render por frame).
        const activeBar = barRefs.current[indexRef.current];
        if (activeBar) activeBar.style.width = `${p * 100}%`;

        if (p >= 1) {
          elapsedRef.current = 0;
          setIndex((i) => (i + 1) % n);
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [n]);

  // Mantém o índice atual acessível dentro do loop e reposiciona as barras.
  useEffect(() => {
    indexRef.current = index;
    elapsedRef.current = 0;
    barRefs.current.forEach((bar, i) => {
      if (bar) bar.style.width = i < index ? "100%" : "0%";
    });
  }, [index]);

  const goTo = (i: number) => setIndex(((i % n) + n) % n);

  const item = items[index];
  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] w-full max-w-sm flex-col overflow-hidden rounded-3xl",
        "bg-gradient-to-br p-5 text-white shadow-2xl shadow-brand-900/25 ring-1 ring-black/5",
        gradient,
      )}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* Marca d'água da logo + brilho */}
      <Image
        src="/images/brand/logo.webp"
        alt=""
        aria-hidden="true"
        width={320}
        height={320}
        className="pointer-events-none absolute -bottom-12 -right-10 size-64 opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-white/15 blur-2xl"
      />

      {/* Barras de progresso */}
      <div className="relative z-10 flex gap-1.5">
        {items.map((_, i) => (
          <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
            <div
              ref={(el) => {
                barRefs.current[i] = el;
              }}
              className="h-full rounded-full bg-white"
              style={{ width: i < index ? "100%" : "0%" }}
            />
          </div>
        ))}
      </div>

      {/* Cabeçalho estilo perfil */}
      <div className="relative z-10 mt-4 flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-full bg-white shadow-sm">
          <Image
            src="/images/brand/logo.webp"
            alt=""
            width={28}
            height={28}
            className="size-7 object-contain"
          />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">Projeto Regenere</p>
          <p className="text-xs text-white/70">@projetoregenere</p>
        </div>
      </div>

      {/* Depoimento */}
      <figure className="relative z-10 flex flex-1 flex-col justify-center">
        <QuoteIcon className="size-8 text-white/40" />
        <blockquote className="mt-3 font-display text-lg leading-snug text-balance sm:text-xl">
          {item.quote}
        </blockquote>
        <figcaption className="mt-5">
          <span className="block font-semibold">{item.name}</span>
          <span className="block text-sm text-white/75">{item.role}</span>
        </figcaption>
      </figure>

      {/* Zonas de toque para navegar (estilo stories) */}
      <button
        type="button"
        aria-label="Depoimento anterior"
        onClick={() => goTo(index - 1)}
        className="absolute inset-y-0 left-0 z-20 w-1/3"
      />
      <button
        type="button"
        aria-label="Próximo depoimento"
        onClick={() => goTo(index + 1)}
        className="absolute inset-y-0 right-0 z-20 w-2/3"
      />
    </div>
  );
}
