'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dondathangs', {
      madondathang: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tongsoluong: {
        type: Sequelize.INTEGER
      },
      lydonhap: {
        type: Sequelize.TEXT
      },
      ngaylap: {
        type: Sequelize.DATE
      },
      trangthaidonhang: {
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
    await queryInterface.dropTable('dondathangs');
  }
};