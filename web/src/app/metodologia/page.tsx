import type { Metadata } from "next";
import { AppImage as Image } from "@/components/ui/app-image";
import type { ComponentType, SVGProps } from "react";
import { metodologiaContent as c } from "@/content/metodologia";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import {
  NetworkIcon,
  TargetIcon,
  ClipboardIcon,
  StoreIcon,
  LightbulbIcon,
  CheckIcon,
  SparklesIcon,
  RepeatIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/metodologia",
});

const frameworkIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  network: NetworkIcon,
  target: TargetIcon,
  clipboard: ClipboardIcon,
  store: StoreIcon,
  lightbulb: LightbulbIcon,
};

export default function MetodologiaPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      {/* A abordagem */}
      <Section>
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <MediaPlaceholder
                ratio="4/3"
                src={c.approach.image}
                alt="Encontro de escuta no território"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="shadow-lg shadow-brand-900/5"
              />
            </Reveal>
            <Reveal delay={120}>
              <SectionHeader
                badge
                icon={<SparklesIcon className="size-4" />}
                eyebrow={c.approach.eyebrow}
                title={c.approach.title}
              />
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-sand-700">
                {c.approach.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Frameworks / pilares */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader
            badge
            icon={<NetworkIcon className="size-4" />}
            eyebrow={c.frameworks.eyebrow}
            title={c.frameworks.title}
            intro={c.frameworks.intro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.frameworks.items.map((item, i) => {
              const Icon = (item.icon && frameworkIcons[item.icon]) || NetworkIcon;
              return (
                <Reveal
                  as="div"
                  key={item.title}
                  delay={(i % 3) * 100}
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

      {/* Plataforma UMPE */}
      <Section
        tone="dark"
        className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-brand-950"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-1/4 h-72 w-[36rem] max-w-full rounded-full bg-brand-500/20 blur-3xl"
        />
        <Image
          src="/images/brand/logo.webp"
          alt=""
          aria-hidden="true"
          width={460}
          height={460}
          className="pointer-events-none absolute -bottom-24 -right-16 w-[26rem] max-w-none opacity-[0.06]"
        />
        <Container size="wide" className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Badge icon={<SparklesIcon className="size-4" />} className="mb-4">
                {c.platform.eyebrow}
              </Badge>
              <h2 className="text-3xl text-white sm:text-4xl">{c.platform.title}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-sand-200">
                {c.platform.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-3 sm:grid-cols-2">
                {c.platform.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-400/20 text-brand-200">
                      <CheckIcon className="size-3.5" />
                    </span>
                    <span className="text-sm text-sand-100">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Etapas */}
      <Section>
        <Container size="wide">
          <SectionHeader
            badge
            icon={<RepeatIcon className="size-4" />}
            eyebrow={c.steps.eyebrow}
            title={c.steps.title}
            intro={c.steps.intro}
          />
          <ol className="relative mt-12 max-w-3xl">
            {/* linha vertical conectando as etapas */}
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-5 top-3 w-px bg-brand-200 sm:left-6"
            />
            {c.steps.items.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 90}
                className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6"
              >
                <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white shadow-sm sm:size-12 sm:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1.5 sm:pt-2.5">
                  <h3 className="text-lg sm:text-xl">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-sand-600">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-2 flex max-w-3xl items-center gap-2 text-sm font-medium text-brand-700">
            <RepeatIcon className="size-4" />
            Um ciclo contínuo: a cada volta, o aprendizado aprofunda o impacto no território.
          </Reveal>
        </Container>
      </Section>

      {/* Nossos encontros */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader
            badge
            icon={<NetworkIcon className="size-4" />}
            eyebrow={c.encounters.eyebrow}
            title={c.encounters.title}
            intro={c.encounters.intro}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.encounters.gallery.map((item, i) => (
              <Reveal as="div" key={item.src} delay={(i % 3) * 80}>
                <MediaPlaceholder
                  ratio="4/3"
                  src={item.src}
                  alt={item.caption}
                  caption={item.caption}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="shadow-sm"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand cta={c.cta} />
    </>
  );
}
