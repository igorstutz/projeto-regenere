"use client";

import { useState, type FormEvent } from "react";
import { buttonClasses } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const fieldClasses =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-base " +
  "text-foreground placeholder:text-sand-400 focus:border-brand-500 focus:outline-none " +
  "focus-visible:outline-2 focus-visible:outline-brand-600";

/**
 * Formulário de contato.
 *
 * ⚠️ INTEGRAÇÃO PENDENTE: como o site é estático, o envio ainda não está
 * conectado a um backend. Por ora, abre o cliente de e-mail do usuário (mailto).
 * Substituir por um endpoint/serviço (ex.: rota de API, Formspree, Resend) e
 * adicionar proteção anti-spam quando definirmos a infraestrutura.
 */
export function ContactForm({ note }: { note?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "");
    const assunto = String(data.get("assunto") ?? "");
    const email = String(data.get("email") ?? "");
    const mensagem = String(data.get("mensagem") ?? "");

    const subject = encodeURIComponent(assunto || `Contato pelo site — ${nome}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`,
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium">
            Nome <span className="text-accent-600">*</span>
          </label>
          <input id="nome" name="nome" required className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            E-mail <span className="text-accent-600">*</span>
          </label>
          <input id="email" name="email" type="email" required className={fieldClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="assunto" className="mb-1.5 block text-sm font-medium">
          Assunto
        </label>
        <input id="assunto" name="assunto" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium">
          Mensagem <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className={fieldClasses}
        />
      </div>

      {note ? <p className="text-sm text-sand-500">{note}</p> : null}

      <button type="submit" className={buttonClasses("primary", "lg")}>
        Enviar mensagem
      </button>

      {sent ? (
        <p
          role="status"
          className="rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-800"
        >
          Abrimos seu aplicativo de e-mail para concluir o envio. Se não abriu,
          escreva para{" "}
          <a className="font-semibold underline" href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
