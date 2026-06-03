import type { Metadata } from "next";
import { AppImage as Image } from "@/components/ui/app-image";
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

interface Channel {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function ContatoPage() {
  const channels: Channel[] = [
    {
      icon: <MailIcon className="size-5" />,
      label: "E-mail",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    ...(siteConfig.contact.phone
      ? [
          {
            icon: <PhoneIcon className="size-5" />,
            label: "Telefone",
            value: siteConfig.contact.phone,
            href: `tel:${siteConfig.contact.phoneHref ?? ""}`,
          },
        ]
      : []),
    ...(siteConfig.social.instagram
      ? [
          {
            icon: <InstagramIcon className="size-5" />,
            label: "Instagram",
            value: "@projetoregenere",
            href: siteConfig.social.instagram,
            external: true,
          },
        ]
      : []),
  ];

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} />

      <Section>
        <Container size="wide">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-brand-900/5 lg:grid lg:grid-cols-2">
            {/* Painel: canais de atendimento */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-white sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-brand-500/20 blur-3xl"
              />
              <Image
                src="/images/brand/logo.webp"
                alt=""
                aria-hidden="true"
                width={360}
                height={360}
                className="pointer-events-none absolute -bottom-16 -left-12 w-64 max-w-none opacity-[0.08]"
              />

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl">{c.panel.title}</h2>
                <p className="mt-3 max-w-sm leading-relaxed text-sand-200">{c.panel.text}</p>

                <ul className="mt-10 space-y-4">
                  {channels.map((ch) => (
                    <li key={ch.label}>
                      <a
                        href={ch.href}
                        target={ch.external ? "_blank" : undefined}
                        rel={ch.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                      >
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-brand-200 transition-colors group-hover:bg-white/20">
                          {ch.icon}
                        </span>
                        <span className="leading-tight">
                          <span className="block text-xs font-medium tracking-wide text-sand-300 uppercase">
                            {ch.label}
                          </span>
                          <span className="block font-medium text-white">{ch.value}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-background p-8 sm:p-10 lg:p-12">
              <h2 className="text-2xl">{c.formTitle}</h2>
              <div className="mt-6">
                <ContactForm note={c.formNote} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
