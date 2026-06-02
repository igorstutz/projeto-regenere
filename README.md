# Projeto Regenere — Site institucional

Reestruturação completa do site do **Projeto Regenere** (Instituto Camélia):
de um WordPress simples para um site moderno, performático e com SEO forte.

## Estrutura do repositório

```
.
├── docs/        # Diagnóstico, escopo e documentação do projeto
│   └── 01-diagnostico-e-escopo.md
└── web/         # Aplicação do site (Next.js 16 + TypeScript + Tailwind v4)
```

## Começando

O código do site fica em [`web/`](./web). Para rodar:

```bash
cd web
npm install
npm run dev
```

Veja [`web/README.md`](./web/README.md) para a arquitetura detalhada e o passo a passo.

## Documentação

- [Diagnóstico do site atual e escopo do novo site](./docs/01-diagnostico-e-escopo.md)

## Decisões de escopo (v1)

- Sem blog na v1 (estrutura prevista para fase futura).
- Redação produzida internamente.
- Site estático (sem CMS); edições futuras via desenvolvimento.
- Identidade visual: marca atual mantida e modernizada.
