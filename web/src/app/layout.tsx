import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/layout/json-ld";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />

        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>

        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
