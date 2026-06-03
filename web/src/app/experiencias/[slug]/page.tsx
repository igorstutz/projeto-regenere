import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppImage as Image } from "@/components/ui/app-image";
import {
  experienceCases,
  getExperienceCase,
} from "@/content/experiencias";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { CheckIcon, SparklesIcon } from "@/components/ui/icons";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Gera as rotas estáticas para cada estudo de caso em tempo de build. */
export function generateStaticParams() {
  return experienceCases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperienceCase(slug);
  if (!item) return buildMetadata({ title: "Experiência", path: `/experiencias/${slug}` });

  return buildMetadata({
    title: item.seo.title,
    description: item.seo.description,
    path: `/experiencias/${item.slug}`,
  });
}

export default async function ExperienciaCasePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getExperienceCase(slug);
  if (!item) notFound();

  // Indicador principal da experiência (número + sufixo).
  const result = item.results[0];
  const match = result?.value.match(/^(\d+)(.*)$/);
  const resultNumber = match ? Number(match[1]) : null;
  const resultSuffix = match ? match[2] : (result?.value ?? "");

  return (
    <>
      <PageHero
        eyebrow={`${item.kind} · ${item.location}`}
        title={item.name}
        intro={item.summary}
      />

      {/* Imagem de destaque */}
      <Container size="wide" className="-mt-8">
        <MediaPlaceholder
          ratio="16/9"
          src={item.image}
          alt={`${item.name} · ${item.location}`}
          caption={`${item.name} · ${item.location}`}
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="shadow-xl shadow-brand-900/10"
        />
      </Container>

      <Section>
        <Container size="narrow">
          <div className="space-y-4 text-lg leading-relaxed text-sand-700">
            {item.context.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ações realizadas */}
      <Section tone="muted">
        <Container size="wide">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                badge
                icon={<SparklesIcon className="size-4" />}
                eyebrow={item.subtitle}
                title="O que o programa promove"
              />
              <div className="mt-8 rounded-2xl border-l-4 border-brand-500 bg-background p-6 shadow-sm">
                <p className="text-lg leading-relaxed text-sand-800">
                  <span className="font-semibold text-brand-700">Objetivo: </span>
                  {item.objective}
                </p>
              </div>
            </div>

            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              {item.actions.map((action) => (
                <li key={action} className="flex items-center gap-4 px-6 py-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                    <CheckIcon className="size-4" />
                  </span>
                  <span className="font-medium text-foreground">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Galeria */}
      <Section>
        <Container size="wide">
          <SectionHeader title="No território" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {item.gallery.map((src, i) => (
              <MediaPlaceholder
                key={src}
                ratio="3/4"
                src={src}
                alt={`${item.name} — foto ${i + 1}`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Fechamento: resultado em destaque + chamada */}
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
          className="pointer-events-none absolute -bottom-28 -right-20 w-[30rem] max-w-none opacity-[0.07]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <Container size="narrow" className="relative text-center">
          <Reveal>
            {result ? (
              <div className="mb-10">
                <span className="bg-gradient-to-br from-white to-brand-200 bg-clip-text font-display text-6xl font-semibold text-transparent sm:text-7xl">
                  {resultNumber !== null ? (
                    <CountUp value={resultNumber} suffix={resultSuffix} />
                  ) : (
                    result.value
                  )}
                </span>
                <p className="mt-2 text-lg text-sand-200">{result.label}</p>
              </div>
            ) : null}

            <h2 className="text-2xl text-white text-balance sm:text-3xl">
              Leve esta experiência ao seu território.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/como-apoiar" variant="inverted" size="lg">
                Levar ao meu território
              </ButtonLink>
              <ButtonLink
                href="/experiencias"
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
              >
                Ver todas as experiências
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
