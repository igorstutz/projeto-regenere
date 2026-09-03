/**
 * Depoimentos exibidos no carrossel da Home.
 *
 * ⚠️ TEXTOS PROVISÓRIOS — substituir por depoimentos reais de participantes,
 * com autorização de uso de nome e imagem.
 *
 * Os dados ficam em `data/depoimentos.json`, editável pelo painel em /admin.
 */
import dados from "./data/depoimentos.json";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = dados.items;
