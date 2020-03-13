import Sequelize from "sequelize";
import config from "./config";

import Usuario from "../../model/Usuario";

const models = [Usuario];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
