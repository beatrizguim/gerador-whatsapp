# Gerador de Link para WhatsApp

Uma aplicação web moderna e responsiva que permite criar links personalizados do WhatsApp com mensagens pré-preenchidas. Desenvolvida para a RD Station, esta ferramenta facilita a geração de leads e melhora a comunicação entre empresas e clientes.

Design: [Figma - Teste Dev - Ferramenta de Gerador Link Whatsapp](https://www.figma.com/design/xGDGZWPJ5mjH7P8ehBUV70/-Teste-Dev--Ferramenta-de-Gerador-Link-Whatsapp?node-id=4540-3726&t=S6cppLaFtq7vYbUX-1)

# Tecnologias Utilizadas

- **Next.js 16.0.2** - Framework React com App Router
- **React 19.2.0** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first
- **CSS Custom** - Estilos personalizados para design específico

# Requisitos

## Campos do Formulário

### Obrigatórios:

- Número de WhatsApp - Máscara `(99) 99999-9999` (aceita 10 ou 11 dígitos)
- Email - Validação de formato de email

### Opcionais:

- Mensagem padrão - Campo de texto livre
- Cargo - Select com 13 opções:
  - Sócio(a) / CEO / Proprietário(a)
  - Diretor(a) de Vendas
  - Diretor(a) de Marketing
  - Diretor(a) Outras Áreas
  - Gerente de Marketing
  - Gerente de Vendas
  - Coordenador(a)/Supervisor(a) de Marketing
  - Coordenador(a)/Supervisor(a) de Vendas
  - Analista/Assistente de Marketing
  - Analista/Assistente de Vendas
  - Vendedor(a) / Executivo(a) de Contas
  - Estudante
  - Outros Cargos

## Link Gerado

O link é gerado no formato: https://wa.me/55XXXXXXXXXX?text=Mensagem%20Formatada

Onde:

- `55` é o código do país (Brasil)
- `XXXXXXXXXX` é o número de telefone (10 ou 11 dígitos)
- `text` contém a mensagem pré-preenchida (URL encoded)

## Integração

Os dados do formulário são enviados para: https://hooks.zapier.com/hooks/catch/13309391/uie4g8v/

# Estrutura do Projeto

gerador-whatsapp/
├── app/
│ ├── globals.css # Estilos globais e componentes
│ ├── layout.tsx # Layout raiz com metadados
│ └── page.tsx # Página principal (roteamento)
├── components/
│ ├── layout/
│ │ ├── Header.tsx # Cabeçalho da página
│ │ ├── Footer.tsx # Rodapé da página
│ │ └── PageLayout.tsx # Layout wrapper
│ ├── WhatsAppForm.tsx # Formulário principal
│ ├── WhatsAppResult.tsx # Página de resultado
│ ├── FeaturesSection.tsx # Seção de funcionalidades
│ ├── CTASection.tsx # Seção de chamada para ação
│ ├── TipsSection.tsx # Seção de dicas
│ ├── ExamplesSection.tsx # Seção de exemplos
│ └── FAQSection.tsx # Seção de perguntas frequentes
├── constants/
│ └── positions.ts # Lista de cargos disponíveis
├── lib/
│ └── utils.ts # Funções utilitárias (validação, formatação)
├── types/
│ └── index.ts # Definições de tipos TypeScript
└── public/ # Arquivos estáticos (imagens, ícones)

# Como Executar

## Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador
