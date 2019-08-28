##ESTRUTURA DA APLICAÇÂO
- src
  - app
    - controllers
    - models
    - middlewares
  - config
  - database
    -migrations
  * app.js
  * routes.js
  * server.js
* package.json
* README.md
* yarn.lock
* nodemon.json
* .prettierrc
* .eslintrc.json

# HISTÓRICO DA APLICAÇÃO

## Configuração padrão dos app

// criar nosso pacote de extensões package.json
  - yarn init -y

//instalação do framework express
  - yarn add express


// iniciando a aplicação no app.js, importando o express .Definindo os metodos middlewares.
  - configurando os middlewares para receber requisições em json
  - configurando as routes importando as routas do arquivo de rotas
  - chamar as funções nas routes e middlewares para o constructor para iniciar-las

// configurando o servidor no arquivo server.js
  - instanciar a class App e configurar a porta da aplicação

// criando as rotas, importando o {ROUTER} do express

// instalando o sucrase, para usar as novas funcionalidades do javascript
// instalando o nodemon, detecta se a alguma alteração e renicia o servidor
  - yarn add sucrase nodemon -D
  - trocar os requires e module.exportes por import from e export default respetivamentes
  - configurar o package.json para rodar a aplicação: Criar o "dev" no script chamando o nodemon e o arquivo de server
  - criar um arquivo nodemon.json, para chamar o surcase-node


// configurar o eslint, prettier e editor config: Padronizar o codigo
  - Adciona a extensão
    - yarn add eslint -D
    - configurar a extensão eslint;
      - yarn eslint --init
        - to check syntax, find problems, and enforce code estyle
        - Javascript modules (import/export)
        - None of these
        - Node *
        - Use popular
        - Airbnb
        - Javascript
    - configurar o arquivo eslintrc.js
    - yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
    - criar um arquivo .prettierrc para configurar algumas exceções
    - criar arquivo .jshintrc para tirar os erros de es6
    - gerar o arquivo editorconfig (aperta o botão direito e gerar o arquivo na raiz do projeto), padronizar os editores de texto


// configurando o sequelize: É um ORM (abstração do banco de dados) nodejs para o banco dados. Não precisa usar o sql, apenas codigo javascript.
  - precisa do models e controllers criados
  - instalando a dependencia sequelize
  - yarn add sequelize
  - yarn add sequelize-cli -D // interface linha de comando, ajuda a criar as migrations
  - criar um arquivo .sequelizerc // expotar os caminhos de models, controllers, migrations, database
  - instalar dependencias para usar o dialec na configuração do banco de dados
  - yarn add pg pg-hstore


## ------------------------------------------------------

## PASSO A PASSO

// criando uma migration
  - yarn sequelize migration:create --name=create-users
  - configurar a migrations
  - subir as migrations
  - yarn sequelize db:migrate

// criando as models
  - importar o sequelize nas models
  - inicialize a class
  - acrescentar as colunas que serão preenchidas pelo usuario. Tirar as colunas primarykey..
  - funcao super.init
    - primeiro parametro: os campos da tabela
    - segundo:

// criar a conexão com o banco de dados
  -- database/index.js
  - tem que ser importado os models para manipular o bd
  - percorrer o array de models passsando a conexão
  - tem que importar o database/index.js no app.js

// criando o controller
  - importar as model
  - fazer o metodo e chamar o controler nas rotas


