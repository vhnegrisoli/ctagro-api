import Sequelize, { Model } from "sequelize";

class Permissao extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: Sequelize.STRING,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Permissao;
