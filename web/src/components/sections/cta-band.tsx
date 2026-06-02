import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import type { CallToAction } from "@/content/_types";

/** Faixa de chamada para ação reutilizável (fundo escuro, centralizada). */
export function CtaBand({ cta }: { cta: CallToAction }) {
  return (
    <Section tone="dark" spacing="spacious">
      <Container size="narrow" className="text-center">
        <h2 className="text-3xl text-white text-balance sm:text-4xl">{cta.title}</h2>
        {cta.description ? (
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-sand-200">
            {cta.description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={cta.primary.href} variant="inverted" size="lg">
            {cta.primary.label}
          </ButtonLink>
          {cta.secondary ? (
            <ButtonLink
              href={cta.secondary.href}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              {cta.secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
