import Permissao from "../models/Permissao";
import UsuarioPermissao from "../models/UsuarioPermissao";

class PermissaoController {
  async findAll(req, res) {
    try {
      const permissoes = await Permissao.findAll();
      return res.json(permissoes);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findAllPermissoesUsuario(req, res) {
    try {
      const permissoesDoUsuario = await UsuarioPermissao.findAll();
      return res.json(permissoesDoUsuario);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new PermissaoController();
