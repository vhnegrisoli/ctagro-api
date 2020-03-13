import Sequelize, { Model } from "sequelize";

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
  }
}

export default Usuario;
