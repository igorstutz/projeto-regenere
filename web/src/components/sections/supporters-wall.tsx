"use client";

import { AppImage as Image } from "@/components/ui/app-image";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Supporter } from "@/content/apoiadores";

/** Parede de logos clicáveis: cada logo abre um modal com descrição e logo ampliada. */
export function SupportersWall({ items }: { items: Supporter[] }) {
  const [active, setActive] = useState<Supporter | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s)}
            aria-label={`Ver detalhes: ${s.name}`}
            className="group flex h-28 cursor-pointer items-center justify-center rounded-[var(--radius-card)] border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md hover:shadow-brand-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            <Image
              src={s.logo}
              alt={s.name}
              width={200}
              height={90}
              className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Modal open={active !== null} onClose={() => setActive(null)} label={active?.name ?? "Apoiador"}>
        {active ? (
          <div>
            <div className="flex h-28 items-center justify-center rounded-xl bg-sand-50 p-6">
              <Image
                src={active.logo}
                alt={active.name}
                width={300}
                height={130}
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <h3 className="mt-5 pr-8 text-xl">{active.name}</h3>
            <p className="mt-2 leading-relaxed text-sand-600">{active.description}</p>
            {active.url ? (
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800"
              >
                Visitar site
                <ArrowRightIcon className="size-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </>
  );
}
