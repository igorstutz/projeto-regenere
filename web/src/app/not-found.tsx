import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section tone="brand" spacing="spacious">
      <Container size="narrow" className="text-center">
        <p className="font-display text-6xl font-semibold text-brand-400">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">Página não encontrada</h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-brand-900/80">
          O conteúdo que você procura pode ter sido movido ou não existe mais.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="lg">
            Voltar para a página inicial
          </ButtonLink>
          <ButtonLink href="/contato" variant="secondary" size="lg">
            Falar com a gente
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
