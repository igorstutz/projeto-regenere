import type { Metadata } from "next";
import { apoiadoresContent as c } from "@/content/apoiadores";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SupportersWall } from "@/components/sections/supporters-wall";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SparklesIcon, NetworkIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/apoiadores",
});

const groupIcons = [
  <SparklesIcon key="0" className="size-4" />,
  <NetworkIcon key="1" className="size-4" />,
];

export default function ApoiadoresPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      {c.groups.map((group, i) => (
        <Section key={group.title} tone={i % 2 === 1 ? "muted" : "default"}>
          <Container size="wide">
            <SectionHeader
              badge
              icon={groupIcons[i] ?? groupIcons[0]}
              eyebrow={group.eyebrow}
              title={group.title}
              intro={group.intro}
            />
            <div className="mt-12">
              <SupportersWall items={group.items} />
            </div>
          </Container>
        </Section>
      ))}

      <CtaBand cta={c.cta} />
    </>
  );
}
