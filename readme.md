# Para rodar o projeto
- clonar o repositório, rodar no vscode ou outra IDE.
- o projeto está dividido em Backend e Frontend.
- Depois de clonar, abra o backend e faça no terminal npm install + npm run dev.
- Depois de clonar, abra o frontend e faça no terminal npm install + npm run dev.
- Realizar cadastro no frontend na página http://localhost:5173/auth
- Depois pode adicionar pratos e fechar o pedido

# Resumo BackEnd

- `src/index.js`: É o ponto de entrada da aplicação backend. Normalmente, inicializa o servidor, configura middlewares e importa as rotas principais.

- `src/auth/auth.js`: Responsável pela autenticação. Geralmente contém funções para login, verificação de tokens JWT, e proteção de rotas.

- `src/controllers/orders.js`, `src/controllers/plates.js`, `src/controllers/users.js`: Controladores que recebem as requisições das rotas, processam a lógica de negócio e retornam respostas. Cada um lida com uma entidade específica (pedidos, pratos, usuários).

- `src/data/platesData.json`: Arquivo JSON que provavelmente armazena dados estáticos ou de exemplo sobre pratos.

- `src/database/mongo.js`: Faz a configuração e conexão com o banco de dados MongoDB.

- `src/helpers/httpResponse.js`: Contém funções utilitárias para padronizar as respostas HTTP da API.

- `src/routes/orders.js`, `src/routes/plates.js`, `src/routes/users.js`: Definem as rotas da API para pedidos, pratos e usuários, respectivamente. Cada rota chama o controlador correspondente.

- `src/services/orders.js`, `src/services/plates.js`, `src/services/users.js`: Serviços que implementam a lógica de negócio e interagem com o banco de dados ou outras APIs, sendo utilizados pelos controladores.

Esses arquivos juntos estruturam uma API Node.js organizada em camadas (rotas, controladores, serviços, helpers e dados).

# Resumo FrontEnd

- `index.html`: Arquivo HTML principal carregado pelo Vite, serve como base para o React renderizar a aplicação.
- `package.json`: Gerencia dependências, scripts e configurações do projeto npm.
- `vite.config.js`: Configuração do Vite, define como o projeto é construído e servido.

**Pasta `public/`**  
Arquivos estáticos acessíveis diretamente pelo navegador.
- `imgs/`: Imagens usadas na aplicação.
  - `logo.png`: Logo do projeto.
  - `homepage/`: Imagens relacionadas à página inicial.
  - `plates/`: Imagens dos pratos exibidos na aplicação.

**Pasta `src/`**  
Código-fonte principal da aplicação.
- `App.jsx`: Componente principal, geralmente define rotas e layout base.
- `main.jsx`: Ponto de entrada do React, renderiza o `App.jsx` no DOM.
- `index.css`: Estilos globais da aplicação.

**Pasta `components/`**  
Componentes reutilizáveis:
- `confirmOrderPopup/`: Popup de confirmação de pedido.
- `footer/`: Rodapé do site.
- `navbar/`: Barra de navegação.
- `plateCard/`: Card de exibição de prato.
- `platePopup/`: Popup com detalhes do prato.
Cada subpasta tem um `.jsx` (componente) e um `.module.css` (estilo modular).

**Pasta `contexts/`**  
- `useCartContext.jsx`: Contexto React para gerenciar o estado do carrinho de compras.

**Pasta `pages/`**  
Cada subpasta representa uma página da aplicação:
- `auth/`: Página de autenticação (login/cadastro).
- `cart/`: Página do carrinho.
- `home/`: Página inicial.
- `loading/`: Tela de carregamento.
- `plates/`: Página de listagem de pratos.
- `profile/`: Página de perfil do usuário.
Cada página tem seu componente (`page.jsx`) e estilos próprios (`page.module.css`).

**Pasta `services/`**  
Funções para comunicação com backend/API:
- `auth.jsx`: Serviços de autenticação.
- `order.jsx`: Serviços de pedidos.
- `plates.jsx`: Serviços relacionados aos pratos.

Essa estrutura separa bem responsabilidades, facilita manutenção e escalabilidade do projeto.
