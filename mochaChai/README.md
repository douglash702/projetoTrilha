# Testes Funcionais da Calculadora com Mocha e Chai

Este projeto utiliza Mocha e Chai para automação de testes funcionais de uma calculadora JavaScript.

## Instalação e Execução

### Pré-requisitos

Certifique-se de ter o Node.js instalado. [Download e instalação](https://nodejs.org/).

### Clonando o Repositório

Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

### Dependências
Instale as dependências do projeto com:

```bash
npm install

### Executando os Testes
Para executar os testes funcionais da calculadora, use:
```bash
npm test

### Resultado
Os resultados dos testes funcionais serão exibidos no terminal. Relatórios HTML dos testes também podem ser gerados usando o Mochawesome, se configurado.

## Sobre o Projeto
### Dependências Utilizadas
- Mocha: Estrutura de testes
- Chai: Biblioteca de asserção
- Mochawesome: Geração de relatórios HTML
- Standard: Linter e formatador de código JS
- As dependências estão definidas no arquivo package.json.

# Estrutura de Diretórios
mochaChai/
 ├─ src/
 |   ├─ calculadora.js
 ├─ test/   
 |    ├─ calculadora.spec.js
 |