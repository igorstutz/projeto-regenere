# Projeto Regenere — Diagnóstico do Site Atual e Escopo do Novo Site

**Cliente:** Projeto Regenere / Instituto Camélia
**Site atual:** https://projeto-regenere.com.br
**Data do levantamento:** 02/06/2026
**Documento:** Diagnóstico + escopo para reestruturação completa (site institucional novo)

### Decisões de escopo fechadas (02/06/2026)
- **Blog:** **fora da v1** — estrutura e artigos ficam para fase futura.
- **Redação:** **produzida por nós** (todo o conteúdo institucional).
- **CMS:** **site estático**, sem painel de edição; alterações futuras feitas por nós (via dev).
- **Identidade visual:** **usar a marca atual**, apenas modernizando o site.

---

## 1. Resumo executivo

O Projeto Regenere possui hoje um site institucional simples em **WordPress**, com conteúdo
textual raso, dependência de JavaScript para renderização, SEO apenas básico e páginas de
template não utilizadas indexadas no Google. A proposta é uma **reestruturação completa**: site
moderno, interativo, performático, com SEO forte e conteúdo de qualidade.

Em números:

| Indicador | Hoje | Proposto |
|---|---|---|
| Páginas institucionais reais | 8 | 9 a 11 (templates únicos) |
| Páginas "lixo" indexadas | 5 | 0 |
| Posts de blog | 8 (+1 padrão) | Fora da v1 (fase futura) |
| Volume de texto institucional | ~4.500 palavras | ~7.300 a 9.950 palavras (novo, redação nossa) |
| Stack | WordPress + tema genérico | Estática moderna, sem CMS (ver seção 6) |
| Conteúdo dependente de JS | Sim | Não (SSR/SSG) |

---

## 2. Diagnóstico do site atual

### 2.1 Stack e tecnologia detectada
- **CMS:** WordPress
- **Formulários:** WPForms Lite (formulário de contato exige JavaScript ativo)
- **SEO:** plugin Yoast SEO instalado (sitemaps gerados por ele)
- **Tema:** genérico/padrão, sem identidade visual forte
- **Renderização:** o conteúdo depende de JavaScript no cliente

### 2.2 Problemas identificados
1. **Conteúdo raso** — várias páginas têm muito pouco texto (Patrocinadores ~130 palavras,
   Parceiros ~130, Contato ~50). Pobre para SEO e para comunicar a relevância do projeto.
2. **Páginas "lixo" indexadas** — `sample-page`, `recibo-de-ingresso`, `detalhes-do-ingresso`,
   `portfolio`, `recursos` são resíduos de tema/demo e prejudicam o SEO e a credibilidade.
3. **Títulos e metadados genéricos** — ex.: título "Página Inicial - REGENERE", sem
   meta descriptions otimizadas por página.
4. **Dependência de JavaScript** para exibir conteúdo e formulários — impacta performance e
   indexação.
5. **Sem identidade visual moderna / sem interatividade** — layout estático e padrão.
6. **Parceiros sem nomes acessíveis** — os 13 logos de parceiros não têm texto/alt associado
   (ruim para acessibilidade e SEO).
7. **Performance** — WordPress + tema + plugins tende a ser pesado sem otimização dedicada.

### 2.3 Inventário completo (via sitemap Yoast)

**Páginas institucionais reais (8):**

| # | Página | URL | Última modificação |
|---|---|---|---|
| 1 | Home / Página Inicial | `/` | 01/05/2026 |
| 2 | Sobre | `/sobre/` | 01/06/2026 |
| 3 | Metodologia | `/metodologia/` | 24/05/2026 |
| 4 | Instituto Camélia | `/instituto-camelia/` | 14/05/2026 |
| 5 | Patrocinadores | `/patrocinadores/` | 02/05/2026 |
| 6 | Experiências | `/experiencias/` | 28/05/2026 |
| 7 | Parceiros | `/parceiros/` | 01/06/2026 |
| 8 | Contato | `/contato/` | 28/05/2026 |

**Páginas a descartar / não migrar (5):** `sample-page`, `recibo-de-ingresso`,
`detalhes-do-ingresso`, `portfolio`, `recursos`.

**Blog (9 posts):** `hello-world` (padrão, descartar) + 8 artigos:
- Como o Regenere está impulsionando comunidades periféricas
- A importância das redes socioprodutivas no fortalecimento comunitário
- Passo a passo para revitalizar territórios urbanos e rurais
- Os pilares da inclusão social, econômica e ambiental
- Casos reais de sucesso no Programa Regenere
- Ferramentas inovadoras para o desenvolvimento territorial
- Promovendo sustentabilidade através da economia local
- Impacto social: histórias transformadoras do Regenere

---

## 3. Conteúdo atual por página (mapeamento)

