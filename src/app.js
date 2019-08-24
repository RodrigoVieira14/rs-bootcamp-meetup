import express from 'express';

import routes from './routes';

class App {
  constructor() {
    // iniciando o express
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // configura o app para receber as requisições em json
    this.server.use(express.json());
  }

  routes() {
    // configura as  rotas extanciando elas do arquivo routes
    this.server.use(routes);
  }
}

export default new App().server;
