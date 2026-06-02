import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-700",
  secondary:
    "border border-brand-600 text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-700",
  ghost: "text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-700",
  inverted: "bg-white text-brand-700 hover:bg-sand-100 focus-visible:outline-white",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/** Classes utilitárias do botão — reutilizáveis em qualquer elemento. */
export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/** Botão de ação (elemento `<button>`). */
export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return <button className={buttonClasses(variant, size, className)} {...props} />;
}

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

/** Link com aparência de botão. Usa `next/link` para navegação interna. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const classes = buttonClasses(variant, size, className);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
