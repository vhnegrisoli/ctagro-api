import { Router } from "express";

import UsuarioController from "../controllers/UsuarioController";

const routes = new Router();

routes.get("/api/usuarios", UsuarioController.findAll);
routes.get("/api/usuarios/email/:email", UsuarioController.findByEmail);
routes.get("/api/usuarios/:id", UsuarioController.findById);
routes.post("/api/usuarios/", UsuarioController.save);
routes.delete("/api/usuarios/:id", UsuarioController.delete);

export default routes;
