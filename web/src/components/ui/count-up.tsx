"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Valor numérico a animar. */
  value: number;
  /** Sufixo após o número (ex.: "+", "%"). */
  suffix?: string;
  /** Prefixo antes do número. */
  prefix?: string;
  /** Duração da animação em ms. */
  duration?: number;
  className?: string;
}

/**
 * Anima a contagem de 0 até `value` quando o elemento entra na viewport.
 * Para casos em que o indicador é puramente numérico. Respeita
 * `prefers-reduced-motion` exibindo o valor final imediatamente.
 */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;
    let start: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.unobserve(el);

        // Sem animação para quem prefere menos movimento.
        if (prefersReduced) {
          setDisplay(value);
          return;
        }

        const step = (timestamp: number) => {
          if (start === null) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          // easing easeOutExpo para desaceleração natural
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setDisplay(Math.round(eased * value));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
