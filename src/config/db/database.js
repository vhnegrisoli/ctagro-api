import Sequelize from "sequelize";
import config from "./config";

import Usuario from "../../models/Usuario";
import Permissao from "../../models/Permissao";
import UsuarioPermissao from "../../models/UsuarioPermissao";

const models = [Usuario, Permissao, UsuarioPermissao];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
