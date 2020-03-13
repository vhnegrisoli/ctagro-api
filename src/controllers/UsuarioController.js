import Usuario from '../models/Usuario';

class UsuarioController {
  async save(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const usuario = await Usuario.findAll({ where: { email } });
      if (usuario) {
        return res.status(400).json({ message: 'O email já está cadastrado para um usuário.' });
      }

      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha,
        data_cadastro: Date(),
      });
      return res.json(novoUsuario);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findByPk(id);
      return res.json(usuario);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findByEmail(req, res) {
    const { email } = req.params;
    try {
      const usuario = await Usuario.findAll({ where: { email } });
      return res.json(usuario);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findAll(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new UsuarioController();
