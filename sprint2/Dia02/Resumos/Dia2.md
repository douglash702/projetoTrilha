# Mapa Mental: API REST, Testes Estáticos (Swagger) e Histórias de Usuário

## API REST
- **Definição**
  - API que segue os princípios da arquitetura REST (Representational State Transfer)
- **Princípios**
  - Stateless
  - Client-Server
  - Cacheable
  - Uniform Interface
  - Layered System
  - Code on Demand (opcional)
- **Operações HTTP**
  - GET
  - POST
  - PUT
  - DELETE
  - PATCH
- **Recursos**
  - Representados por URIs
  - Utilizam JSON ou XML

## Testes Estáticos (Swagger)
- **Swagger**
  - Ferramenta para design, construção, documentação e consumo de APIs REST
- **Componentes**
  - Swagger Editor: ferramenta de edição
  - Swagger UI: interface visual para documentação
  - Swagger Codegen: gerador de código para cliente e servidor
- **Vantagens**
  - Melhora a comunicação entre equipes
  - Facilita a compreensão da API
  - Garante conformidade com especificações
- **Testes Estáticos**
  - Análise do código sem execução
  - Verificação de conformidade com especificações
  - Detecção de erros de sintaxe e estilo

## Histórias de Usuário
- **Definição**
  - Descrição de uma funcionalidade do ponto de vista do usuário final
- **Estrutura**
  - "Como um [tipo de usuário], eu quero [funcionalidade] para que [benefício]."
- **Características**
  - Independente
  - Negociável
  - Valiosa
  - Estimável
  - Pequena
  - Testável
- **Exemplo**
  - "Como um cliente, eu quero poder visualizar o histórico de pedidos para acompanhar minhas compras."
- **Benefícios**
  - Alinhamento com necessidades do usuário
  - Facilita a comunicação entre stakeholders
  - Prioriza entregas de valor

## Conexões
- **API REST & Swagger**
  - Swagger documenta e testa APIs REST
  - Facilitam o desenvolvimento colaborativo
- **Histórias de Usuário & API REST**
  - Histórias de usuário definem funcionalidades a serem implementadas via API REST
- **Histórias de Usuário & Testes Estáticos**
  - Testes estáticos garantem que as implementações atendem às especificações definidas nas histórias de usuário
