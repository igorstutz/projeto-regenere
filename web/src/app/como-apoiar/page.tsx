import type { Metadata } from "next";
import { AppImage as Image } from "@/components/ui/app-image";
import type { ComponentType, SVGProps } from "react";
import { comoApoiarContent as c } from "@/content/como-apoiar";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import {
  StoreIcon,
  UsersIcon,
  MapPinIcon,
  LightbulbIcon,
  TrendingUpIcon,
  SparklesIcon,
  NetworkIcon,
  LeafIcon,
  CheckIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/como-apoiar",
});

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  store: StoreIcon,
  users: UsersIcon,
  mappin: MapPinIcon,
  lightbulb: LightbulbIcon,
  trendingUp: TrendingUpIcon,
  sparkles: SparklesIcon,
  network: NetworkIcon,
  leaf: LeafIcon,
};

export default function ComoApoiarPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      {/* Formas de apoiar */}
      <Section>
        <Container size="wide">
          <SectionHeader
            badge
            icon={<LeafIcon className="size-4" />}
            eyebrow={c.paths.eyebrow}
            title={c.paths.title}
            intro={c.paths.intro}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {c.paths.items.map((path, i) => {
              const Icon = icons[path.icon] ?? LeafIcon;
              return (
                <Reveal
                  as="div"
                  key={path.title}
                  delay={i * 120}
                  className="flex flex-col rounded-[var(--radius-card)] border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-600">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl">{path.title}</h3>
                  <p className="mt-2 leading-relaxed text-sand-600">{path.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {path.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-sand-700">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Faixa com imagem + frase de impacto */}
      <section className="relative overflow-hidden">
        <Image
          src={c.highlight.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/80" />
        <Container size="narrow" className="relative py-24 text-center sm:py-32">
          <Reveal>
            <LeafIcon className="mx-auto size-8 text-brand-300" />
            <p className="mt-6 font-display text-2xl leading-snug text-balance text-white sm:text-3xl">
              {c.highlight.statement}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* O que o apoio possibilita */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader
            badge
            icon={<SparklesIcon className="size-4" />}
            eyebrow={c.enables.eyebrow}
            title={c.enables.title}
            intro={c.enables.intro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.enables.items.map((item, i) => {
              const Icon = (item.icon && icons[item.icon]) || LeafIcon;
              return (
                <Reveal
                  as="div"
                  key={item.title}
                  delay={(i % 3) * 100}
                  className="flex items-start gap-4 rounded-[var(--radius-card)] border border-border bg-background p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-sand-600">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Como começar */}
      <Section>
        <Container size="wide">
          <SectionHeader
            badge
            icon={<MapPinIcon className="size-4" />}
            eyebrow={c.steps.eyebrow}
            title={c.steps.title}
            intro={c.steps.intro}
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {c.steps.items.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 120}
                className="relative rounded-[var(--radius-card)] border border-border p-8"
              >
                <span className="grid size-12 place-items-center rounded-full bg-brand-600 font-display text-lg font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-sand-600">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand cta={c.cta} />
    </>
  );
}
