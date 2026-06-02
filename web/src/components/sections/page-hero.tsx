import type { ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
}

/** Cabeçalho padrão das páginas internas. */
export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <Section tone="brand" spacing="compact">
      <Container size="wide">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-semibold text-balance sm:text-5xl">{title}</h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-900/80">
              {intro}
            </p>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
