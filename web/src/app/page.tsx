import type { Metadata } from "next";
import Link from "next/link";
import { AppImage as Image } from "@/components/ui/app-image";
import { homeContent as c } from "@/content/home";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ImageFade } from "@/components/ui/image-fade";
import { Badge } from "@/components/ui/badge";
import { BlobBackdrop } from "@/components/ui/decorations";
import {
  ArrowRightIcon,
  LeafIcon,
  TrendingUpIcon,
  SparklesIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { StatsGrid } from "@/components/sections/stats-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { PartnersMarquee } from "@/components/sections/partners-marquee";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-50">
        <BlobBackdrop />
        <Container size="wide" className="relative z-10">
          <div className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Badge>{c.hero.eyebrow}</Badge>
              <h1 className="mt-6 text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
                {c.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-900/80 sm:text-xl">
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
            </Reveal>

            <Reveal delay={150} className="relative">
              <ImageFade
                slides={c.hero.slides}
                ratio="4/3"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="shadow-xl shadow-brand-900/10"
              />
              <div className="animate-float-slow absolute -bottom-6 -left-6 hidden size-24 rounded-2xl bg-accent-400/80 shadow-lg sm:block" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAIXA DE APOIADORES */}
      <div className="border-y border-border bg-background py-10 sm:py-12">
        <Container size="wide">
          <p className="mb-8 text-center text-xs font-bold tracking-wide text-sand-500 uppercase">
            Com apoio de
          </p>
          <PartnersMarquee />
        </Container>
      </div>

      {/* INDICADORES */}
      <Section tone="dark" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -left-20 top-10 size-72 rounded-full bg-brand-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-accent-500/10 blur-3xl"
        />
        {/* logo da marca como marca d'água (estilo sombra) */}
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
            <h2 className="text-3xl text-white text-balance sm:text-4xl">
              Impacto que já transforma territórios.
            </h2>
          </Reveal>
          <StatsGrid stats={c.stats} variant="dark" columns={3} />
        </Container>
      </Section>

      {/* SOBRE (resumo) */}
      <Section>
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <MediaPlaceholder
                ratio="3/2"
                src={c.about.image}
                alt="Encontro comunitário ao entardecer em território rural"
                caption="Encontros no território"
              />
            </Reveal>
            <Reveal delay={120}>
              <SectionHeader
                eyebrow={c.about.eyebrow}
                title={c.about.title}
                badge
                icon={<LeafIcon className="size-4" />}
              />
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-sand-700">
                {c.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <Link
                  href={c.about.href}
                  className="group inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800"
                >
                  Conheça o projeto
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* PILARES */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader
            eyebrow={c.pillars.eyebrow}
            title={c.pillars.title}
            badge
            icon={<SparklesIcon className="size-4" />}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.pillars.items.map((item, i) => (
              <Reveal
                as="div"
                key={item.title}
                delay={i * 100}
                className="rounded-[var(--radius-card)] border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <span className="grid size-11 place-items-center rounded-full bg-brand-100 text-brand-600">
                  <LeafIcon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-600">
                  {item.description}
                </p>
              </Reveal>
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
          <SectionHeader
            eyebrow={c.experiences.eyebrow}
            title={c.experiences.title}
            badge
            icon={<MapPinIcon className="size-4" />}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {c.experiences.items.map((item, i) => (
              <Reveal as="div" key={item.href} delay={i * 120}>
                <Link
                  href={item.href}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-900/10"
                >
                  <Image
                    src={item.image}
                    alt={`Experiência ${item.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <span className="inline-flex items-center rounded-md bg-white/15 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/20 backdrop-blur">
                      {item.kind}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
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

      {/* DEPOIMENTOS */}
      <Testimonials />

      {/* CHAMADA FINAL */}
      <Section
        tone="dark"
        spacing="spacious"
        className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-brand-950"
      >
        {/* brilho suave no topo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
        />
        {/* logo da marca como marca d'água (estilo sombra) */}
        <Image
          src="/images/brand/logo.webp"
          alt=""
          aria-hidden="true"
          width={560}
          height={560}
          className="pointer-events-none absolute -bottom-28 -right-20 w-[32rem] max-w-none opacity-[0.07]"
        />
        {/* linha que divide do rodapé */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <Container size="narrow" className="relative text-center">
          <Reveal>
            <Badge icon={<LeafIcon className="size-4" />} className="mb-5">
              Vamos juntos
            </Badge>
            <h2 className="text-3xl text-white text-balance sm:text-4xl">{c.cta.title}</h2>
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
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
