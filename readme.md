# Projeto MyGastronomy
## Um cardápio de restaurante, que permite que o usuário se cadastre e faça pedidos online.

## Projeto com deploy na Azzure
- backend: https://mygastrobackend.azurewebsites.net/
- frontend: https://mygastrofrontend.azurewebsites.net/

## Se desejar baixar o projeto
- Depois de clonar, abra o backend e faça no terminal npm install + npm run dev.
- Depois de clonar, abra o frontend e faça no terminal npm install + npm run dev.

### Stacks:
- Backend: Nodejs com Express no Backend
- Banco de dados: MongoDB cloud
- Frontend: Reactjs com vite

## Users API

### Listar todos os usuários

- **Endpoint:** `GET /users`
- **Descrição:** Retorna a lista de todos os usuários cadastrados.
- **Resposta esperada:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "body": [
      {
        "id": "1",
        "name": "João Silva",
        "email": "joao@email.com"
      },
      {
        "id": "2",
        "name": "Maria Oliveira",
        "email": "maria@email.com"
      }
      // ...outros usuários
    ]
  }

###  Deletar um usuário

- **Endpoint:** `DELETE /users/:id`
- **Parâmetros de URL:**
  - `id` (string): ID do usuário
- **Descrição:** Deleta um usuário pelo ID.
- **Resposta esperada:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "body": { "message": "Usuário deletado com sucesso." }
  }
  
###  Atualizar um usuário

- **Endpoint:** `PUT /users/:id`
- **Parâmetros de URL:**
  - `id` (string): ID do usuário a ser atualizado
- **Body (JSON):**
  ```json
  {
    "name": "Novo Nome",
    "email": "novo@email.com"
  }

## Plates API

###  Listar todos os pratos

- **Endpoint:** `GET /plates`
- **Descrição:** Retorna uma lista com todos os pratos disponíveis.
- **Resposta esperada:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "body": [
      {
        "id": "1",
        "name": "Spaghetti Carbonara",
        "price": 29.9,
        "category": "Massas"
      },
      {
        "id": "2",
        "name": "Feijoada",
        "price": 34.9,
        "category": "Brasileira"
      }
      // ...outros pratos
    ]
  }

### Listar pratos disponíveis

- **Endpoint:** `GET /plates/availables`
- **Descrição:** Retorna apenas os pratos que estão atualmente disponíveis para pedido.
- **Resposta esperada:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "body": [
      {
        "id": "1",
        "name": "Spaghetti Carbonara",
        "price": 29.9,
        "category": "Massas",
        "available": true
      },
      {
        "id": "3",
        "name": "Salada Caesar",
        "price": 19.9,
        "category": "Saladas",
        "available": true
      }
      // ...outros pratos disponíveis
    ]
  }

### Cadastrar um novo prato

- **Endpoint:** `POST /plates`
- **Descrição:** Cadastra um novo prato no sistema com as informações fornecidas.
- **Body (JSON):**
  ```json
  {
    "name": "Lasanha de Frango",
    "price": 32.5,
    "category": "Massas",
    "available": true
  }

### Deletar um prato

- **Endpoint:** `DELETE /plates/:id`
- **Parâmetros de URL:**
  - `id` (string): ID do prato a ser deletado
- **Descrição:** Remove um prato do sistema com base no ID fornecido.
- **Resposta esperada:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "body": {
      "message": "Prato deletado com sucesso."
    }
  }

### Atualizar um prato

- **Endpoint:** `PUT /plates/:id`
- **Parâmetros de URL:**
  - `id` (string): ID do prato a ser atualizado
- **Body (JSON):**
  ```json
  {
    "name": "Nome atualizado do prato",
    "price": 35.0,
    "category": "Categoria atualizada",
    "available": true
  }

## Pedidos API

### Listar todos os pedidos

- **Endpoint:** `GET /orders`
- **Descrição:** Retorna a lista de todos os pedidos.
- **Resposta esperada:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "body": [ /* lista de pedidos */ ]
  }

### Listar pedidos por ID de usuário

- **Endpoint:** `GET /orders/userorders/:id`
- **Parâmetros de URL:**
  - `id` (string): ID do usuário
- **Descrição:** Retorna todos os pedidos feitos por um usuário específico.
- **Resposta esperada:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "body": [ /* pedidos do usuário */ ]
  }

### Criar um novo pedido

- **Endpoint:** `POST /orders`
- **Descrição:** Cria um novo pedido com os dados fornecidos.
- **Body (JSON):**
  ```json
  {
    /* dados do pedido */
  }

### Deletar um pedido

- **Endpoint:** `DELETE /orders/:id`
- **Parâmetros de URL:**
  - `id` (string): ID do pedido a ser deletado
- **Descrição:** Remove um pedido pelo ID informado.
- **Resposta esperada:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "body": {
      "message": "Pedido deletado com sucesso."
    }
  }

###  Atualizar um pedido

- **Endpoint:** `PUT /orders/:id`
- **Parâmetros de URL:**
  - `id` (string): ID do pedido a ser atualizado
- **Body (JSON):**
  ```json
  {
    /* novos dados do pedido */
  }
