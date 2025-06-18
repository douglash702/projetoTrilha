# 🧠 Mapa Mental: Dia 07 - Análise HTTP e API REST

## 📝 Tópicos Abordados

### 1. Análise HTTP
   - **Requisição HTTP**
     - Métodos: GET, POST, PUT, DELETE
     - Cabeçalhos (Headers)
     - Corpo (Body)
     - URL e Endpoints
   - **Resposta HTTP**
     - Códigos de Status: 200, 201, 400, 401, 404, 500
     - Cabeçalhos (Headers)
     - Corpo (Body)

### 2. API REST
   - **Princípios**
     - Stateless (Sem estado)
     - Arquitetura Cliente-Servidor
     - Interface Uniforme
     - Sistema em Camadas
     - Cacheável
     - Código sob Demanda (opcional)
   - **Componentes**
     - Recursos (Resources)
     - Endpoints
     - Métodos

### 3. API ServeRest
   - **Visão Geral**
     - Simula uma loja virtual
     - Fornece endpoints para diversos recursos

### 4. Rota de Usuários
   - **Endpoint: `/usuarios`**
     - **GET /usuarios**
       - Obter uma lista de usuários
       - Resposta: Array JSON de objetos de usuário
     - **GET /usuarios/{id}**
       - Obter um usuário específico pelo ID
       - Resposta: Objeto JSON do usuário
     - **POST /usuarios**
       - Criar um novo usuário
       - Corpo da Requisição: Objeto JSON com detalhes do usuário
       - Resposta: Objeto JSON do usuário criado
     - **PUT /usuarios/{id}**
       - Atualizar um usuário existente pelo ID
       - Corpo da Requisição: Objeto JSON com os novos detalhes do usuário
       - Resposta: Objeto JSON do usuário atualizado
     - **DELETE /usuarios/{id}**
       - Excluir um usuário específico pelo ID
       - Resposta: Código de status 200 (OK) ou 204 (Sem Conteúdo)

## 📊 Ferramentas Utilizadas
- **Postman**: Para enviar requisições HTTP e analisar respostas
- **Documentação do ServeRest**: Para entender os endpoints e seu uso

## 🗂️ Exemplos de Requisições e Respostas
- **GET /usuarios**
  ```json
  [
    {
      "id": "1",
      "nome": "Usuário 1",
      "email": "usuario1@exemplo.com",
      "senha": "senha123"
    },
    {
      "id": "2",
      "nome": "Usuário 2",
      "email": "usuario2@exemplo.com",
      "senha": "senha456"
    }
  ]
