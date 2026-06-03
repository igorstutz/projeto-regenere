import type { Metadata } from "next";
import { institutoContent as c } from "@/content/instituto-camelia";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { SparklesIcon, StoreIcon, NetworkIcon, CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/instituto-camelia",
});

export default function InstitutoCameliaPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      {/* O Instituto + objetivos */}
      <Section>
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader
                badge
                icon={<SparklesIcon className="size-4" />}
                eyebrow={c.about.eyebrow}
                title={c.about.title}
              />
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-sand-700">
                {c.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <h3 className="mt-8 font-semibold text-foreground">{c.objectives.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.objectives.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sand-700">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-sand-700">{c.objectives.conclusion}</p>
            </Reveal>
            <Reveal delay={120}>
              <MediaPlaceholder
                ratio="3/4"
                src={c.about.image}
                alt="Equipe do Instituto Camélia"
                sizes="(max-width: 1024px) 100vw, 420px"
                className="mx-auto max-w-sm shadow-lg shadow-brand-900/10"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Iniciativas — cada uma com seu carrossel */}
      {c.initiatives.map((it, i) => {
        const carouselRight = i % 2 === 0;
        return (
          <Section key={it.name} tone={carouselRight ? "muted" : "default"}>
            <Container size="wide">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal className={cn(!carouselRight && "lg:order-last")}>
                  <Badge icon={<StoreIcon className="size-4" />} className="mb-4">
                    Iniciativa
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl">{it.name}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-sand-700">
                    {it.description}
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <div className="mx-auto w-full max-w-sm">
                    <Carousel
                      label={`Fotos da ${it.name}`}
                      autoplay={5000}
                      slides={it.gallery.map((src, j) => (
                        <MediaPlaceholder
                          key={src}
                          ratio="3/4"
                          src={src}
                          alt={`${it.name} — foto ${j + 1}`}
                          sizes="384px"
                        />
                      ))}
                    />
                  </div>
                </Reveal>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Feiras, eventos e articulação */}
      <Section tone="muted">
        <Container size="wide">
          <SectionHeader
            badge
            icon={<NetworkIcon className="size-4" />}
            eyebrow={c.actions.eyebrow}
            title={c.actions.title}
            intro={c.actions.intro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {c.actions.gallery.map((item, i) => (
              <Reveal as="div" key={item.src} delay={i * 90}>
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
