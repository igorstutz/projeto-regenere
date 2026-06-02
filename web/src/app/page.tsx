import type { Metadata } from "next";
import Link from "next/link";
import { homeContent as c } from "@/content/home";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon, LeafIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Section tone="brand" spacing="spacious">
        <Container size="wide">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-brand-700">
              <LeafIcon className="size-4" />
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              {c.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-900/80 sm:text-xl">
              {c.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={c.hero.primary.href} size="lg">
                {c.hero.primary.label}
                <ArrowRightIcon className="size-5" />
              </ButtonLink>
              <ButtonLink href={c.hero.secondary.href} variant="secondary" size="lg">
                {c.hero.secondary.label}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* INDICADORES */}
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

      {/* SOBRE (resumo) */}
      <Section>
        <Container size="wide">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeader eyebrow={c.about.eyebrow} title={c.about.title} />
            <div className="space-y-4 text-lg leading-relaxed text-sand-700">
              {c.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Link
                href={c.about.href}
                className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800"
              >
                Conheça o projeto
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* PILARES */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader eyebrow={c.pillars.eyebrow} title={c.pillars.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.pillars.items.map((item) => (
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
          <div className="mt-10">
            <ButtonLink href={c.pillars.href} variant="secondary">
              Ver a metodologia completa
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* EXPERIÊNCIAS */}
      <Section>
        <Container size="wide">
          <SectionHeader eyebrow={c.experiences.eyebrow} title={c.experiences.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {c.experiences.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-[var(--radius-card)] border border-border bg-background p-8 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <p className="text-sm font-semibold text-brand-600">{item.kind}</p>
                <h3 className="mt-2 text-2xl">{item.name}</h3>
                <p className="mt-3 leading-relaxed text-sand-700">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700">
                  Ver experiência
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CHAMADA FINAL */}
      <Section tone="dark" spacing="spacious">
        <Container size="narrow" className="text-center">
          <h2 className="text-3xl text-white sm:text-4xl text-balance">{c.cta.title}</h2>
          {c.cta.description ? (
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-sand-200">
              {c.cta.description}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={c.cta.primary.href} variant="inverted" size="lg">
              {c.cta.primary.label}
            </ButtonLink>
            {c.cta.secondary ? (
              <ButtonLink
                href={c.cta.secondary.href}
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
              >
                {c.cta.secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </Container>
      </Section>
    </>
  );
}
