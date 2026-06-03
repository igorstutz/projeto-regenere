import type { Metadata } from "next";
import { AppImage as Image } from "@/components/ui/app-image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { impactoContent as c } from "@/content/impacto";
import { experienceCases } from "@/content/experiencias";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { StatsGrid } from "@/components/sections/stats-grid";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import {
  TrendingUpIcon,
  MapPinIcon,
  StoreIcon,
  UsersIcon,
  SparklesIcon,
  LeafIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/impacto",
});

const dimensionIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  store: StoreIcon,
  users: UsersIcon,
  sparkles: SparklesIcon,
  leaf: LeafIcon,
};

export default function ImpactoPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      {/* Indicadores em destaque */}
      <Section
        tone="dark"
        className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-brand-950"
      >
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -left-20 top-10 size-72 rounded-full bg-brand-500/20 blur-3xl"
        />
        <Image
          src="/images/brand/logo.webp"
          alt=""
          aria-hidden="true"
          width={520}
          height={520}
          className="pointer-events-none absolute -right-20 top-1/2 w-[30rem] max-w-none -translate-y-1/2 opacity-[0.06]"
        />
        <Container size="wide" className="relative">
          <Reveal className="mb-12 max-w-2xl">
            <Badge icon={<TrendingUpIcon className="size-4" />} className="mb-4">
              Resultados
            </Badge>
            <h2 className="text-3xl text-white text-balance sm:text-4xl">{c.statsTitle}</h2>
          </Reveal>
          <StatsGrid stats={c.stats} variant="dark" columns={3} />
        </Container>
      </Section>

      {/* Impacto por território */}
      <Section>
        <Container size="wide">
          <SectionHeader
            badge
            icon={<MapPinIcon className="size-4" />}
            eyebrow="Onde acontece"
            title="Impacto por território"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experienceCases.map((exp, i) => {
              const result = exp.results[0];
              return (
                <Reveal as="div" key={exp.slug} delay={i * 120}>
                  <Link
                    href={`/experiencias/${exp.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={exp.image}
                        alt={`${exp.name} · ${exp.location}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-md bg-white/15 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/20 backdrop-blur">
                        {exp.kind}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-8">
                      {result ? (
                        <p className="flex items-baseline gap-2">
                          <span className="font-display text-4xl font-semibold text-brand-700">
                            {result.value}
                          </span>
                          <span className="text-sm font-medium text-sand-600">
                            {result.label}
                          </span>
                        </p>
                      ) : null}
                      <h3 className="mt-3 text-2xl">{exp.name}</h3>
                      <p className="mt-2 leading-relaxed text-sand-700">{exp.summary}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700">
                        Ver experiência
                        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Dimensões do impacto */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader
            badge
            icon={<SparklesIcon className="size-4" />}
            eyebrow={c.dimensions.eyebrow}
            title={c.dimensions.title}
            intro={c.dimensions.intro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.dimensions.items.map((item, i) => {
              const Icon = (item.icon && dimensionIcons[item.icon]) || LeafIcon;
              return (
                <Reveal
                  as="div"
                  key={item.title}
                  delay={(i % 4) * 100}
                  className="rounded-[var(--radius-card)] border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-brand-100 text-brand-600">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-600">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Como acompanhamos */}
      <Section>
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <MediaPlaceholder
                ratio="4/3"
                src={c.measure.image}
                alt="Quadro de acompanhamento de resultados no território"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="shadow-lg shadow-brand-900/5"
              />
            </Reveal>
            <Reveal delay={120}>
              <SectionHeader
                badge
                icon={<TrendingUpIcon className="size-4" />}
                eyebrow={c.measure.eyebrow}
                title={c.measure.title}
              />
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-sand-700">
                {c.measure.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand cta={c.cta} />
    </>
  );
}
