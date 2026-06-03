import { AppImage as Image } from "@/components/ui/app-image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import type { CallToAction } from "@/content/_types";

/**
 * Faixa de chamada para ação reutilizável (fundo escuro com gradiente, logo
 * marca d'água ao fundo, brilho e linha divisória do rodapé).
 */
export function CtaBand({ cta }: { cta: CallToAction }) {
  return (
    <Section
      tone="dark"
      spacing="spacious"
      className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-brand-950"
    >
      {/* brilho suave no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />
      {/* logo da marca como marca d'água (estilo sombra) */}
      <Image
        src="/images/brand/logo.webp"
        alt=""
        aria-hidden="true"
        width={520}
        height={520}
        className="pointer-events-none absolute -bottom-28 -right-20 w-[30rem] max-w-none opacity-[0.07]"
      />
      {/* linha que divide do rodapé */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <Container size="narrow" className="relative text-center">
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
