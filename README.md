# ServeRest API Test Suite

## Índice

- [Introdução](#introdução)
- [Requisitos](#requisitos)
- [Configuração do Ambiente](#Configuração do Ambiente de Desenvolvimento)
- [Estrutura do Repositório](#estrutura-do-repositório)
- [Como Executar os Testes](#como-executar-os-testes)
- [Exemplos de Resultados](#exemplos-de-resultados)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Wiki](https://gitlab.com/Douglash701/projeto-uol-compass/-/wikis/home)

## Introdução

![ServeRest](/assets/pixlr-image-generator-1c9895c5-70f0-47b7-9d04-4813ddfc3918.png)

# Introdução à API ServeRest

A API ServeRest é uma API RESTful desenvolvida para simular uma loja virtual, proporcionando um ambiente robusto e acessível para testar e desenvolver aplicações. Ela é projetada para atender a diversas necessidades de teste, desde a gestão de usuários e produtos até o gerenciamento de carrinhos de compra e processamento de pedidos.

## Principais Funcionalidades

- **Gerenciamento de Usuários**: Permite a criação, leitura, atualização e exclusão de usuários, facilitando o teste de funcionalidades relacionadas a perfis e permissões.
- **Gerenciamento de Produtos**: Oferece endpoints para adicionar, listar, atualizar e remover produtos, simulando a administração de um catálogo de itens.
- **Manipulação de Carrinhos de Compra**: Inclui funcionalidades para adicionar e remover produtos dos carrinhos, simulando o comportamento do cliente durante o processo de compra.
- **Processamento de Pedidos**: Permite criar e visualizar pedidos, refletindo o fluxo completo de uma transação em uma loja virtual.

## Benefícios da API ServeRest

- **Ambiente de Teste Realista**: Oferece um conjunto completo de funcionalidades para testar aplicações de e-commerce de maneira realista.
- **Facilidade de Uso**: Endpoints bem documentados e intuitivos, com uma estrutura que facilita a integração e testes.
- **Flexibilidade**: Ideal para desenvolvedores e testadores que buscam uma solução prática para validar e melhorar suas aplicações.

Para explorar todos os recursos da API e ver exemplos práticos, acesse a [Documentação Oficial da API ServeRest](https://serverest.dev).


![ServeRest API](/assets/pixlr-image-generator-4a18b198-b70f-45e6-a50b-8272f684477c.png)

## Requisitos

- **Node.js**: Versão 14 ou superior.
- **Postman**: Para importar e executar as coleções de testes.
- **Mocha**: Framework de teste para JavaScript.
- **Chai**: Biblioteca de asserções para Node.js.
- **Git**: Para clonar o repositório e gerenciar o código.

# Configuração do Ambiente de Desenvolvimento

Este guia fornece instruções para configurar o ambiente de desenvolvimento para projetos que utilizam VS Code, Node.js, Postman e Mocha e Chai.

## 1. Instalar o Visual Studio Code

1. **Baixar o Instalador:**
   - Acesse o site oficial do [Visual Studio Code](https://code.visualstudio.com/).
   - Clique em "Download for Windows" (ou o sistema operacional correspondente).

2. **Executar o Instalador:**
   - Abra o arquivo baixado e siga as instruções na tela.
   - Recomenda-se selecionar a opção "Adicionar ao PATH" durante a instalação.

3. **Iniciar o VS Code:**
   - Após a instalação, inicie o Visual Studio Code a partir do menu iniciar ou do atalho criado na área de trabalho.

## 2. Instalar o Node.js

1. **Baixar o Instalador:**
   - Acesse o site oficial do [Node.js](https://nodejs.org/).
   - Escolha a versão LTS (Long Term Support) e clique em "Download".

2. **Executar o Instalador:**
   - Abra o arquivo baixado e siga as instruções na tela.
   - Aceite os termos e selecione as opções padrão durante a instalação.

3. **Verificar a Instalação:**
   - Abra o terminal ou o prompt de comando e execute os seguintes comandos:
     ```bash
     node -v
     npm -v
     ```
   - Certifique-se de que ambos os comandos retornam versões, indicando que o Node.js e o npm estão instalados corretamente.

## 3. Instalar o Mocha e Chai

Para instalar o Mocha e o Chai, siga estas etapas:

. **Instalar o Mocha e o Chai:**
   - Com o terminal no diretório do projeto, execute:
     ```bash
     npm install --save-dev mocha chai
     ```

   - **Mocha:** [Documentação e Download](https://mochajs.org/)
   - **Chai:** [Documentação e Download](https://www.chaijs.com/)


# Instalação do K6 - Passo a Passo Completo

Este guia cobre a instalação do K6 em macOS, Windows e Linux.

## Pré-requisitos

- **Sistema Operacional Suportado**: Windows, macOS ou Linux
- **Gerenciador de Pacotes**: Dependendo do seu sistema, você precisará de:
  - Homebrew (macOS)
  - Chocolatey (Windows)
  - APT ou YUM (Linux)

---

## Passo 1: Instalação no macOS

### Usando Homebrew

1. Atualize o Homebrew:
   ```bash
   brew update

# Instalação do K6

## 1. Instalação no Windows

- **Baixe o Instalador**: Acesse a [página de lançamentos do K6 no GitHub](https://github.com/k6io/k6/releases) e baixe o instalador mais recente para Windows. O arquivo geralmente tem a extensão `.msi`.

- **Execute o Instalador**: Clique duas vezes no arquivo `.msi` baixado e siga as instruções do assistente de instalação.

- **Verifique a Instalação**:
  1. Abra o Prompt de Comando (cmd).
  2. Digite `k6 version` e pressione Enter. Isso deve exibir a versão do K6 instalada, confirmando que a instalação foi bem-sucedida.

## 2. Instalação no macOS

- **Usando o Homebrew**:
  1. Abra o Terminal.
  2. Se ainda não tiver o Homebrew instalado, você pode instalá-lo com o comando:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

- **Verifique a Instalação**:
  1. No Terminal, digite `k6 version` e pressione Enter. Você deve ver a versão do K6 instalada.

## 3. Instalação no Linux

- **Usando o Gerenciador de Pacotes**:
  1. Abra o Terminal.
  2. Para distribuições baseadas no Debian (como Ubuntu), você pode adicionar o repositório do K6 e instalar usando o comando:
     ```bash
     sudo apt update
     sudo apt install k6
     ```
  3. Para distribuições baseadas no Red Hat (como Fedora), use:
     ```bash
     sudo dnf install k6
     ```

- **Verifique a Instalação**:
  1. No Terminal, digite `k6 version` e pressione Enter para confirmar que o K6 foi instalado corretamente.

## Conclusão

Agora que o K6 está instalado, você pode começar a executar scripts de teste de carga para avaliar o desempenho da aplicação web. Consulte a [documentação oficial do K6](https://k6.io/docs/) para aprender mais sobre como escrever e executar testes.





## 4. Instalar o Postman

Para instalar o Postman, siga estas etapas:

1. **Baixar o Instalador:**
   - Acesse o site oficial do [Postman](https://www.postman.com/downloads/).
   - Escolha a versão apropriada para o seu sistema operacional (Windows, macOS ou Linux) e clique em "Download".

2. **Executar o Instalador:**
   - Abra o arquivo baixado e siga as instruções na tela para concluir a instalação.
   - Durante a instalação, você pode ser solicitado a fornecer permissões adicionais para concluir o processo.

3. **Iniciar o Postman:**
   - Após a instalação, inicie o Postman a partir do menu iniciar, da área de trabalho ou do local onde o aplicativo foi instalado.

4. **Configurar o Postman:**
   - **Importar a Coleção de Testes:**
     1. Abra o Postman.
     2. Vá para a aba **Collections** e clique em **Import**.
     3. Selecione o arquivo `ServeRest.postman_collection` incluído no repositório.

   - **Configurar os Ambientes do Postman:**
     1. Vá para a aba **Environments** e clique em **Import**.
     2. Selecione o arquivo `ServeRest.postman_collection` incluído no repositório.
     3. Configure as variáveis de ambiente conforme necessário, como a URL base da API.
     ## 5. Instalar o Git

Para instalar o Git, siga estas etapas:

1. **Baixar o Instalador:**
   - Acesse o site oficial do [Git](https://git-scm.com/).
   - Clique em "Download" para o seu sistema operacional (Windows, macOS ou Linux).

2. **Executar o Instalador:**
   - Abra o arquivo baixado e siga as instruções na tela para concluir a instalação.
   - Durante a instalação, você pode ser solicitado a selecionar várias opções. As configurações padrão geralmente funcionam bem.

3. **Verificar a Instalação:**
   - Após a instalação, abra o terminal ou o prompt de comando e execute:
     ```bash
     git --version
     ```
   - O comando deve retornar a versão do Git instalada, confirmando que a instalação foi bem-sucedida.

## 5. Clonar o Repositório

Para clonar o repositório do GitLab para sua máquina local, siga estas etapas:

1. **Abra o Terminal ou o Prompt de Comando:**
   - No Windows, você pode usar o Git Bash ou o Prompt de Comando.
   - No macOS ou Linux, você pode usar o Terminal.

2. **Navegue até o Diretório Desejado:**
   - Selecione o diretório onde deseja clonar o repositório. Por exemplo:
     ```bash
     cd /caminho/para/o/diretorio
     ```

3. **Clone o Repositório:**
   - Execute o seguinte comando para clonar o repositório:
     ```bash
     git clone git@gitlab.com:Douglash701/projeto-uol-compass.git
     ```
   - Isso criará um diretório chamado `projeto-uol-compass` com uma cópia local do repositório.

4. **Navegue até o Diretório Clonado:**
   - Após clonar o repositório, vá para o diretório do projeto:
     ```bash
     cd projeto-uol-compass
     ```


---

Este guia proporciona uma configuração básica e pode ser ajustado conforme as necessidades específicas do seu projeto. Se precisar de mais detalhes ou enfrentar problemas, consulte a [documentação oficial do VS Code](https://code.visualstudio.com/docs), [Node.js](https://nodejs.org/en/docs/), [Mocha](https://mochajs.org/), e [Chai](https://www.chaijs.com/).


## Estrutura do Repositório

# Mini-Projetos JavaScript

Esta pasta contém 8 mini-projetos desenvolvidos em JavaScript. Cada projeto é independente e tem seu próprio conjunto de funcionalidades.

- [exibir Propiedades](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mini-projeto%201/exibirPropiedades.js?ref_type=heads)
- [Fizbuzz](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mini-projeto%202/Fizbuzz.js?ref_type=heads)
- [maximo Entre Valaores](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mini-projeto%203/maximoEntreValaores.js?ref_type=heads)
- [media Nota](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mini-projeto%204/mediaNota.js?ref_type=heads)
- [Multiplos](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mini-projeto%205/Multiplos.js?ref_type=heads)
- [par ou Impar](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mini-projeto%206/parouImpar.js?ref_type=heads)
- [trocando Valores](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mini-projeto%207/trocandoValores.js?ref_type=heads)
- [verificar Velocidade](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mini-projeto%208/verificarVelocidade.js?ref_type=heads)

# Calculadora com Testes

Este projeto é uma calculadora com seus respectivos testes para garantir o funcionamento correto.

- [Código da Calculadora](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mocha-chai/src/Calculadora.js)
- [Testes da Calculadora](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/mocha-chai/test/calculadora.spec.js)

# Coleções do Postman

Aqui estão as coleções do Postman utilizadas para testar a API ServeRest.

- [Coleção de Testes da API ServeRest](https://gitlab.com/Douglash701/sprint1-desafio/-/blob/main/collection%20postman/ServeRest.postman_collection.json?ref_type=heads)

## Como Executar os Testes

Esta seção fornece instruções detalhadas sobre como executar os testes para a API ServeRest, tanto via Postman quanto via Mocha (CLI).

## . Executar Testes Exportados do Postman

 siga estas etapas:

### 1. Instalar o Postman

Se você ainda não instalou o Postman, siga as instruções na seção "Instalar o Postman" deste guia.

### 2. Importar Testes para o Postman

1. **Abrir o Postman:**
   - Inicie o Postman a partir do menu iniciar, da área de trabalho ou do local onde o aplicativo foi instalado.

2. **Importar a Coleção de Testes:**
   - Vá para a aba **Collections** no painel lateral esquerdo.
   - Clique em **Import** no canto superior esquerdo.
   - Selecione o arquivo `ServeRest.postman_collection` incluído no repositório.
   - Clique em **Open** para importar o arquivo.

3. **Importar o Ambiente:**
   - Vá para a aba **Environments** no painel lateral esquerdo.
   - Clique em **Import** no canto superior direito.
   - Selecione o arquivo `ServeRest.postman_collection` incluído no repositório.
   - Clique em **Open** para importar o arquivo.
   - Configure as variáveis de ambiente conforme necessário, como a URL base da API.

### 3. Executar Testes no Postman

1. **Selecionar a Coleção Importada:**
   - Na aba **Collections**, selecione a coleção que você importou.

2. **Escolher o Ambiente:**
   - No canto superior direito da interface do Postman, selecione o ambiente que você importou na lista suspensa de ambientes.

3. **Executar os Testes:**
   - Clique no botão **Run** (ícone de "play") ao lado da coleção.
   - Na janela que aparece, você pode configurar as opções de execução, como o número de iterações.
   - Clique em **Run** para iniciar a execução dos testes.

4. **Verificar os Resultados dos Testes:**
   - Após a execução, o Postman exibirá os resultados dos testes na aba **Runner**.
   - Revise a saída para verificar se todos os testes passaram ou se houve falhas. O Postman fornece um resumo detalhado dos resultados, incluindo estatísticas e erros, se houver.

### 4. Terminal

siga estas etapas:

1. **Certifique-se de que o Node.js está instalado.**
   - Se ainda não tiver o Node.js, instale-o seguindo as instruções na seção "Instalar o Node.js" deste guia.

2. **Executar os Testes com `npx`:**
   - No terminal, execute o seguinte comando para rodar os testes:
     ```bash
     npx serverest@latest
     ```

---

Este guia fornece instruções sobre como importar e executar testes do Postman tanto no Postman quanto via terminal usando `npx`. Se precisar de mais detalhes ou enfrentar problemas, consulte a [documentação oficial do Postman](https://www.postman.com/) e a [documentação do `serverest`](https://www.npmjs.com/package/serverest).

# Pasta Testes para K6 - API ServeRest

## Configuração
*Não está sendo utilizada no momento.*

## Resultados
*Armazena os resultados dos testes.*

## Scripts
- **login.js**: Testes para a rota de login
- **produto.js**: Testes para a rota de produto
- **usuario.js**: Testes para a rota de usuário
- **fluxos.js**: Testes para fluxos específicos

## Passos para Executar os Testes

1. **Navegue até a Pasta de Scripts**

   Abra o terminal e navegue até a pasta onde estão os scripts de teste:

   ```bash
   cd /caminho/para/Testes-para-K6-API-ServeRest/scripts


Substitua /caminho/para/ pelo caminho real onde a pasta está localizada.

Execute um Teste Específico

Para executar um teste específico, utilize o comando k6 run seguido do nome do arquivo do script. Por exemplo:

Para executar o teste de login:


k6 run rotaLogin/test_login.js

Para executar o teste de produto:

k6 run rotaProdutos/nome_do_script_deseja_testar.js

Para executar o teste de usuário:

k6 run rotaUsuario/nome_do_script_deseja_testar.js

Para executar os fluxos:

k6 run rotaFluxos/nome_do_script_deseja_testar.js

Armazenar Resultados dos Testes

Para armazenar os resultados em um arquivo, utilize a opção --out seguida do caminho do arquivo. Por exemplo:

Para salvar o resultado do teste de login em um arquivo login-results.json na pasta results:

k6 run rotaUsuario/criarUsuario.js --out json=results/criarUsuario-results.json

Repita esse comando para outros testes, alterando o nome do arquivo conforme necessário.

Analisar Métricas

Após a execução dos testes, você pode revisar as métricas diretamente no terminal ou analisar os arquivos JSON gerados. As métricas comuns incluem:

VUs (Virtual Users): Número de usuários virtuais simulados.
Duration: Tempo total de execução do teste.
Checks: Número de verificações bem-sucedidas e falhadas.
HTTP Requests: Número de requisições HTTP realizadas e seu tempo de resposta.
Para detalhes sobre as métricas e como interpretá-las, consulte a documentação oficial do K6.

Consultar a Documentação

Se você tiver dúvidas sobre métricas específicas ou precisar de informações adicionais sobre o K6, visite a documentação oficial do K6. Ela fornece uma visão detalhada sobre como usar a ferramenta, configurar testes e interpretar resultados.

# Passo a Passo para Executar Testes com Mocha e Chai

Este guia explica como configurar o ambiente e executar os testes para a calculadora usando Mocha e Chai.

## 1. Instalar o Node.js

Certifique-se de que o Node.js está instalado. Se não estiver, você pode instalar o Node.js seguindo estas etapas:

1. **Acessar o Site Oficial do Node.js:**
   - Vá para [Node.js](https://nodejs.org/).

2. **Baixar o Instalador:**
   - Selecione a versão recomendada para a maioria dos usuários.

3. **Executar o Instalador:**
   - Siga as instruções para concluir a instalação.

4. **Verificar a Instalação:**
   - Abra o terminal ou o prompt de comando e execute:
     ```bash
     node --version
     ```
   - O comando deve retornar a versão do Node.js instalada.

## 2. Configurar o Projeto

1. **Criar o Diretório do Projeto:**
   - No terminal, crie um novo diretório e navegue até ele:
     ```bash
     mkdir meu-projeto
     cd meu-projeto
     ```

2. **Inicializar o Projeto:**
   - Execute o comando para criar um novo `package.json`:
     ```bash
     npm init -y
     ```

3. **Adicionar o Código da Calculadora:**
   - Crie um arquivo chamado `calculadora.js` e adicione o seguinte código:
     ```javascript
     export default class Calculadora {
       // Soma
       static soma(a, b) {
           return a + b;
       }

       // Subtração
       static subtracao(a, b) {
           return a - b;
       }

       // Multiplicação
       static multiplicacao(a, b) {
           return a * b;
       }

       // Divisão
       static divisao(a, b) {
           if (b === 0) {
               throw new Error("Divisão por zero não é permitida.");
           }
           return a / b;
       }

       // Potência (a^b)
       static potencia(base, expoente) {
           let resultado = 1;
           for (let i = 0; i < expoente; i++) {
               resultado *= base;
           }
           return resultado;
       }

       // Raiz quadrada (aproximação)
       static raizQuadrada(numero) {
           if (numero < 0) {
               throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
           }
           let raiz = numero;
           let precisao = 0.00001;
           while ((raiz - (numero / raiz)) > precisao) {
               raiz = (raiz + (numero / raiz)) / 2;
           }
           return raiz;
       }
     }
     ```

4. **Adicionar Testes:**
   - Crie um diretório chamado `test` e adicione um arquivo chamado `calculadora.test.js` com o seguinte código:
     ```javascript
     import Calculadora from '../calculadora';
     import { expect } from 'chai';

     describe('Calculadora', function() {
       it('deve somar dois números corretamente', function() {
         expect(Calculadora.soma(2, 3)).to.equal(5);
       });

       it('deve subtrair dois números corretamente', function() {
         expect(Calculadora.subtracao(5, 3)).to.equal(2);
       });

       it('deve multiplicar dois números corretamente', function() {
         expect(Calculadora.multiplicacao(2, 3)).to.equal(6);
       });

       it('deve dividir dois números corretamente', function() {
         expect(Calculadora.divisao(6, 2)).to.equal(3);
       });

       it('deve calcular a potência corretamente', function() {
         expect(Calculadora.potencia(2, 3)).to.equal(8);
       });

       it('deve calcular a raiz quadrada corretamente', function() {
         expect(Calculadora.raizQuadrada(9)).to.be.closeTo(3, 0.00001);
       });

       it('deve lançar um erro para divisão por zero', function() {
         expect(() => Calculadora.divisao(5, 0)).to.throw("Divisão por zero não é permitida.");
       });

       it('deve lançar um erro para raiz quadrada de número negativo', function() {
         expect(() => Calculadora.raizQuadrada(-9)).to.throw("Não é possível calcular a raiz quadrada de um número negativo.");
       });
     });
     ```

## 3. Instalar as Dependências

1. **Instalar Mocha e Chai:**
   - No terminal, execute o comando:
     ```bash
     npm install --save-dev mocha chai
     ```

2. **Configurar o Script de Teste:**
   - No arquivo `package.json`, adicione o seguinte script na seção `scripts`:
     ```json
     "scripts": {
       "test": "mocha"
     }
     ```

## 4. Executar os Testes

1. **Rodar os Testes:**
   - No terminal, execute o comando:
     ```bash
     npm test
     ```

2. **Verificar os Resultados:**
   - O Mocha executará os testes e exibirá os resultados no terminal. Revise a saída para verificar se todos os testes passaram ou se houve falhas.

---

Este guia fornece instruções para configurar o ambiente, adicionar o código da calculadora, instalar as dependências e executar os testes usando Mocha e Chai. Se você tiver mais perguntas ou precisar de ajuda, consulte a [documentação oficial do Mocha](https://mochajs.org/) e [Chai](https://www.chaijs.com/).


### Resultados Via Mocha (CLI)

Ao executar os testes via linha de comando com Mocha, você verá uma saída no terminal semelhante ao exemplo abaixo:

bash
  Test Suite
    ✓ Teste 1: Verifica que a API retorna status 200 para a rota /produtos
    ✓ Teste 2: Verifica que a API retorna um produto específico pelo ID
    ✗ Teste 3: Verifica que a API falha ao adicionar um produto com dados inválidos
      - Expected 400 but got 500

  2 passing (50ms)
  1 failing
### Descrição do Exemplo

- **Testes Passados**: Indicados com um checkmark (`✓`).
- **Testes Falhados**: Indicados com uma cruz (`✗`), incluindo uma descrição do erro.
- **Resumo dos Testes**: Um resumo no final mostra o total de testes executados, quantos passaram e quantos falharam.
### Contribuição

**Descrição:**  
Este item representa uma contribuição significativa ao projeto, com a ajuda de Thiago, Leonardo, Lucas e Lincon. A colaboração entre a equipe envolveu a implementação de um sanamento de duvidas.

**Equipe de Contribuição:**

- **Thiago**
- **Leonardo**
- **Lucas**
- **Lincon**

## Agradecimentos

Gostaria de expressar minha gratidão ao ChatGPT da OpenAI, que forneceu suporte essencial na criação e otimização do `script_reutilizacao.js` de teste na definição das métricas para o projeto de testes da API pelo K6. O ChatGPT me ajudou a definir as melhores práticas.


**Notas:**

- Agradecimentos especiais a Thiago, Leonardo, Lucas e Lincon pela colaboração e apoio na realização desta contribuição. Sem a ajuda de vocês, este trabalho não teria sido possível.

### Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

**Sobre a Licença MIT:**

A Licença MIT é uma licença de software permissiva que é amplamente usada. Ela permite que você faça praticamente qualquer coisa com o software, desde que inclua o aviso de copyright e a declaração de licença original em todas as cópias ou partes significativas do software.

**Resumo da Licença MIT:**

- **Permissões:** Uso, cópia, modificação, fusão, publicação, distribuição, sublicenciamento e/ou venda do software são permitidos.
- **Exclusões:** O software é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. O autor não é responsável por quaisquer reivindicações, danos ou outras responsabilidades.
- **Aviso de Copyright:** É necessário incluir o aviso de copyright e a permissão em todas as cópias ou partes substanciais do software.

Para mais informações detalhadas, consulte o texto completo da licença no arquivo [LICENSE](./LICENSE).

### Contatos

Para dúvidas ou suporte, você pode me contatar através do LinkedIn:

- [Douglas Henrique Silva Lima](https://www.linkedin.com/in/douglas-henrique-silva-lima-b744a2280/)


[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)

