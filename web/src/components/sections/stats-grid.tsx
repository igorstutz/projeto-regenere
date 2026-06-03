import type { ComponentType, SVGProps } from "react";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import {
  UsersIcon,
  StoreIcon,
  RepeatIcon,
  LeafIcon,
  SparklesIcon,
  NetworkIcon,
  TrendingUpIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Stat } from "@/content/_types";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  users: UsersIcon,
  store: StoreIcon,
  repeat: RepeatIcon,
  leaf: LeafIcon,
  sparkles: SparklesIcon,
  network: NetworkIcon,
  trendingUp: TrendingUpIcon,
  mappin: MapPinIcon,
};

/** Separa um valor como "100+" em número (100) e sufixo ("+"). */
function parseValue(value: string): { number: number | null; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: null, suffix: value };
  return { number: Number(match[1]), suffix: match[2] };
}

interface StatsGridProps {
  stats: Stat[];
  /** Esquema de cores conforme o fundo. Padrão: "dark". */
  variant?: "dark" | "light";
  columns?: 2 | 3 | 4;
}

const cols: Record<NonNullable<StatsGridProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/** Grade de indicadores em cards, com contagem animada e destaque no ícone. */
export function StatsGrid({ stats, variant = "dark", columns = 3 }: StatsGridProps) {
  const isDark = variant === "dark";

  return (
    <dl className={cn("grid gap-6", cols[columns])}>
      {stats.map((stat, i) => {
        const { number, suffix } = parseValue(stat.value);
        const Icon = stat.icon ? iconMap[stat.icon] : undefined;

        return (
          <Reveal
            as="div"
            key={stat.label}
            delay={i * 120}
            className={cn(
              "group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1",
              isDark
                ? "border-white/10 bg-white/5 backdrop-blur hover:border-white/25 hover:bg-white/[0.08]"
                : "border-border bg-background hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5",
            )}
          >
            {/* brilho decorativo */}
            <div
              className={cn(
                "pointer-events-none absolute -right-10 -top-10 size-28 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100",
                isDark ? "bg-brand-400/20 opacity-70" : "bg-brand-300/30 opacity-60",
              )}
            />

            {Icon ? (
              <span
                className={cn(
                  "mb-5 grid size-12 place-items-center rounded-xl",
                  isDark ? "bg-brand-500/20 text-brand-200" : "bg-brand-100 text-brand-600",
                )}
              >
                <Icon className="size-6" />
              </span>
            ) : null}

            <dt
              className={cn(
                "bg-clip-text font-display text-5xl font-semibold tracking-tight text-transparent sm:text-6xl",
                isDark
                  ? "bg-gradient-to-br from-white to-brand-200"
                  : "bg-gradient-to-br from-brand-700 to-brand-500",
              )}
            >
              {number !== null ? <CountUp value={number} suffix={suffix} /> : stat.value}
            </dt>

            <dd className="mt-3">
              <span className={cn("font-semibold", isDark ? "text-white" : "text-foreground")}>
                {stat.label}
              </span>
              {stat.description ? (
                <p className={cn("mt-1 text-sm leading-relaxed", isDark ? "text-sand-300" : "text-sand-600")}>
                  {stat.description}
                </p>
              ) : null}
            </dd>
          </Reveal>
        );
      })}
    </dl>
  );
}
