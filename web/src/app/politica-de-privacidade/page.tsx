import type { Metadata } from "next";
import { privacidadeContent as c } from "@/content/privacidade";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/politica-de-privacidade",
});

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      <Section>
        <Container size="narrow">
          <p className="text-sm text-sand-500">Última atualização: {c.updatedAt}</p>
          <div className="mt-8 space-y-10">
            {c.blocks.map((block, i) => (
              <div key={i}>
                {block.title ? <h2 className="text-xl">{block.title}</h2> : null}
                <div className="mt-3 space-y-4 leading-relaxed text-sand-700">
                  {block.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
