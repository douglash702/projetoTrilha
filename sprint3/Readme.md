# Sprint 3 - Teste da API ServeRest

## Descrição do Projeto

Este projeto visa testar a API ServeRest, que simula uma loja virtual. O objetivo é garantir a qualidade e o funcionamento correto da API através de um planejamento de testes abrangente e a execução de testes manuais utilizando o Postman.

## Estrutura do Projeto

- **api/**: Contém coleções de requisições e testes do Postman.
- **docs/**: Contém documentação relevante, incluindo o plano de testes.
- **results/**: Contém relatórios de execução de testes e screenshots.
- **README.md**: Arquivo atual, descrevendo a Sprint 3 e o projeto.

## Requisitos

- Node.js
- Postman
- Conta no Jira
- Plugin Qality Test Management for Jira

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/sererest.git
### Importe a coleção de testes do Postman:

1. Abra o Postman.
2. Vá em "Import" e selecione o arquivo `api/ServeRest.postman_collection.json`.

### Planejamento de Testes

O planejamento de testes foi desenvolvido para cobrir os seguintes aspectos da API ServeRest:

- **Criação de Usuários**: Testes para criar novos usuários.
- **Autenticação**: Testes de login com diferentes tipos de usuários.
- **CRUD de Produtos**: Testes para criação, leitura, atualização e exclusão de produtos.
- **Pedidos**: Testes para criação e gerenciamento de pedidos.
- **Validações**: Testes para validar campos obrigatórios e restrições de dados.

### Exemplos de Cenários de Teste

- **Criar usuário válido**: Verifica se um usuário com dados válidos pode ser criado com sucesso.
- **Login com usuário válido**: Verifica se um usuário existente pode fazer login.
- **Atualizar produto inexistente**: Verifica se a tentativa de atualização de um produto que não existe retorna o erro apropriado.
- **Criar pedido com usuário não autenticado**: Verifica se um pedido não pode ser criado sem autenticação.

### Execução dos Testes

Os testes foram executados manualmente utilizando o Postman. Cada requisição foi configurada com seus respectivos testes automáticos para validar a resposta da API.

### Resultados dos Testes

Os resultados dos testes estão disponíveis na pasta `results/` e incluem:

- **Relatórios de Execução**: Arquivos HTML com o resumo dos testes executados.
- **Screenshots**: Imagens capturadas durante a execução dos testes.

### Issues Encontradas

Durante a execução dos testes, foram identificadas as seguintes issues:

- **[ISSUE-001]: Erro ao criar usuário com e-mail já existente.**
  - **Descrição**: A API não retorna o erro apropriado quando um usuário tenta se registrar com um e-mail já existente.
  - **Status**: Aberto

- **[ISSUE-002]: Falha na atualização de produtos.**
  - **Descrição**: A API permite a atualização de produtos com valores inválidos.
  - **Status**: Aberto

### Migração para Jira

A atividade de migração envolveu a criação de uma conta no Jira e a configuração de um board com as raias específicas. Todas as User Stories, Tasks, Testes e Issues foram migrados do GitLab para o Jira, utilizando o plugin Qality Test Management for Jira.

#### Passos para a Migração

1. **Criar Conta no Jira**:
   - Acesse Jira.
   - Crie uma nova conta ou utilize uma existente.

2. **Configurar o Board**:
   - Crie um novo board no Jira.
   - Configure raias específicas para User Stories, Tasks, Testes e Issues.

3. **Instalar Plugin**:
   - Instale o plugin Qality Test Management for Jira a partir do Atlassian Marketplace.

4. **Migrar Dados**:
   - Migre as User Stories, Tasks, Testes e Issues do GitLab para o Jira utilizando o plugin instalado.

### Contribuição

Para contribuir com este projeto:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-feature
