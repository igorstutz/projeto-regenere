import type { PageSeo, ProseBlock } from "./_types";

export interface PrivacidadeContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  updatedAt: string;
  blocks: ProseBlock[];
}

/**
 * ⚠️ MINUTA — este texto é um rascunho-base e PRECISA de revisão jurídica antes
 * da publicação, ajustando-o ao tratamento de dados real do projeto (LGPD).
 */
export const privacidadeContent: PrivacidadeContent = {
  seo: {
    title: "Política de Privacidade",
    description:
      "Como o Projeto Regenere trata os dados pessoais coletados em seu site, em " +
      "conformidade com a LGPD.",
  },
  hero: {
    eyebrow: "Institucional",
    title: "Política de Privacidade",
    intro:
      "Esta política explica como tratamos os dados pessoais coletados por meio " +
      "deste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
  updatedAt: "Junho de 2026",
  blocks: [
    {
      title: "1. Quais dados coletamos",
      paragraphs: [
        "Coletamos os dados que você nos fornece voluntariamente pelo formulário de " +
          "contato — como nome, e-mail e o conteúdo da mensagem — além de dados de " +
          "navegação coletados por ferramentas de análise.",
      ],
    },
    {
      title: "2. Como usamos os dados",
      paragraphs: [
        "Utilizamos os dados para responder às suas mensagens, viabilizar parcerias e " +
          "aprimorar a experiência no site. Não vendemos seus dados a terceiros.",
      ],
    },
    {
      title: "3. Compartilhamento",
      paragraphs: [
        "Podemos compartilhar dados apenas quando necessário para a operação do site " +
          "(por exemplo, provedores de hospedagem e análise) ou por exigência legal.",
      ],
    },
    {
      title: "4. Seus direitos",
      paragraphs: [
        "Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer " +
          "momento, entrando em contato pelos canais informados neste site.",
      ],
    },
    {
      title: "5. Contato",
      paragraphs: [
        "Para tratar de qualquer assunto relacionado a esta política, fale com a " +
          "equipe do Projeto Regenere pela página de contato.",
        // TODO: revisão jurídica e inclusão do encarregado (DPO), se houver.
      ],
    },
  ],
};
