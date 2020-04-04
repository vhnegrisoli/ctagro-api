import Sequelize, { Model } from "sequelize";

class UsuarioPermissao extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_usuario: Sequelize.INTEGER,
        fk_permissao: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: "fk_usuario", as: "usuario" });
    this.belongsTo(models.Permissao, {
      foreignKey: "fk_permissao",
      as: "permissao",
    });
  }
}

export default UsuarioPermissao;
