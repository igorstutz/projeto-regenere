import type { Metadata } from "next";
import { metodologiaContent as c } from "@/content/metodologia";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/metodologia",
});

export default function MetodologiaPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      {/* Pilares */}
      <Section>
        <Container size="wide">
          <SectionHeader title={c.pillars.title} intro={c.pillars.intro} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.pillars.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-card)] border border-border p-6"
              >
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Etapas */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader title={c.steps.title} intro={c.steps.intro} />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.steps.items.map((step, i) => (
              <li
                key={step.title}
                className="rounded-[var(--radius-card)] border border-border bg-background p-6"
              >
                <span className="font-display text-2xl font-semibold text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Plataforma UMPE */}
      <Section>
        <Container size="wide">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeader eyebrow={c.platform.eyebrow} title={c.platform.title} />
            <div className="space-y-4 text-lg leading-relaxed text-sand-700">
              {c.platform.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand cta={c.cta} />
    </>
  );
}
