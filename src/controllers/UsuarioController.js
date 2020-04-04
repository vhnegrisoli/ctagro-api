import Usuario from "../models/Usuario";

class UsuarioController {
  async save(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const usuario = await Usuario.findOne({
        where: {
          email,
        },
      });

      if (usuario) {
        return res
          .status(400)
          .json({ message: "O email já está cadastrado para um usuário." });
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

  async update(req, res) {
    const { id } = req.params;
    try {
      const { authUser } = req;
      if (parseInt(id) !== parseInt(authUser.id)) {
        return res
          .status(403)
          .json({ message: "Você não tem permissão para editar este usuário" });
      }
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        const { nome, email, senha } = req.body;
        const emailCadastrado = await Usuario.findOne({ where: { email } });
        if (emailCadastrado && usuario.id !== emailCadastrado.id) {
          return res.status(400).json({
            message: "O email " + email + " já pertence a outro usuário.",
          });
        }
        await usuario.update({ nome, email, senha });
        return res.json({ message: "Usuário atualizado." });
      }
      return res
        .status(400)
        .json({ message: "Não existe um usuário para o id " + id });
    } catch (error) {
      return res.json(error);
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    const { authUser } = req;
    if (parseInt(authUser.id) !== parseInt(id)) {
      return res.status(403).json({
        message: "Você não tem permissão para visualizar este usuário",
      });
    }
    try {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        return res.json(usuario);
      }
      return res
        .status(400)
        .json({ message: "Não foi encontrado um usuário para o id " + id });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findByEmail(req, res) {
    const { email } = req.params;
    const { authUser } = req;
    if (authUser.email !== email) {
      return res.status(403).json({
        message: "Você não tem permissão para visualizar este usuário",
      });
    }
    try {
      const usuario = await Usuario.findOne({ where: { email } });
      if (usuario) {
        return res.json(usuario);
      }
      return res
        .status(400)
        .json({ message: "Não existe um usuário para o email " + email });
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

  async delete(req, res) {
    const { id } = req.params;
    try {
      const usuarioParaRemover = await Usuario.findByPk(id);

      if (usuarioParaRemover) {
        await Usuario.destroy({
          where: {
            id,
          },
        });
        return res.json({
          message: "O usuário " + usuarioParaRemover.nome + " foi removido.",
        });
      }
      return res.json({ message: "Não existe um usuário para o id " + id });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new UsuarioController();
