# Sistema de Gestão para Barbearias (SaaS Multi-tenant)

Este é um projeto **Next.js 16** focado em gerenciamento de barbearias, utilizando uma arquitetura multi-tenant onde diversas barbearias podem gerenciar seus agendamentos, serviços e profissionais em uma única plataforma.

## 🚀 Tecnologias Utilizadas

O projeto utiliza uma stack moderna e robusta:

- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) (componentes baseados em Radix UI)
- **Banco de Dados & ORM**: [PostgreSQL](https://www.postgresql.org/), [Prisma](https://www.prisma.io/)
- **Autenticação**: [NextAuth.js v5](https://authjs.dev/)
- **Pagamentos**: Integração prevista com [Stripe](https://stripe.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Fontes**: DM Serif Display & DM Sans (Google Fonts)

## ✨ Funcionalidades Principais

- **Multi-tenancy**: Suporte para múltiplas barbearias (tenants) com dados isolados.
- **Agendamento Online**: Clientes podem agendar horários com base na disponibilidade dos barbeiros.
- **Gestão de Serviços**: Cadastro de serviços com preços e duração.
- **Gestão de Equipe**: Cadastro de barbeiros e definição de horários de trabalho.
- **Painel Administrativo**: Dashboard para gestão do negócio.
- **Autenticação Segura**: Login social e por credenciais.

## 📂 Estrutura do Projeto

A estrutura de pastas segue o padrão do Next.js App Router:

```bash
src/
├── app/
│   ├── (auth)/          # Rotas de autenticação (login, register)
│   ├── (dashboard)/     # Painel administrativo (protegido)
│   ├── (marketing)/     # Landing page e páginas públicas
│   ├── api/             # Rotas de API (Next.js API Handler)
│   └── shops/           # Rotas dinâmicas para as barbearias
├── components/          # Componentes Reutilizáveis (UI)
├── lib/                 # Utilitários e configurações (prisma, utils)
└── ...
```

## 🛠️ Configuração e Instalação

### Pré-requisitos

- Node.js (versão 20 ou superior recomendada)
- PostgreSQL (local ou hospedado, ex: Supabase, Neon)

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/barbearia-app.git
   cd barbearia-app
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configure as Variáveis de Ambiente:**

   Crie um arquivo `.env` na raiz do projeto baseando-se no `.env.example` (se existir) ou adicione as chaves necessárias:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/barbearia?schema=public"
   AUTH_SECRET="sua_chave_secreta_aqui" # Gere com: npx auth secret
   # Adicione outras chaves conforme necessário (Stripe, Google Auth, etc.)
   ```

4. **Configure o Banco de Dados:**

   Execute as migrações do Prisma para criar as tabelas no banco de dados:

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Inicie o Servidor de Desenvolvimento:**

   ```bash
   npm run dev
   ```

   O projeto estará rodando em [http://localhost:3000](http://localhost:3000).

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.
