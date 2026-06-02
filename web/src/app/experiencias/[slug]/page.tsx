import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
import { ArrowRightIcon } from "@/components/ui/icons";

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

  return (
    <>
      <PageHero
        eyebrow={`${item.kind} · ${item.location}`}
        title={item.name}
        intro={item.summary}
      />

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
          <SectionHeader title="O que foi feito" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {item.actions.map((action) => (
              <div
                key={action.title}
                className="rounded-[var(--radius-card)] border border-border bg-background p-6"
              >
                <h3 className="text-lg">{action.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-600">
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Resultados */}
      <Section tone="dark">
        <Container size="wide">
          <dl className="grid gap-8 sm:grid-cols-3">
            {item.results.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sand-200">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/como-apoiar" variant="inverted">
              Levar ao meu território
            </ButtonLink>
            <Link
              href="/experiencias"
              className="inline-flex items-center gap-1.5 px-2 py-3 font-semibold text-white hover:underline"
            >
              <ArrowRightIcon className="size-4 rotate-180" />
              Ver todas as experiências
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
