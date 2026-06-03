import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { BlobBackdrop } from "@/components/ui/decorations";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
}

/** Cabeçalho padrão das páginas internas, com fundo decorativo em movimento. */
export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-50 py-14 sm:py-20">
      <BlobBackdrop />
      <Container size="wide" className="relative z-10">
        <Reveal className="max-w-3xl">
          {eyebrow ? <Badge className="mb-5">{eyebrow}</Badge> : null}
          <h1 className="text-4xl font-semibold text-balance sm:text-5xl">{title}</h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-900/80">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
