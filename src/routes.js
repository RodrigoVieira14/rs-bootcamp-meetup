import { Router } from 'express';

/**
 * Constrollers
 */

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

/**
 * Rotas
 */
const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Word Rodrigo!!' });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
