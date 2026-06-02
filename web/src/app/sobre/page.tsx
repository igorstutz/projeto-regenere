import type { Metadata } from "next";
import { sobreContent as c } from "@/content/sobre";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      <Section>
        <Container size="narrow">
          <div className="space-y-12">
            {c.blocks.map((block, i) => (
              <div key={i}>
                {block.title ? (
                  <h2 className="text-2xl sm:text-3xl">{block.title}</h2>
                ) : null}
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-sand-700">
                  {block.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container size="wide">
          <SectionHeader title={c.values.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.values.items.map((item) => (
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

      <CtaBand cta={c.cta} />
    </>
  );
}
