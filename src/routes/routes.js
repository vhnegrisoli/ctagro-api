import { Router } from "express";

import UsuarioController from "../controllers/UsuarioController";
import PermissaoController from "../controllers/PermissaoController";
import AuthController from "../controllers/AuthController";
import CheckToken from "../config/auth/CheckToken";

const routes = new Router();

routes.post("/api/usuarios", UsuarioController.save);
routes.post("/api/auth/token", AuthController.auth);

routes.use(CheckToken);

routes.get("/api/usuarios", UsuarioController.findAll);
routes.get("/api/usuarios/:id", UsuarioController.findById);
routes.put("/api/usuarios/:id", UsuarioController.update);
routes.delete("/api/usuarios/:id", UsuarioController.delete);
routes.get("/api/usuarios/email/:email", UsuarioController.findByEmail);

routes.get("/api/permissoes", PermissaoController.findAll);
routes.get(
  "/api/permissoes-usuario",
  PermissaoController.findAllPermissoesUsuario
);

export default routes;
