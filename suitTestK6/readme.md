Projeto de Testes de Performance com K6
Este projeto tem como objetivo realizar testes de performance em diferentes rotas da API, utilizando K6 para executar testes de carga, smoke, soak, e spike stress. A estrutura está organizada de forma que cada rota possui seus próprios testes categorizados pelos tipos de teste.

Estrutura do Projeto


├── produtos.json
├── user.json
├── node_modules
│   ├── .package-lock.json
│   └── faker
│       ├── .eslintignore
│       ├── .eslintrc
│       ├── .gitattributes
│       ├── .travis.yml
│       ├── .versions
│       ├── package.json
│       └── Readme.md
│       
├── results
│   ├── loadResult
│   │   ├── deleteUserRelatorioDeCarga.html
│   │   ├── getCartRelatorioDeCarga.html
│   │   ├── getCartRelatorioDeSoak.html
│   │   ├── getProductRelatorioDeCarga.html
│   │   
│   ├── smokeResult
│   │   ├── deleteUserRelatorioDeSmoke.html
│   │   ├── getCartRelatorioDeSmoke.html
│   │   ├── getProductRelatorioDeSmoke.html
│   │   
│   ├── soakResult
│   │   ├── deleteUserRelatorioDeSoak.html
│   │   ├── getCartRelatorioDeSoak.html
│   │   ├── getProductRelatorioDeSoak.html
│   │   
│   └── spikeStressResult
│       ├── deleteUserRelatorioDeSpikeStress.html
│       └── getProductDeSpikeStress.html
│       
├── services
│   ├── baseRest.js
│   └── baseService.js
│   
├── support
│   ├── base
│   │   ├── baseChecks.js
│   │   ├── baseTest.js
│   │   ├── constants.js
│   │   └── report.js
│   └── config
│       └── environment.js
│       
└── tests
    ├── deleteUser
    │   ├── loadUserDel.js
    │   ├── smokeUserDel.js
    │   ├── soakUserDel.js
    │   └── spikeStressUserDel.js
    │   
    ├── getCart
    │   ├── loadCartGet.js
    │   ├── smokeCartGet.js
    │   ├── soakCartGet.js
    │   └── spikeStressCartGet.js
    │   
    ├── getProduct
    │   ├── loadProductGet.js
    │   ├── smokeProductGet.js
    │   ├── soakProductGet.js
    │   └── spikeStressProductGet.js
    │   
    └── postLogin
        ├── loadLoginPost.js
        ├── smokeLoginPost.js
        ├── soakLoginPost.js
        └── stressSpikeLoginPost.js

Descrição Geral das Pastas
produtos.json e user.json: Arquivos com dados estáticos para serem utilizados nos testes.
node_modules: Contém pacotes do projeto, como o Faker, utilizado para gerar dados dinâmicos.
results: Diretório onde os relatórios de cada tipo de teste são salvos, separados por carga, smoke, soak e spike stress.
services: Contém as classes base que realizam as requisições HTTP (baseRest.js e baseService.js).
support: Inclui arquivos de suporte para o projeto, como checks, configuração de ambiente e relatórios.
tests: Diretório principal que contém os scripts de teste divididos por funcionalidade (deleteUser, getCart, getProduct, postLogin) e por tipo de teste (load, smoke, soak, spike stress).
Tipos de Testes
Os testes estão divididos em 4 categorias:

Load Test: Avalia o desempenho da aplicação sob carga típica de usuários.
Smoke Test: Teste inicial para verificar a sanidade da rota antes de testes mais pesados.
Soak Test: Verifica a estabilidade da aplicação sob carga prolongada.
Spike Stress Test: Avalia a capacidade da aplicação de lidar com picos súbitos de tráfego.
Execução dos Testes
Para rodar os testes, siga os seguintes passos:

Instalar as dependências

Certifique-se de que o K6 está instalado na máquina. Para instalar o K6, execute:

choco install k6

Rodar os testes

A execução dos testes deve ser feita diretamente pelo terminal, dentro do diretório principal do projeto.

Testes de Carga (Load Test):
  k6 run tests/getProduct/loadProductGet.js
Testes de Smoke:
  k6 run tests/getProduct/smokeProductGet.js
Testes de Soak:
   k6 run tests/getProduct/soakProductGet.js
Testes de Spike Stress:
k6 run tests/getProduct/spikeStressProductGet.js
Relatórios

Após a execução dos testes, os relatórios em formato HTML serão gerados automaticamente na pasta results, conforme a estrutura:

loadResult: Relatórios de testes de carga.
smokeResult: Relatórios de testes de smoke.
soakResult: Relatórios de testes de soak.
spikeStressResult: Relatórios de testes de spike stress.
Para visualizar os relatórios, basta abrir o arquivo HTML correspondente em qualquer navegador.

Configurações e Variáveis de Ambiente
A configuração do ambiente pode ser ajustada no arquivo support/config/environment.js. Ele permite definir URLs, headers e outros parâmetros necessários para os testes.

Geração de Relatórios
Os relatórios são gerados usando o script report.js, que é importado nos testes. Ele coleta as métricas e resultados, formatando-os em um arquivo HTML para fácil visualização.

Considerações Finais
Certifique-se de ajustar os caminhos das rotas e dados conforme necessário no ambiente de testes. Este projeto oferece flexibilidade para adicionar novas rotas e tipos de testes à medida que a API evolui.