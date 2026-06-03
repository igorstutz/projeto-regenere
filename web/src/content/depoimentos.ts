/**
 * Depoimentos exibidos no carrossel da Home.
 *
 * ⚠️ TEXTOS PROVISÓRIOS — substituir por depoimentos reais de participantes,
 * com autorização de uso de nome e imagem.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "O Regenere não chegou com a solução pronta. Eles escutaram a comunidade e " +
      "construíram junto com a gente — por isso deu certo.",
    name: "Liderança comunitária",
    role: "Tavares · RS", // TODO: nome real e autorização
  },
  {
    quote:
      "Aprendi a organizar as finanças e a vender melhor o meu produto. Hoje meu " +
      "negócio sustenta a minha família com mais segurança.",
    name: "Empreendedora local",
    role: "Bairro Bom Jesus · Porto Alegre", // TODO: nome real
  },
  {
    quote:
      "A articulação com a universidade trouxe conhecimento técnico sem desvalorizar " +
      "o nosso saber. Foi uma troca de verdade.",
    name: "Produtor rural",
    role: "Comunidade quilombola · Tavares", // TODO: nome real
  },
];
