import type { Metadata } from "next";
import Link from "next/link";
import { privacidadeContent as c } from "@/content/privacidade";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

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
        <Container size="wide">
          <p className="mb-10 inline-flex rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            Última atualização: {c.updatedAt}
          </p>

          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* Índice lateral */}
            <aside className="hidden lg:block">
              <nav
                aria-label="Índice da política"
                className="sticky top-24 self-start border-l border-border"
              >
                <p className="mb-3 pl-4 text-xs font-semibold tracking-wide text-sand-400 uppercase">
                  Nesta página
                </p>
                <ul className="space-y-1">
                  {c.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-sand-600 transition-colors hover:border-brand-500 hover:text-brand-700"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Conteúdo */}
            <div className="max-w-2xl">
              <div className="space-y-12">
                {c.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-xl sm:text-2xl">{section.title}</h2>
                    <div className="mt-3 space-y-4 leading-relaxed text-sand-700">
                      {section.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {section.items ? (
                      <ul className="mt-4 space-y-2.5">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sand-700">
                            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                              <CheckIcon className="size-3.5" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              {/* Chamada de contato ao final */}
              <div className="mt-12 rounded-2xl border border-border bg-sand-50 p-6 sm:p-8">
                <h3 className="text-lg">Tem alguma dúvida sobre os seus dados?</h3>
                <p className="mt-2 text-sand-600">
                  Fale com a equipe do Projeto Regenere — teremos prazer em ajudar.
                </p>
                <Link
                  href="/contato"
                  className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800"
                >
                  Ir para a página de contato
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
