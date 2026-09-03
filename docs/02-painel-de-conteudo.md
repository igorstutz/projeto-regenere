# Painel de conteúdo (Sveltia CMS)

O site passou a ter um painel próprio de edição em **projeto-regenere.com.br/admin/**,
onde a equipe altera textos, imagens, números e experiências sem mexer no código.

## Como funciona

O painel é o [Sveltia CMS](https://sveltiacms.app) — um CMS *baseado em Git*: ele
não tem banco de dados nem servidor próprio. Cada alteração salva vira um commit
no repositório do GitHub, e um robô (GitHub Actions) reconstrói o site e o envia
para a HostGator.

```
Editor abre /admin  →  edita e clica em "Save"
      ↓
commit no GitHub (igorstutz/projeto-regenere, branch main)
      ↓
GitHub Actions: confere o conteúdo → build → envio por FTP
      ↓
projeto-regenere.com.br atualizado (leva ~2 a 4 minutos)
```

Consequências úteis desse desenho:

- **Histórico completo**: todo texto trocado fica registrado, com autor e data, e
  pode ser revertido.
- **Sem custo e sem manutenção de servidor**: o painel é um arquivo estático.
- **O site continua estático**: mesma performance e segurança de antes.

## O conteúdo editável

| Seção no painel | Arquivos |
| --- | --- |
| Páginas | `web/src/content/data/*.json` (Início, O Projeto, Metodologia, Impacto, Instituto Camélia, Experiências — listagem, Apoiadores, Como apoiar, Contato, Política de Privacidade) |
| Experiências | `web/src/content/data/experiencias/<endereço>.json` — um arquivo por estudo de caso |
| Configurações | `site.json` (dados do site e contato), `navegacao.json` (menus), `depoimentos.json` |
| Imagens | `web/public/images/` — uploads novos vão para `images/uploads/` |

O código lê esses JSON com tipagem preservada (`src/content/*.ts` viraram
carregadores). Nada mais precisa ser alterado no código para publicar conteúdo.

Novas imagens enviadas pelo painel são convertidas automaticamente para **WebP**,
com no máximo 1800px de largura — o mesmo padrão das imagens já otimizadas.

---

## Configuração inicial (feita uma única vez)

### 1. Secrets de publicação no GitHub

Sem isso, as edições ficam salvas no repositório mas não chegam ao ar.

Em **Settings → Secrets and variables → Actions → New repository secret**,
cadastre os mesmos valores que hoje estão em `web/.env.deploy`:

| Secret | Valor |
| --- | --- |
| `FTP_HOST` | `ftp.projeto-regenere.com.br` |
| `FTP_USER` | usuário de FTP do cPanel |
| `FTP_PASSWORD` | senha desse usuário |
| `FTP_REMOTE_DIR` | `/public_html` (opcional — é o padrão) |
| `FTP_PORT` | `21` (opcional — é o padrão) |

Para testar sem esperar uma edição: **Actions → Publicar site (HostGator) → Run
workflow**.

### 2. Login com GitHub (OAuth)

O painel precisa de um autenticador para o botão "Entrar com GitHub". O oficial é
um Cloudflare Worker gratuito.

1. **Publicar o Worker**: em <https://github.com/sveltia/sveltia-cms-auth>, use o
   botão *Deploy to Cloudflare Workers* (conta gratuita serve). Ao final, copie a
   URL — algo como `https://sveltia-cms-auth.SEU-SUBDOMINIO.workers.dev`.

2. **Registrar a aplicação no GitHub**: em
   <https://github.com/settings/applications/new>, preencha:
   - *Application name*: `Painel Projeto Regenere`
   - *Homepage URL*: `https://projeto-regenere.com.br`
   - *Authorization callback URL*: a URL do Worker seguida de `/callback`
     (ex.: `https://sveltia-cms-auth.SEU-SUBDOMINIO.workers.dev/callback`)

   Guarde o **Client ID** e gere um **Client Secret**.

3. **Configurar o Worker**: no painel da Cloudflare, em *Settings → Variables* do
   worker, adicione:

   | Variável | Valor |
   | --- | --- |
   | `GITHUB_CLIENT_ID` | o Client ID |
   | `GITHUB_CLIENT_SECRET` | o Client Secret (marcar como *encrypt*) |
   | `ALLOWED_DOMAINS` | `projeto-regenere.com.br` |

4. **Apontar o painel para o Worker**: em `web/public/admin/config.yml`,
   descomente a linha `base_url` e coloque a URL do worker:

   ```yaml
   backend:
     name: github
     repo: igorstutz/projeto-regenere
     branch: main
     base_url: https://sveltia-cms-auth.SEU-SUBDOMINIO.workers.dev
     auth_methods: [oauth, token]
   ```

   Note o `auth_methods`: hoje ele está como `[token]`, porque sem o Worker o
   botão "Entrar com GitHub" iria para o endpoint padrão do CMS
   (`https://api.netlify.com`), que não atende este site — o botão só daria
   erro. Ao configurar o Worker, libere `oauth` como acima.

### Entrar com token pessoal (o método ativo hoje)

Funciona sem nenhuma infraestrutura e serve tanto para testar quanto para uso
permanente por poucas pessoas:

1. Em https://projeto-regenere.com.br/admin/, clique em **Entrar usando token de
   acesso**. O painel abre o GitHub já com o formulário certo.
2. No GitHub, gere um **fine-grained personal access token** com:
   - *Repository access*: apenas `igorstutz/projeto-regenere`
   - *Permissions → Contents*: **Read and write**
   - *Expiration*: o prazo que preferir (ao expirar, basta gerar outro)
3. Copie o token e cole no painel. Ele fica guardado no navegador daquele
   computador — quem usa outro computador gera o seu.

### 3. Dar acesso aos editores

Quem edita precisa de conta no GitHub e de permissão **Write** no repositório
(*Settings → Collaborators*). O painel verifica isso no login: quem não é
colaborador recebe "Not a collaborator of the repository" e não entra.

> **Sobre a segurança do endereço /admin/**: a página do painel é pública, como em
> qualquer CMS baseado em Git — o que protege o conteúdo é o GitHub. Sem uma conta
> com permissão de escrita no repositório, ninguém altera nada, e o painel não
> guarda senhas nem dados de visitantes. A página não é indexada pelo Google
> (`noindex` + `robots.txt`).

---

## Uso diário

1. Acesse **projeto-regenere.com.br/admin/** e entre (hoje, com token pessoal).
2. Escolha a página no menu lateral, edite e clique em **Save**.
3. Em poucos minutos o site está no ar. O andamento aparece na aba **Actions** do
   repositório.

Boas práticas:

- **Texto alternativo em toda imagem** — é o que leitores de tela anunciam e o que
  o Google lê.
- Os campos de **SEO** (título e descrição) definem como a página aparece na
  busca. Título até ~60 caracteres, descrição até ~155.
- Para criar uma **nova experiência**, use a seção *Experiências → New*. O
  endereço da página é gerado a partir do nome e **não muda depois** — escolha
  bem. O campo *Ordem* controla a posição nas listagens.

### Editar sem publicar (opcional)

Para experimentar antes de publicar, o painel roda na máquina local com o site:

```bash
cd web
npm run dev
# abra http://localhost:3000/admin/index.html e escolha a pasta do projeto
```

(No servidor de desenvolvimento o endereço precisa incluir `index.html`; em
produção `/admin/` basta.)

Nesse modo o CMS grava direto nos arquivos locais, sem commits — você revisa em
`http://localhost:3000/` e decide o que enviar. Requer navegador baseado em
Chromium (Chrome, Edge ou Brave).

---

## Manutenção

**Ao mudar a estrutura do conteúdo** (novo campo em um JSON, novo bloco numa
página), declare o campo em `web/public/admin/config.yml` e rode:

```bash
npm run cms:check
```

Esse comando compara o painel com os arquivos de conteúdo e falha se algum campo
do JSON não estiver declarado. Isso importa porque **o CMS grava apenas o que está
no config**: um campo esquecido é apagado silenciosamente na primeira vez que
alguém salvar aquela página. A mesma verificação roda no GitHub Actions antes de
cada publicação.

**Marca do painel**: o nome na tela de login e na aba do navegador vem de
`app_title`, e o logo de `logo.src` — ambos em `config.yml`. O rodapé da tela de
login mantém um "Powered by Sveltia CMS", que o projeto não permite remover.

**Versão do CMS**: `web/public/admin/index.html` fixa a versão do Sveltia
(`@sveltia/cms@0.205.1`). Atualizar é trocar esse número — deliberadamente, e
testando o painel depois.

**Ícones disponíveis** nos campos de seleção: `users`, `store`, `repeat`, `leaf`,
`sparkles`, `network`, `trendingUp`, `mappin`, `target`, `clipboard`, `lightbulb`.
Novos ícones exigem alteração no código (`src/components/ui/icons.tsx` e o mapa da
página correspondente).
