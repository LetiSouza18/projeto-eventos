# Projeto Backend - Sistema de Eventos
### API REST para gerenciamento de eventos, atividades e temas, permitindo criação, listagem, edição e remoção dessas entidades com regras específicas, como deleção em cascata e gerenciamento de relacionamentos. O projeto foi desenvolvido com Express.js, Node.js e o banco de dados utilizado foi o Postgree.

### 🚀 Frontend do projeto
Disponível em: https://github.com/LetiSouza18/frontend-projeto-livro

### 📋 Pré-requisitos
1 - Node.js instalado
2 - Banco de dados configurado (PostgreSQL)
3 - (Opcional) Docker para facilitar o ambiente do banco

### 🔧 Instalação
- Clone o repositório para sua máquina local: ```git clone URL_DO_REPOSITÓRIO cd NOME_DO_DIRETÓRIO ```
  
- Dentro do diretório do projeto, execute o seguinte comando para instalar todas as dependências necessárias: ``` npm install ```
  
- Configure o arquivo .env com as variáveis do banco de dados (exemplo):
  ``` DB_HOST=localhost
    DB_PORT=5432
    DB_USER=usuario
    DB_PASS=senha
    DB_NAME=nome_do_banco ```

### ⚙️ Executando os testes
- Inicie o banco de dados localmente ou via container Docker.
- 
- Para iniciar o servidor de desenvolvimento, execute: ``` npm run dev ```

### Funcionalidades principais
- CRUD para Eventos

- CRUD para Atividades e Atividades Únicas

- Gerenciamento de temas relacionados a atividades

- Regras de deleção:

- - Evento com deleção em cascata de atividades relacionadas

- - Atividade e Atividade Única removem seus relacionamentos com temas ao serem deletadas

### Estrutura do Projeto
- `src/entities` — Entidades do banco (Evento, Atividade, etc)

- `src/controllers` — Lógica das rotas REST

- `src/routes` — Definição dos endpoints

- `src/data-source.js` — Configuração do TypeORM

### 🛠️ Demonstração:

