# 🔍 QA US - Análise de User Stories com IA

<div align="center">

![QA US Banner](https://img.shields.io/badge/QA%20US-Análise%20Sênior%20com%20IA-6C3FC5?style=for-the-badge&logo=google&logoColor=white)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.19-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![Gemini](https://img.shields.io/badge/Google%20Gemini-2.0%20Flash-4285F4?style=flat-square&logo=google&logoColor=white)](https://aistudio.google.com)
[![License](https://img.shields.io/badge/License-MIT-00C49A?style=flat-square)](LICENSE)

**Cole uma User Story. Receba uma análise completa de nível QA Sênior. Exporte em PDF.**

[✨ Como usar](#-como-usar) · [🚀 Instalação](#-instalação) · [📄 O que é gerado](#-o-que-é-gerado) · [🛠️ Stack](#%EF%B8%8F-stack)

</div>

---

## 📌 Sobre o projeto

O **TESTE GENERATOR** é uma ferramenta web que usa inteligência artificial (Google Gemini) para gerar análises de qualidade profundas a partir de **User Stories** e **Critérios de Aceite**.

Em vez de montar os casos de teste manualmente do zero, você cola a US, cola os critérios e recebe em segundos uma análise estruturada como um QA real entregaria: com casos de teste, mapeamento de cobertura, riscos, pontos críticos e recomendações estratégicas, tudo exportável em PDF com identidade visual profissional.

> Desenvolvido por **Luiza Nicácio** — Analista de Teste.

---

## 📄 O que é gerado

Para cada análise, a ferramenta entrega **6 seções completas**:

| # | Seção | O que contém |
|---|-------|-------------|
| 1 | 📋 **Entendimento da User Story** | Contexto de negócio, ator principal, objetivo funcional e lacunas identificadas nos requisitos |
| 2 | ✅ **Casos de Teste Completos** | Happy Path, Negativos, Edge Cases, Validações de Campo, Falhas, Regressão e Regras de Negócio |
| 3 | ⚠️ **Pontos Críticos** | Lista ordenada por criticidade com impacto de cada ponto se não tratado |
| 4 | 🔥 **Riscos e o que pode dar errado** | Impacto, probabilidade, área e sugestão de mitigação para cada risco |
| 5 | 📊 **Mapeamento de Cobertura** | Cada Critério de Aceite mapeado para seus casos de teste, com status de cobertura |
| 6 | 💡 **Recomendações do QA Sênior** | Insights estratégicos, automação recomendada e testes complementares |

---

## ✨ Como usar

**1.** Abra a ferramenta em `http://localhost:3000`

**2.** Cole sua **User Story** no campo da esquerda:
```
Como usuário cadastrado,
Quero fazer login com meu e-mail e senha,
Para acessar minha conta na plataforma.
```

**3.** Cole os **Critérios de Aceite** no campo da direita:
```
- O e-mail deve estar no formato correto
- A senha deve ter no mínimo 8 caracteres
- Após 3 tentativas erradas, bloquear a conta por 15 minutos
- Exibir mensagem de erro clara para credenciais inválidas
```

**4.** Clique em **✨ Gerar Análise QA Sênior** e aguarde de 20 a 60 segundos

**5.** Clique em **🖨️ Salvar como PDF** para exportar — o arquivo será salvo como `QA-US_DDMMAAAA.pdf`

> ⚠️ **Importante:** na janela de impressão, ative **"Gráficos de fundo"** para o PDF sair com as cores e formatação completa.

---

## 🚀 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org) versão 18 ou superior
- API Key do Google Gemini — gratuita em [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/luizanicaciodm/teste-generator.git
cd qa-us

# 2. Instale as dependências
npm install

# 3. Configure sua API Key
cp .env.example .env
# Abra o arquivo .env e substitua pela sua chave real:
# GEMINI_API_KEY=SUA_CHAVE_AQUI

# 4. Inicie o servidor
npm start
```

Acesse **http://localhost:3000** no navegador. Pronto! 🎉

---

## 🛠️ Stack

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **Node.js** | 18+ | Runtime do servidor |
| **Express** | 4.19 | Servidor HTTP |
| **@google/generative-ai** | 0.21 | SDK do Google Gemini |
| **dotenv** | 16.4 | Leitura de variáveis de ambiente |
| **Marked.js** | CDN | Renderização de Markdown no frontend |

---

## 📁 Estrutura do projeto

```
qa-us/
├── public/
│   └── index.html        # Interface visual + estilos de impressão PDF
├── server.js             # Servidor Express + integração com Gemini API
├── package.json          # Dependências e scripts
├── .env.example          # Modelo de configuração (seguro para commitar)
├── .env                  # ⚠️ Sua API Key — NUNCA commitar
├── .gitignore            # Proteção do .env e node_modules
└── README.md             # Este arquivo
```

---

## 🔒 Segurança

- A **API Key fica exclusivamente no servidor** (arquivo `.env`), nunca exposta no frontend ou no código
- O arquivo `.env` está listado no `.gitignore` e **jamais deve ser enviado ao GitHub**
- O modelo usado é o `gemini-2.0-flash`, sem armazenamento de dados entre sessões

---

## 👩‍💻 Sobre a autora

**Luiza Nicácio**  
Analista de Teste  

[LinkedIn](https://www.linkedin.com/in/luizanicacio)


---

## 📜 Licença

Este projeto está sob a licença [MIT](LICENSE) — fique à vontade para usar, adaptar e evoluir.

---

<div align="center">