| Página | Seções | Imagens | Form. | Palavras (aprox.) | Observação |
|---|---|---|---|---|---|
| Home | 6 | ~6 | Não | ~1.300 | Hero, impacto, resultados (100+ famílias / 20+ negócios), experiências, patrocinadores, CTA |
| Sobre | 8 | ~6 | Não | ~1.300 | O que é o programa, diferenciais, metodologia/UMPE, como funciona |
| Metodologia | 8 | ~14 | Sim | ~950 | 5 pilares, plataforma UMPE, 6 etapas, "nossos encontros" (fotos datadas) |
| Instituto Camélia | 5 | ~20 | Não | ~300 | Kitanda da Luana, Kitanda das Pretas, feiras, articulação institucional |
| Patrocinadores | 3 | ~5 | Não | ~135 | Regenera RS, BRDE |
| Experiências | 4 | ~8 | Não | ~300 | Bom Jesus (urbano), Tavares (rural/quilombola) |
| Parceiros | 3 | ~18 | Não | ~135 | 13 logos + UMPE; encontros IFRS e UFRGS |
| Contato | — | sim | Sim | ~50 | Form (Nome, E-mail, Assunto, Mensagem), endereços, telefone, e-mail, Instagram |

**Total atual ≈ 4.500 palavras** de conteúdo institucional — volume baixo para um projeto
social com a relevância que o Regenere tem.

### Dados institucionais a reaproveitar
- **Missão:** desenvolvimento territorial com impacto real — revitalização urbana/rural,
  fortalecimento de empreendimentos locais e construção de redes socioprodutivas.
- **Resultados-chave:** 100+ famílias quilombolas atendidas em Tavares; 20+ negócios locais
  impulsionados no bairro Bom Jesus; modelo replicável.
- **Plataforma própria:** UMPE (Universo MPE).
- **Patrocinadores:** Regenera RS, BRDE.
- **Parceiros acadêmicos:** IFRS, UFRGS (+ 13 logos a nomear).
- **Iniciativas:** Kitanda da Luana, Kitanda das Pretas.
- **Contato:** contato@projeto-regenere.com.br, +55-11-3099-8877, @projetoregenere.

---

## 4. Escopo do novo site — arquitetura proposta

Proposta de arquitetura de informação, otimizada para narrativa, captação de apoio e SEO:

1. **Home** — nova narrativa, hero com impacto, prova social, CTAs (apoiar / levar ao território).
2. **O Projeto / Sobre** — história, missão, visão, valores, como surgiu, o problema e a solução.
3. **Metodologia** — 5 pilares, 6 etapas, plataforma UMPE (com peça visual/diagrama).
4. **Instituto Camélia** — quem é o instituto mantenedor, equipe, governança, iniciativas.
5. **Experiências** *(página índice)* — visão geral dos territórios.
   - **5a. Estudo de caso: Bom Jesus** (urbano) — página dedicada com narrativa e resultados.
   - **5b. Estudo de caso: Tavares** (rural/quilombola) — página dedicada.
6. **Impacto & Resultados** *(nova)* — números, indicadores, depoimentos, prestação de contas.
7. **Apoiadores** *(unifica Patrocinadores + Parceiros)* — com nomes, descrições e links.
8. **Como apoiar / Seja parceiro** *(nova, CTA de captação)* — caminhos para empresas,
   instituições e comunidades; "Leve o Regenere ao seu território".
9. **Contato** — formulário, dados, mapa, redes.
10. **Política de Privacidade / LGPD** *(obrigatória)*.
11. **404 personalizada**.

> **Blog fica fora da v1** (decisão fechada) — a arquitetura já prevê o ponto de entrada para
> incluí-lo numa fase futura sem retrabalho.
> Páginas 6 e 8 são **recomendações novas** que aumentam a captação de recursos e a
> credibilidade — comuns e esperadas em sites de projetos sociais maduros.

### Contagem de templates únicos a projetar e desenvolver
Entre **9 e 11 layouts/templates únicos** (cada um com design + responsividade + dev):
Home, Sobre, Metodologia, Instituto Camélia, Experiências (índice), Estudo de caso (template
reutilizável para Bom Jesus/Tavares), Impacto, Apoiadores, Como apoiar, Contato, + páginas de
sistema (Política/LGPD e 404).

---

## 5. Conteúdo textual a produzir (estimativa de redação)

Metas de volume **para qualidade** (texto novo ou reescrito), por página:

| Página | Meta de palavras |
|---|---|
| Home | 700 – 900 |
| O Projeto / Sobre | 800 – 1.000 |
| Metodologia | 1.000 – 1.300 |
| Instituto Camélia | 600 – 800 |
| Experiências (índice) | 300 – 400 |
| Estudo de caso — Bom Jesus | 700 – 900 |
| Estudo de caso — Tavares | 700 – 900 |
| Impacto & Resultados | 400 – 600 |
| Apoiadores | 300 – 400 (+ microtexto por apoiador) |
| Como apoiar / Seja parceiro | 400 – 600 |
| Contato | 100 – 150 |
| Política de Privacidade / LGPD | 800 – 1.200 (em boa parte padrão) |
| **Subtotal institucional** | **~6.800 – 9.150 palavras** |
| Microcopy (botões, meta titles, meta descriptions, alt de imagens, labels) | 500 – 800 |
| **Total institucional (sem blog)** | **~7.300 – 9.950 palavras** |

