# Mapa Mental: Testes de API

## 1. Tipos de Erros

### 1.1 Erros de Cliente
- **400 Bad Request**
  - Requisição malformada
  - Dados inválidos
- **401 Unauthorized**
  - Falta de autenticação
  - Token inválido ou expirado
- **403 Forbidden**
  - Acesso não permitido
  - Permissões insuficientes
- **404 Not Found**
  - Recurso não encontrado
  - URL incorreta

### 1.2 Erros de Servidor
- **500 Internal Server Error**
  - Erro genérico no servidor
  - Exceções não tratadas
- **502 Bad Gateway**
  - Problemas de proxy ou gateway
  - Respostas inválidas do servidor upstream
- **503 Service Unavailable**
  - Servidor indisponível
  - Manutenção ou sobrecarga
- **504 Gateway Timeout**
  - Tempo de resposta excedido
  - Problemas de conectividade

### 1.3 Erros de Validação
- **Campos Obrigatórios Faltando**
- **Formato de Dados Inválido**
  - Strings em campos numéricos
  - Formato de data inválido
- **Tamanho de Dados Inválido**
  - Texto muito longo ou curto
  - Lista com itens insuficientes

## 2. Validações

### 2.1 Validações de Entrada
- **Tipos de Dados**
  - Inteiro, String, Booleano, etc.
- **Formato de Dados**
  - JSON, XML, etc.
- **Regras de Negócio**
  - Limites de valores
  - Formatos específicos (e.g., email)

### 2.2 Validações de Saída
- **Estrutura da Resposta**
  - Campos esperados
  - Tipos de dados corretos
- **Código de Status HTTP**
  - Correspondência ao tipo de resposta
- **Consistência dos Dados**
  - Dados coerentes com o estado do sistema

## 3. Boas Práticas

### 3.1 Automação de Testes
- **Testes Unitários**
  - Cobertura de funcionalidades isoladas
- **Testes de Integração**
  - Interação entre diferentes componentes
- **Testes de Regressão**
  - Verificação de funcionalidades após mudanças

### 3.2 Documentação
- **Swagger/OpenAPI**
  - Descrição das APIs
  - Exemplos de requisições e respostas
- **Postman Collections**
  - Coleções de testes automatizados
  - Execução e documentação centralizada

### 3.3 Segurança
- **Autenticação e Autorização**
  - Testar diferentes níveis de acesso
  - Garantir segurança dos tokens
- **Injeção de Dados**
  - Testar contra SQL Injection, XSS, etc.
- **Validação de Dados**
  - Sanitização e validação rigorosa

### 3.4 Performance
- **Testes de Carga**
  - Avaliar desempenho sob estresse
- **Testes de Escalabilidade**
  - Verificar comportamento com aumento de carga

### 3.5 Monitoramento e Logging
- **Logs Detalhados**
  - Registros de requisições e respostas
- **Monitoramento Contínuo**
  - Ferramentas de monitoramento de API
- **Alertas**
  - Notificações em caso de falhas

---

Espero que este mapa mental ajude a estruturar seu entendimento sobre os testes de API!
