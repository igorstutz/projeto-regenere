import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { DotPattern } from "@/components/ui/decorations";
import { QuoteIcon } from "@/components/ui/icons";
import { testimonials } from "@/content/depoimentos";
import { TestimonialStories } from "@/components/sections/testimonial-stories";

/** Seção de depoimentos no formato "stories". */
export function Testimonials() {
  return (
    <Section tone="brand" className="relative overflow-hidden border-t border-brand-100">
      <DotPattern className="opacity-30" />
      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              badge
              icon={<QuoteIcon className="size-4" />}
              eyebrow="Vozes do território"
              title="Histórias de quem viveu a transformação"
              intro="Depoimentos de empreendedores, lideranças e famílias que constroem o Regenere no dia a dia."
            />
            <p className="mt-6 text-sm text-brand-700/70">
              Passe o mouse para pausar · toque nas laterais para navegar entre os depoimentos.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <TestimonialStories items={testimonials} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
