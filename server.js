const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/generate', async (req, res) => {
  const { userStory, acceptanceCriteria } = req.body;

  if (!userStory || !acceptanceCriteria) {
    return res.status(400).json({ error: 'User Story e Critérios de Aceite são obrigatórios.' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Você é um QA Sênior com mais de 10 anos de experiência em projetos críticos de software. Sua missão é analisar a User Story e os Critérios de Aceite fornecidos e produzir uma análise de qualidade profunda, detalhada e prática — como um QA Sênior real entregaria para o time.

---

USER STORY:
${userStory}

---

CRITÉRIOS DE ACEITE:
${acceptanceCriteria}

---

Produza a análise completa seguindo EXATAMENTE esta estrutura:

## 📋 1. ENTENDIMENTO DA USER STORY

Descreva com suas palavras o que foi entendido: contexto de negócio, ator principal, objetivo funcional e valor entregue ao usuário. Aponte também qualquer ambiguidade ou lacuna de informação identificada nos requisitos.

---

## ✅ 2. CASOS DE TESTE COMPLETOS

Para cada caso de teste, use EXATAMENTE este formato:

**CT-001 | [TÍTULO DO CASO] | Prioridade: ALTA | Tipo: Funcional**

| Campo | Descrição |
|-------|-----------|
| Pré-condições | ... |
| Dados de entrada | ... |
| Passos | 1. ... 2. ... 3. ... |
| Resultado Esperado | ... |
| Resultado Obtido | _(preencher na execução)_ |
| Observações | ... |

Cubra OBRIGATORIAMENTE todos estes tipos:
- Happy Path (fluxo principal bem-sucedido)
- Cenários Negativos (entradas inválidas, dados ausentes, formatos errados)
- Edge Cases (limites, valores extremos, comportamentos inesperados)
- Validações de Campo (obrigatoriedade, tamanho, formato, caracteres especiais)
- Comportamento em Falha (timeout, erro de servidor, perda de conexão)
- Regressão (funcionalidades adjacentes que podem ser impactadas)
- Regras de Negócio (cada regra mapeada em pelo menos um teste)

---

## ⚠️ 3. PONTOS CRÍTICOS DA USER STORY

Liste em ordem de criticidade os pontos que merecem atenção especial durante o desenvolvimento e os testes. Para cada ponto, explique por que é crítico e qual o impacto se não for tratado corretamente.

---

## 🔥 4. RISCOS E O QUE PODE DAR ERRADO

Para cada risco identificado, use este formato:

**Risco:** [Descrição do risco]
**Impacto:** Alto / Médio / Baixo
**Probabilidade:** Alta / Média / Baixa
**Área:** Técnico / Negócio / Integração / Segurança / Performance
**Sugestão de Mitigação:** [O que deve ser feito para prevenir ou reduzir o impacto]

---

## 📊 5. MAPEAMENTO DE COBERTURA DOS CRITÉRIOS DE ACEITE

| Critério de Aceite | Casos de Teste que cobrem | Status de Cobertura |
|--------------------|--------------------------|---------------------|
| CA-01: [texto do critério] | CT-001, CT-002 | ✅ Coberto |

Ao final, indique se há algum critério que ficou sem cobertura e por quê.

---

## 💡 6. RECOMENDAÇÕES DA IA (COMO SE FOSSE UM QA)

Escreva insights estratégicos: pontos cegos nos critérios de aceite, sugestões de melhorias nos requisitos, automação recomendada, tipos de testes complementares (performance, segurança, acessibilidade), e qualquer observação que agregue valor ao time.

---

Responda em português brasileiro. Seja técnico, específico e direto. Não use linguagem genérica.`;

    const result = await model.generateContent(prompt);
    const analysis = result.response.text();

    res.json({ analysis });
  } catch (error) {
    console.error('Erro na API do Gemini:', error);
    if (error.message && error.message.includes('API_KEY')) {
      res.status(401).json({ error: 'API Key inválida. Verifique seu arquivo .env.' });
    } else if (error.message && error.message.includes('quota')) {
      res.status(429).json({ error: 'Limite de requisições atingido. Aguarde alguns segundos.' });
    } else {
      res.status(500).json({ error: 'Erro ao gerar análise. Verifique o terminal para detalhes.' });
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 QA US rodando em: http://localhost:${PORT}`);
  console.log('📋 Abra o link acima no seu navegador para usar a ferramenta.\n');
});