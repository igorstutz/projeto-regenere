import type { Metadata } from "next";
import { comoApoiarContent as c } from "@/content/como-apoiar";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/como-apoiar",
});

export default function ComoApoiarPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      <Section>
        <Container size="wide">
          <SectionHeader title={c.paths.title} intro={c.paths.intro} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.paths.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-[var(--radius-card)] border border-border p-8"
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-sand-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand cta={c.cta} />
    </>
  );
}
