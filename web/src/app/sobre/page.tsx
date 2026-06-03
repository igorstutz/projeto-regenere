import type { Metadata } from "next";
import { AppImage as Image } from "@/components/ui/app-image";
import type { ComponentType, SVGProps } from "react";
import { sobreContent as c } from "@/content/sobre";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { StatsGrid } from "@/components/sections/stats-grid";
import {
  UsersIcon,
  SparklesIcon,
  LeafIcon,
  RepeatIcon,
  TrendingUpIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/sobre",
});

const valueIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  users: UsersIcon,
  sparkles: SparklesIcon,
  leaf: LeafIcon,
  repeat: RepeatIcon,
};

export default function SobrePage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      {/* O que é o Regenere */}
      <Section>
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader
                badge
                icon={<LeafIcon className="size-4" />}
                eyebrow={c.whatIs.eyebrow}
                title={c.whatIs.title}
              />
              <div className="relative mt-10 hidden max-w-xs lg:block">
                <div
                  aria-hidden="true"
                  className="animate-float-slow absolute -bottom-5 -right-5 size-24 rounded-2xl bg-accent-400/70"
                />
                <MediaPlaceholder
                  ratio="3/4"
                  src="/images/photos/experiencia-1.webp"
                  alt="Empreendedores na Kitanda da Kéké, no bairro Bom Jesus"
                  sizes="320px"
                  className="relative shadow-lg shadow-brand-900/10"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-4 text-lg leading-relaxed text-sand-700">
                {c.whatIs.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* História: blocos em layout editorial alternado */}
      <Section tone="muted">
        <Container size="wide">
          <div className="space-y-20 lg:space-y-28">
            {c.blocks.map((block, i) => {
              const imageRight = i % 2 === 1;
              return (
                <div
                  key={block.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <Reveal className={cn(imageRight && "lg:order-last")}>
                    <MediaPlaceholder
                      ratio="4/3"
                      src={block.image}
                      alt={block.title}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="shadow-lg shadow-brand-900/5"
                    />
                  </Reveal>
                  <Reveal delay={120}>
                    <span className="font-display text-5xl font-semibold text-brand-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl">{block.title}</h2>
                    <div className="mt-4 space-y-4 text-lg leading-relaxed text-sand-700">
                      {block.paragraphs.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Impacto nos territórios */}
      <Section>
        <Container size="wide">
          <Reveal>
            <SectionHeader
              badge
              icon={<TrendingUpIcon className="size-4" />}
              eyebrow={c.impact.eyebrow}
              title={c.impact.title}
              intro={c.impact.intro}
            />
          </Reveal>
          <div className="mt-12">
            <StatsGrid stats={c.impact.stats} variant="light" columns={4} />
          </div>
        </Container>
      </Section>

      {/* Destaque: nossa crença */}
      <Section
        tone="dark"
        spacing="spacious"
        className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-brand-950"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
        />
        <Image
          src="/images/brand/logo.webp"
          alt=""
          aria-hidden="true"
          width={520}
          height={520}
          className="pointer-events-none absolute -bottom-24 -left-16 w-[28rem] max-w-none opacity-[0.06]"
        />
        <Container size="narrow" className="relative text-center">
          <Reveal>
            <Badge icon={<LeafIcon className="size-4" />} className="mb-6">
              {c.highlight.eyebrow}
            </Badge>
            <p className="font-display text-2xl leading-snug text-balance text-white sm:text-3xl">
              {c.highlight.statement}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Princípios */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader
            badge
            icon={<SparklesIcon className="size-4" />}
            eyebrow={c.values.eyebrow}
            title={c.values.title}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.values.items.map((item, i) => {
              const Icon = (item.icon && valueIcons[item.icon]) || LeafIcon;
              return (
                <Reveal
                  as="div"
                  key={item.title}
                  delay={i * 100}
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

      {/* Quem está por trás — Instituto Camélia */}
      <Section>
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <MediaPlaceholder
                ratio="4/3"
                src={c.institute.image}
                alt={c.institute.title}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="shadow-lg shadow-brand-900/5"
              />
            </Reveal>
            <Reveal delay={120}>
              <Badge icon={<UsersIcon className="size-4" />} className="mb-4">
                {c.institute.eyebrow}
              </Badge>
              <h2 className="text-3xl sm:text-4xl">{c.institute.title}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-sand-700">
                {c.institute.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="mt-6 space-y-2.5">
                {c.institute.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sand-700">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href={c.institute.link.href} variant="secondary" className="mt-8">
                {c.institute.link.label}
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand cta={c.cta} />
    </>
  );
}
