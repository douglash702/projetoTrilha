# Exercício Prático: Exercitando NoSQL

## Consultas para Usuários

### Contar o Número de Registros Existentes
- Resultado: 16

### Alterar o Usuário "Teste Start" para "Teste Finish"
- Resultado:
  ```json
  {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  }

### Encontrar o Usuário com o Nome "Bruce Wayne"
- Resultado:
 {
  _id: "667481e8222a7dae662fbf58",
  nome: "Bruce Wayne",
  email: "brucewayne@gothan.com",
}

### Encontrar o Usuário com o E-mail "ghost_silva@fantasma.com"
- Resultado:
{
  _id: "66748216222a7dae662fbf84",
  nome: "Ghost Silva",
  email: "ghost_silva@fantasma.com",
}
### Deletar o Usuário com E-mail "peterparker@marvel.com" 
- Resultado: 
{
  acknowledged: true,
  deletedCount: 1,
}

# Consultas para Produtos

### Produtos com Descrição Vazia 
- Resultado 
[]

### Produtos com Preço "0"
- Resultado:
[
  {
    "nome": "adesivo",
    "categoria": "utilitários",
    "preco": 0,
    "descricao": "adesivo com precificação para produtos."
  },
  {
    "nome": "caneca",
    "categoria": "utilitários",
    "preco": 0,
    "descricao": "Caneca para café."
  }
]

### Produtos com o Preço Maior que "100.00"
- Resultado:
[
  {
    "nome": "monitor gamer",
    "categoria": "games",
    "preco": 1500,
    "descricao": "Monitor grande para jogar."
  },
  {
    "nome": "guarda-roupas lady bug",
    "categoria": "casa",
    "preco": 2500,
    "descricao": "Guarda-roupas gigante da Lady Bug."
  }
]

### Produtos com o Preço entre "1000.00" e "2000.00"
- Resultado:
[
  {
    "nome": "monitor gamer",
    "categoria": "games",
    "preco": 1500,
    "descricao": "Monitor grande para jogar."
  },
  {
    "nome": "guarda-roupas lady bug",
    "categoria": "casa",
    "preco": 2500,
    "descricao": "Guarda-roupas gigante da Lady Bug."
  },
  {
    "nome": "cama solteiro",
    "categoria": "casa",
    "preco": 1800,
    "descricao": "Cama box solteiro."
  }
]

### Produtos em que o Nome Contenha a Palavra "jogo"
- Resultado: 
[
  {
    "nome": "jogo batman",
    "categoria": "games",
    "preco": 150,
    "descricao": "Jogo do Batman para PC."
  },
  {
    "nome": "jogo tomb raider",
    "categoria": "games",
    "preco": 100,
    "descricao": "Jogo Tomb Raider para PC."
  },
  {
    "nome": "jogo spider-man",
    "categoria": "games",
    "preco": 200,
    "descricao": "Jogo Spider-man para PS4."
  },
  {
    "nome": "jogo pac-man",
    "categoria": "games",
    "preco": 180,
    "descricao": "Jogo Pac-man para Xbox One."
  }
]


> Este mapa mental organiza as consultas realizadas no exercício prático de NoSQL com MongoDB, destacando os resultados obtidos para cada operação.
