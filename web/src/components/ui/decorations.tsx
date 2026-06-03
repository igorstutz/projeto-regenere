import { cn } from "@/lib/utils";

/**
 * Fundo decorativo com formas orgânicas (blobs) em movimento sutil.
 * Puramente estético — fica atrás do conteúdo (aria oculto). Use dentro de um
 * container `relative` com o conteúdo em `relative z-10`.
 */
export function BlobBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="animate-blob absolute -left-24 -top-24 size-96 bg-brand-300/40 blur-3xl" />
      <div className="animate-float-slow absolute right-0 top-1/3 size-72 rounded-full bg-accent-200/40 blur-3xl" />
      <div className="animate-float absolute -bottom-20 left-1/3 size-80 rounded-full bg-brand-200/50 blur-3xl" />
    </div>
  );
}

/**
 * Padrão de pontos sutil, para dar textura a seções claras.
 */
export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.4]",
        "[background-image:radial-gradient(var(--color-brand-200)_1px,transparent_1px)]",
        "[background-size:22px_22px]",
        className,
      )}
    />
  );
}
