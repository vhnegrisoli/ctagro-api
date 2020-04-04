import jwt from "jsonwebtoken";
import * as auth from "../config/auth/authKey";

import Usuario from "../models/Usuario";

class AuthController {
  async auth(req, res) {
    try {
      const { email, senha } = req.body;
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        return res
          .status(400)
          .json({ message: "O email " + email + " não foi encontrado." });
      }
      if (await usuario.validarSenha(senha)) {
        const { id, email, nome } = usuario;
        return res.json(
          jwt.sign({ authUser: { id, email, nome } }, auth.apiKey, {
            expiresIn: "1d"
          })
        );
      }
      return res.status(401).json({ message: "A senha está incorreta." });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new AuthController();
