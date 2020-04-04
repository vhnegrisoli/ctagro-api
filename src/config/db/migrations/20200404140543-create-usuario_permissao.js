"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuariopermissao", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_usuario: {
        type: Sequelize.INTEGER,
        references: { model: "usuario", key: "id" },
        allowNull: false,
      },
      fk_permissao: {
        type: Sequelize.INTEGER,
        references: { model: "permissao", key: "id" },
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuariopermissao");
  },
};
