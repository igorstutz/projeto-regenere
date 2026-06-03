import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

/**
 * Rotas estáticas do site, com prioridade e frequência de atualização.
 * Ao adicionar uma página nova, inclua-a aqui para que entre no sitemap.
 */
const routes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/sobre", priority: 0.9, changeFrequency: "monthly" },
  { path: "/metodologia", priority: 0.9, changeFrequency: "monthly" },
  { path: "/instituto-camelia", priority: 0.8, changeFrequency: "monthly" },
  { path: "/experiencias", priority: 0.8, changeFrequency: "monthly" },
  { path: "/experiencias/bom-jesus", priority: 0.7, changeFrequency: "monthly" },
  { path: "/experiencias/tavares", priority: 0.7, changeFrequency: "monthly" },
  { path: "/impacto", priority: 0.8, changeFrequency: "monthly" },
  { path: "/apoiadores", priority: 0.7, changeFrequency: "monthly" },
  { path: "/como-apoiar", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contato", priority: 0.6, changeFrequency: "yearly" },
  { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
