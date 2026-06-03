# Regenere — Site (Next.js)

Site institucional do **Projeto Regenere**. Construído com Next.js 16 (App Router),
TypeScript e Tailwind CSS v4. Site estático, focado em performance, SEO e acessibilidade.

## Requisitos

- Node.js 20+
- npm

## Como rodar

```bash
npm install      # instala dependências
npm run dev      # ambiente de desenvolvimento (http://localhost:3000)
npm run build    # build de produção (gera as páginas estáticas)
npm run start    # serve o build de produção
npm run lint     # verificação de lint
```

## Arquitetura de pastas

```
src/
├── app/                      # Rotas (App Router) + sitemap.ts, robots.ts
│   ├── layout.tsx            # Layout raiz: fontes, metadados globais, header/footer, JSON-LD
│   ├── page.tsx              # Home
│   ├── sobre/                # Demais páginas institucionais...
│   ├── experiencias/
│   │   └── [slug]/           # Estudos de caso (gerados por generateStaticParams)
│   └── not-found.tsx         # Página 404
│
├── components/
│   ├── ui/                   # Primitivos do design system (Button, Container, Section…)
│   ├── layout/               # Header, Footer, Logo, JsonLd
│   ├── sections/             # Blocos de página reutilizáveis (PageHero, CtaBand)
│   └── contact-form.tsx      # Formulário de contato (client)
│
├── config/
│   ├── site.ts               # Configuração global (nome, contato, redes) — fonte única de verdade
│   └── navigation.ts         # Estrutura de navegação (header, footer, CTA)
│
├── content/                  # Camada de conteúdo: dados tipados, separados da apresentação
│   ├── _types.ts             # Primitivos de conteúdo (Stat, Feature, Step, CTA…)
│   └── *.ts                  # Conteúdo por página
│
└── lib/
    ├── seo.ts                # buildMetadata() + absoluteUrl() — metadados consistentes
    ├── jsonld.ts             # Dados estruturados (Schema.org)
    └── utils.ts              # cn() e utilitários
```

### Princípios

- **Conteúdo separado da apresentação.** Os textos vivem em `src/content` (tipados).
  As páginas em `src/app` apenas consomem esses dados. Trocar/ampliar conteúdo não
  exige mexer em layout.
- **Tokens de marca centralizados** em `src/app/globals.css` (`@theme`). Trocar a
  identidade visual = ajustar as escalas de cor e fontes, sem tocar nos componentes.
- **Design system** em `components/ui` — todos os componentes reaproveitam os mesmos
  primitivos.
- **SEO de primeira classe**: metadados por página, `sitemap.xml`, `robots.txt`,
  canonical, Open Graph e JSON-LD.

## Imagens

As imagens são reaproveitadas do site original e otimizadas para **WebP** pelo
script `scripts/import-images.mjs` (usa `sharp`). Ficam em `public/images/`
(`brand/`, `sponsors/`, `partners/`, `photos/`). Para reimportar/atualizar:

```bash
node scripts/import-images.mjs
```

O `next/image` está em modo `unoptimized` (`next.config.ts`) — serve os WebP
diretamente, ideal para hospedagem estática. O componente `MediaPlaceholder`
mostra a imagem real quando recebe `src`, ou um placeholder decorativo on-brand.

## Pendências conhecidas (marcadas com `// TODO` no código)

- Confirmar dados de contato em `config/site.ts` (telefone/endereços parecem demo).
- Conectar o formulário de contato a um backend/serviço (hoje usa `mailto`).
- Revisão jurídica da Política de Privacidade (`content/privacidade.ts`).
- Confirmar a divisão das fotos de experiência entre Bom Jesus × Tavares
  (`content/experiencias.ts`) e os nomes dos 13 logos de parceiros.

> **Atenção:** este é o Next.js 16, que tem diferenças relevantes em relação a versões
> anteriores. A documentação oficial vem empacotada em `node_modules/next/dist/docs/`.
