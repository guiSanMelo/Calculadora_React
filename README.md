# 🧮 Calculadora React

Uma calculadora desenvolvida com **React.js**, criada como projeto de aprendizado inicial no framework — explorando componentização, gerenciamento de estado e estilização com `styled-components`.

---

## 📖 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar os conceitos fundamentais do React, como:

- Componentização e reuso de componentes
- Gerenciamento de estado com `useState`
- Manipulação de listas de operandos e operadores para cálculos encadeados
- Estilização com `styled-components`
- Estudo de estruturas de dados (ex: Fila) aplicadas em JavaScript

A calculadora suporta operações encadeadas (ex: `2 + 3 * 4 =`), processando os números e operadores acumulados sequencialmente ao pressionar `=`.

---

## ✨ Funcionalidades

- [x] Interface limpa e responsiva
- [x] Adição de dígitos (0–9)
- [x] Botão de limpar (`C`)
- [x] Operações básicas: soma (`+`), subtração (`-`), multiplicação (`x`) e divisão (`/`)
- [x] Potenciação (`^`) e radiciação (`√`)
- [x] Botão de igual (`=`) com suporte a operações encadeadas
- [x] Tratamento de divisão por zero
- [x] Componentes reutilizáveis (`Button` e `Input`)
- [ ] Exibir o histórico/expressão completa no display (em desenvolvimento, comentado no código)
- [ ] Tratamento de erros mais robusto (ex: exibir mensagem na tela em vez de `console.log`)
- [ ] Modo claro/escuro

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) (v18) — Hooks (`useState`)
- JavaScript (ES6+)
- [Styled Components](https://styled-components.com/)
- [Create React App](https://create-react-app.dev/)

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── button/
│   │   └── button.js          # Componente de botão (recebe label e onClick)
│   └── input/
│       └── index.js            # Componente de display/input da calculadora
├── data-structures/
│   ├── index.js
│   └── queye.js                 # Implementação de uma Fila (estrutura de dados)
├── styles/
│   ├── App.js                   # Estilos do layout principal (Container, Content, Row, Column)
│   ├── button.js                 # Estilos do botão
│   └── input.js                  # Estilos do display
├── App.js                        # Componente principal com a lógica da calculadora
├── global.js                     # Estilos globais (reset de margin/padding)
└── index.js                      # Ponto de entrada da aplicação React
```

---

## 🧠 Como funciona a lógica da calculadora

- `currentNumber`: número que está sendo digitado no momento.
- `operands`: lista de números já confirmados (ao escolher uma operação).
- `operation`: lista de operadores escolhidos (`+`, `-`, `*`, `/`, `^`, `√`), na ordem em que foram pressionados.
- Ao clicar em um operador, o número atual é empilhado em `operands` e o operador em `operation`, e o display é zerado para o próximo número.
- Ao clicar em `=` (`handleEquals`), o `currentNumber` é adicionado à lista de operandos e todas as operações acumuladas são resolvidas **da esquerda para a direita** (sem respeitar precedência matemática tradicional), retornando o resultado final com 4 casas decimais.
- O botão `C` limpa todo o estado, reiniciando a calculadora.

> ⚠️ **Observação:** por resolver as operações sequencialmente, expressões como `2 + 3 x 4` resultam em `20` (e não `14`), já que a multiplicação não tem precedência sobre a soma nesta versão.

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- Um gerenciador de pacotes: `npm` (vem com o Node.js) ou `yarn`

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/guiSanMelo/Calculadora_React.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd Calculadora_React
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Rode o projeto:

   ```bash
   npm start
   ```

5. Abra o navegador em [http://localhost:3000](http://localhost:3000) para visualizar a aplicação. A página será recarregada automaticamente a cada alteração no código.

### Outros scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia a aplicação em modo de desenvolvimento |
| `npm test` | Executa os testes (se houver) em modo interativo |
| `npm run build` | Gera a build de produção na pasta `build/` |


## 🤝 Contribuindo

Este é um projeto de estudo, mas sugestões e contribuições são sempre bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça o commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça o push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 👨‍💻 Autor

**Guilherme Santos de Melo**

Projeto desenvolvido como aprendizado inicial com React.

[![GitHub](https://img.shields.io/badge/GitHub-guiSanMelo-181717?style=flat&logo=github)](https://github.com/guiSanMelo)

---

Feito com ❤️ e muito café.