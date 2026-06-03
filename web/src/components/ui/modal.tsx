"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { CloseIcon } from "@/components/ui/icons";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Rótulo acessível do diálogo. */
  label: string;
  children: ReactNode;
}

/**
 * Diálogo modal acessível e sem dependências: fecha com Esc, clique no fundo ou
 * botão de fechar; trava a rolagem do body e devolve o foco ao elemento anterior.
 */
export function Modal({ open, onClose, label, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <button
        type="button"
        aria-label="Fechar"
        tabIndex={-1}
        onClick={onClose}
        className="animate-overlay-in absolute inset-0 cursor-default bg-brand-950/60 backdrop-blur-sm"
      />
      <div className="animate-dialog-in relative z-10 w-full max-w-md rounded-2xl bg-background p-6 shadow-2xl ring-1 ring-black/5 sm:p-8">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full text-sand-500 transition-colors hover:bg-sand-100 hover:text-foreground focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          <CloseIcon className="size-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
