import { Router } from "express";

import UsuarioController from "../controllers/UsuarioController";
import PermissaoController from "../controllers/PermissaoController";
import AuthController from "../controllers/AuthController";
import CheckToken from "../config/auth/CheckToken";

const routes = new Router();

routes.get("/api/usuarios", CheckToken, UsuarioController.findAll);
routes.post("/api/usuarios", CheckToken, UsuarioController.save);
routes.get("/api/usuarios/:id", CheckToken, UsuarioController.findById);
routes.put("/api/usuarios/:id", CheckToken, UsuarioController.update);
routes.delete("/api/usuarios/:id", CheckToken, UsuarioController.delete);
routes.get(
  "/api/usuarios/email/:email",
  CheckToken,
  UsuarioController.findByEmail
);

routes.post("/api/auth/token", AuthController.auth);

routes.get("/api/permissoes", CheckToken, PermissaoController.findAll);
routes.get(
  "/api/permissoes-usuario",
  CheckToken,
  PermissaoController.findAllPermissoesUsuario
);

export default routes;
