'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doitacquancaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      madoitac: {
        type: Sequelize.INTEGER
      },
      tendoitac: {
        type: Sequelize.STRING
      },
      ngaykyhopdong: {
        type: Sequelize.DATE
      },
      thoihan: {
        type: Sequelize.INTEGER
      },
      vitridang: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doitacquancaos');
  }
};