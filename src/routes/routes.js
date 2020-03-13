import { Router } from 'express';

import UsuarioController from '../controllers/UsuarioController';

const routes = new Router();

routes.get('/', UsuarioController.findAll);
routes.get('/email/:email', UsuarioController.findByEmail);
routes.get('/:id', UsuarioController.findById);
routes.post('/', UsuarioController.save);

export default routes;
