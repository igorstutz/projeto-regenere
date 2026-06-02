import type { Metadata } from "next";
import { contatoContent as c } from "@/content/contato";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon, InstagramIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: c.seo.title,
  description: c.seo.description,
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      <Section>
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Canais de contato */}
            <div className="space-y-6">
              <h2 className="text-2xl">Canais de atendimento</h2>
              <ul className="space-y-4 text-sand-700">
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 size-5 text-brand-600" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-brand-700"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                {siteConfig.contact.phone ? (
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="mt-0.5 size-5 text-brand-600" />
                    <a
                      href={`tel:${siteConfig.contact.phoneHref ?? ""}`}
                      className="hover:text-brand-700"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                ) : null}
                {siteConfig.social.instagram ? (
                  <li className="flex items-start gap-3">
                    <InstagramIcon className="mt-0.5 size-5 text-brand-600" />
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-700"
                    >
                      @projetoregenere
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>

            {/* Formulário */}
            <div className="rounded-[var(--radius-card)] border border-border bg-sand-50 p-6 sm:p-8">
              <ContactForm note={c.formNote} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
