import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Elemento HTML renderizado. Padrão: div. */
  as?: ElementType;
  /** Largura máxima do conteúdo. Padrão: "default". */
  size?: "default" | "narrow" | "wide";
}

const sizes: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

/** Centraliza o conteúdo com largura máxima e respiro horizontal consistente. */
export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </Tag>
  );
}
