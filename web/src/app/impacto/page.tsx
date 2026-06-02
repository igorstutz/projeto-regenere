import type { Metadata } from "next";
import { impactoContent as c } from "@/content/impacto";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/impacto",
});

export default function ImpactoPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      <Section tone="dark" spacing="compact">
        <Container size="wide">
          <dl className="grid gap-8 sm:grid-cols-3">
            {c.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sand-200">
                  <span className="font-medium text-white">{stat.label}</span>
                  {stat.description ? ` — ${stat.description}` : null}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

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

      <CtaBand cta={c.cta} />
    </>
  );
}
