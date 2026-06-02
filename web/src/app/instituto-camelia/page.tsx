import type { Metadata } from "next";
import { institutoContent as c } from "@/content/instituto-camelia";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/instituto-camelia",
});

export default function InstitutoCameliaPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      <Section>
        <Container size="narrow">
          <div className="space-y-4 text-lg leading-relaxed text-sand-700">
            {c.blocks.flatMap((b) => b.paragraphs).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Objetivos */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader title={c.objectives.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.objectives.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-card)] border border-border bg-background p-6"
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

      {/* Iniciativas */}
      <Section>
        <Container size="wide">
          <SectionHeader title={c.initiatives.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {c.initiatives.items.map((item) => (
              <div
                key={item.name}
                className="rounded-[var(--radius-card)] border border-border p-8"
              >
                <h3 className="text-2xl">{item.name}</h3>
                <p className="mt-3 leading-relaxed text-sand-700">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand cta={c.cta} />
    </>
  );
}
