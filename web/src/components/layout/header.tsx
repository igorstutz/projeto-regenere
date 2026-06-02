"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, primaryCta } from "@/config/navigation";
import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/** Verifica se o caminho atual corresponde a um item de navegação. */
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          {/* Navegação desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      isActive(pathname, item.href)
                        ? "text-brand-700"
                        : "text-sand-700 hover:text-brand-700",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href={primaryCta.href} size="md">
              {primaryCta.label}
            </ButtonLink>
          </div>

          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex items-center justify-center rounded-md p-2 text-sand-800 lg:hidden"
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </Container>

      {/* Painel do menu mobile */}
      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <Container>
            <nav aria-label="Navegação principal (mobile)" className="py-4">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-base font-medium",
                        isActive(pathname, item.href)
                          ? "bg-brand-50 text-brand-700"
                          : "text-sand-800 hover:bg-sand-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <ButtonLink
                  href={primaryCta.href}
                  size="lg"
                  className="w-full"
                >
                  {primaryCta.label}
                </ButtonLink>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
