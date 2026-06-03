import type { PageSeo } from "./_types";

export interface PrivacidadeSection {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface PrivacidadeContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; intro: string };
  updatedAt: string;
  sections: PrivacidadeSection[];
}

/**
 * ⚠️ MINUTA — este texto é um rascunho-base e PRECISA de revisão jurídica antes
 * da publicação definitiva, ajustando-o ao tratamento de dados real do projeto
 * (LGPD — Lei nº 13.709/2018). Confirmar dados do controlador e do encarregado.
 */
export const privacidadeContent: PrivacidadeContent = {
  seo: {
    title: "Política de Privacidade",
    description:
      "Como o Projeto Regenere trata os dados pessoais coletados em seu site, em " +
      "conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
  hero: {
    eyebrow: "Institucional",
    title: "Política de Privacidade",
    intro:
      "Esta política explica como o Projeto Regenere coleta, usa e protege os dados " +
      "pessoais tratados por meio deste site, em conformidade com a Lei Geral de " +
      "Proteção de Dados (LGPD — Lei nº 13.709/2018).",
  },
  updatedAt: "Junho de 2026",
  sections: [
    {
      id: "introducao",
      title: "1. Introdução",
      paragraphs: [
        "O Projeto Regenere, realizado pelo Instituto Camélia (“nós”), respeita a sua " +
          "privacidade e está comprometido com a proteção dos dados pessoais de quem " +
          "navega ou entra em contato por este site.",
        "Ao utilizar o site, você declara estar ciente desta Política de Privacidade. " +
          "Recomendamos a leitura atenta deste documento.",
      ],
    },
    {
      id: "dados",
      title: "2. Quais dados coletamos",
      paragraphs: ["Coletamos apenas os dados necessários para nos comunicarmos com você:"],
      items: [
        "Dados de contato que você nos fornece voluntariamente pelo formulário — como nome, e-mail e o conteúdo da mensagem.",
        "Dados de navegação coletados automaticamente, como páginas visitadas e informações do dispositivo, por meio de ferramentas de análise.",
      ],
    },
    {
      id: "finalidades",
      title: "3. Para que usamos os dados",
      paragraphs: ["Utilizamos os dados pessoais para as seguintes finalidades:"],
      items: [
        "Responder às suas mensagens e solicitações;",
        "Viabilizar parcerias, patrocínios e apoios ao programa;",
        "Aprimorar a experiência de navegação e o conteúdo do site;",
        "Cumprir obrigações legais e regulatórias.",
      ],
    },
    {
      id: "base-legal",
      title: "4. Base legal",
      paragraphs: [
        "O tratamento dos seus dados ocorre com fundamento nas hipóteses previstas na " +
          "LGPD, especialmente o consentimento, o legítimo interesse e o cumprimento de " +
          "obrigação legal, conforme a finalidade de cada tratamento.",
      ],
    },
    {
      id: "compartilhamento",
      title: "5. Compartilhamento de dados",
      paragraphs: [
        "Não vendemos os seus dados pessoais. O compartilhamento ocorre apenas quando " +
          "necessário para a operação do site — por exemplo, com provedores de " +
          "hospedagem e de análise de tráfego — ou para cumprimento de obrigação legal.",
      ],
    },
    {
      id: "cookies",
      title: "6. Cookies e análise de navegação",
      paragraphs: [
        "O site pode utilizar cookies e tecnologias semelhantes para lembrar " +
          "preferências e medir o desempenho das páginas. Você pode gerenciar ou " +
          "desativar os cookies nas configurações do seu navegador.",
      ],
    },
    {
      id: "seguranca",
      title: "7. Segurança e retenção",
      paragraphs: [
        "Adotamos medidas técnicas e organizacionais para proteger os dados pessoais " +
          "contra acessos não autorizados, perda ou alteração. Os dados são mantidos " +
          "apenas pelo tempo necessário às finalidades informadas ou para cumprir " +
          "obrigações legais.",
      ],
    },
    {
      id: "direitos",
      title: "8. Seus direitos",
      paragraphs: [
        "Nos termos da LGPD, você pode, a qualquer momento, solicitar:",
      ],
      items: [
        "Confirmação da existência de tratamento e acesso aos seus dados;",
        "Correção de dados incompletos, inexatos ou desatualizados;",
        "Anonimização, bloqueio ou eliminação de dados desnecessários;",
        "Portabilidade dos dados, quando aplicável;",
        "Revogação do consentimento e eliminação dos dados tratados com base nele.",
      ],
    },
    {
      id: "alteracoes",
      title: "9. Alterações desta política",
      paragraphs: [
        "Esta política pode ser atualizada periodicamente. A data da última " +
          "atualização é indicada no início do documento. Recomendamos revisá-la com " +
          "regularidade.",
      ],
    },
    {
      id: "contato",
      title: "10. Encarregado e contato",
      paragraphs: [
        "Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento dos seus " +
          "dados, fale com a equipe do Projeto Regenere pela nossa página de contato.",
        // TODO: incluir o nome/e-mail do Encarregado (DPO), se houver, e o controlador.
      ],
    },
  ],
};