**Blog (opcional):** reescrita/ampliação dos 8 artigos com qualidade e SEO →
8 × 600–900 = **4.800 – 7.200 palavras** adicionais.

> Hoje o site tem ~4.500 palavras. A proposta praticamente **dobra** o conteúdo institucional
> (sem blog) e o eleva em qualidade, profundidade e otimização para busca.

---

## 6. Recomendações técnicas (nova stack)

- **Framework:** Next.js (React) com renderização SSG/SSR — performance e SEO no estado da arte.
- **Estilo:** Tailwind CSS (ou similar) + design system próprio do Regenere.
- **CMS:** **não** — site estático (decisão fechada). Conteúdo versionado no código; alterações
  futuras feitas por nós (via dev). Mais leve, seguro e barato de hospedar.
- **Hospedagem:** Vercel/Netlify (estático + CDN) ou similar — rápido e barato.
- **SEO técnico:** SSR/SSG, sitemap limpo, dados estruturados (Schema.org: Organization, Article),
  Open Graph, meta tags por página, redirecionamentos 301 das URLs antigas, robots.txt.
- **Performance:** otimização de imagens (AVIF/WebP, lazy-load), Core Web Vitals no verde.
- **Acessibilidade (a11y):** alt em todas as imagens, contraste, navegação por teclado, WCAG AA.
- **Formulários:** integração com e-mail/CRM, anti-spam, sem dependência de JS para o conteúdo.
- **Analytics:** Google Analytics 4 + Search Console + eventos de conversão (CTAs de apoio).
- **Interatividade:** animações sutis, contadores de impacto, mapa dos territórios, galeria.

---

## 7. Fases de trabalho e entregáveis

1. **Descoberta & estratégia** — reunião de briefing, definição de objetivos, persona, arquitetura
   de informação final, benchmarking. *Entregável: documento de estratégia + sitemap aprovado.*
2. **UX / Wireframes** — estrutura de cada template. *Entregável: wireframes aprovados.*
3. **UI / Design visual** — identidade, design system, layouts de todos os templates (desktop +
   mobile). *Entregável: protótipo navegável (Figma).*
4. **Redação / Conteúdo** — produção dos textos das seções 4 e 5. *Entregável: textos revisados.*
5. **Desenvolvimento front-end** — implementação responsiva de todos os templates.
6. **Integração CMS + conteúdo** — cadastro de conteúdo, blog, formulários, integrações.
7. **SEO técnico + performance** — metadados, schema, redirects 301, Core Web Vitals, sitemap.
8. **QA & testes** — cross-browser, mobile, acessibilidade, links, formulários.
9. **Publicação & handoff** — deploy, DNS, Search Console/Analytics, treinamento da equipe,
   documentação de edição.

---

## 8. Estimativa de esforço (para precificação)

Estimativa já ajustada às decisões fechadas (**sem blog, redação nossa, site estático sem CMS,
marca atual**):

| Frente | Horas (mín.) | Horas (máx.) |
|---|---:|---:|
| 1. Descoberta & estratégia | 8 | 16 |
| 2. UX / Wireframes | 12 | 24 |
| 3. UI / Design visual (9–11 templates, marca atual) | 28 | 55 |
| 4. Redação / conteúdo (~7,3–10k palavras) | 24 | 45 |
| 5. Desenvolvimento front-end | 50 | 100 |
| 6. Integração de conteúdo + formulário (sem CMS) | 8 | 16 |
| 7. SEO técnico + performance | 10 | 20 |
| 8. QA & testes | 10 | 20 |
| 9. Publicação & handoff | 6 | 12 |
| **Total** | **~156 h** | **~308 h** |

> O valor final em R$ = horas × sua taxa-hora (ou pacote fechado). A faixa restante depende
> sobretudo do nível de capricho no design/animações e do volume real de redação.
>
> **Adicional futuro — Blog (fase 2):** +20 a +45 h (reescrita dos 8 artigos + índice + template).

---

## 9. Premissas e decisões pendentes (a confirmar com o cliente)

- [x] **Blog/Notícias** — fora da v1 (fase futura).
- [x] **CMS** — não; site estático com edições via dev.
- [x] **Identidade visual** — usar a marca atual.
- [x] **Redação** — produzida por nós.
- [ ] **Material de marca** — logo em vetor, paleta de cores e tipografia oficiais do projeto.
- [ ] **Fotografia/banco de imagens** — usar o acervo do projeto, novas fotos ou banco pago?
- [ ] **Idiomas** — só português ou também versão em inglês/espanhol?
- [ ] **Domínio e hospedagem** — quem mantém? Migração de DNS/e-mail?
- [ ] **Nomes dos 13 parceiros** e logos em alta resolução.
- [ ] **Dados de impacto atualizados** (números, depoimentos, autorizações de imagem).
- [ ] **Integrações** — newsletter, CRM, doação/PIX, WhatsApp?
- [ ] **Prazo desejado** de lançamento.

---

*Próximo passo sugerido: validar as decisões da seção 9 para fechar o escopo final, converter
as horas em proposta comercial e dar início pela fase de Descoberta & UX.*
