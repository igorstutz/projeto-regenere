import Link from "next/link";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { InstagramIcon, MailIcon } from "@/components/ui/icons";

export function Footer() {
  const year = 2026; // Atualizar anualmente (evita divergência entre build e cliente).

  return (
    <footer className="bg-brand-950 text-sand-200">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-300">
              {siteConfig.tagline} Revitalizamos territórios urbanos e rurais e
              fortalecemos redes socioprodutivas.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {siteConfig.social.instagram ? (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do Projeto Regenere"
                  className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <InstagramIcon />
                </a>
              ) : null}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Enviar e-mail"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-sand-300 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-sand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-white"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
