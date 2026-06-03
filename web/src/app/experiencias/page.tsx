import type { Metadata } from "next";
import Link from "next/link";
import { experiencesIndex as idx, experienceCases } from "@/content/experiencias";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: idx.seo.title,
  description: idx.seo.description,
  path: "/experiencias",
});

export default function ExperienciasPage() {
  return (
    <>
      <PageHero eyebrow={idx.hero.eyebrow} title={idx.hero.title} intro={idx.hero.intro} />

      <Section>
        <Container size="wide">
          <div className="grid gap-6 md:grid-cols-2">
            {experienceCases.map((item, i) => (
              <Reveal as="div" key={item.slug} delay={i * 120}>
                <Link
                  href={`/experiencias/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                >
                  <MediaPlaceholder
                    ratio="16/9"
                    src={item.image}
                    alt={`${item.name} — ${item.location}`}
                    tone={i % 2 === 0 ? "brand" : "accent"}
                    className="rounded-none"
                  />
                  <div className="flex flex-1 flex-col p-8">
                    <p className="text-sm font-semibold text-brand-600">{item.kind}</p>
                    <h2 className="mt-2 text-2xl">{item.name}</h2>
                    <p className="mt-1 text-sm text-sand-500">{item.location}</p>
                    <p className="mt-3 leading-relaxed text-sand-700">{item.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700">
                      Ver experiência
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand cta={idx.cta} />
    </>
  );
}
