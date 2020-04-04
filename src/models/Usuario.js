import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING,
        data_cadastro: Sequelize.DATE
      },
      {
        sequelize
      }
    );
    this.addHook("beforeSave", async usuario => {
      if (usuario.senha) {
        usuario.senha = await bcrypt.hash(usuario.senha, 8);
      }
    });
    return this;
  }

  validarSenha(senha) {
    return bcrypt.compare(senha, this.senha);
  }
}

export default Usuario;
