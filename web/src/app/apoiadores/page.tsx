import type { Metadata } from "next";
import { apoiadoresContent as c, type Supporter } from "@/content/apoiadores";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/apoiadores",
});

function SupporterCard({ item }: { item: Supporter }) {
  const content = (
    <>
      <h3 className="text-lg">{item.name}</h3>
      {item.description ? (
        <p className="mt-2 text-sm leading-relaxed text-sand-600">{item.description}</p>
      ) : null}
    </>
  );

  const className =
    "block rounded-[var(--radius-card)] border border-border bg-background p-6";

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} transition-colors hover:border-brand-300`}
      >
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}

export default function ApoiadoresPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      <Section>
        <Container size="wide">
          <SectionHeader title={c.sponsors.title} intro={c.sponsors.intro} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {c.sponsors.items.map((item) => (
              <SupporterCard key={item.name} item={item} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container size="wide">
          <SectionHeader title={c.partners.title} intro={c.partners.intro} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.partners.items.map((item) => (
              <SupporterCard key={item.name} item={item} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand cta={c.cta} />
    </>
  );
}
