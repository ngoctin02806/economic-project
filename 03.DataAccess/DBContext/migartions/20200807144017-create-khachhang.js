/* eslint-disable */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('khachhangs', {
      makhachhang: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenkhachhang: {
        type: Sequelize.STRING,
      },
      sdt: {
        type: Sequelize.STRING,
      },
      diachi: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.STRING,
      },
      matkhau: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      loaixacthuc: {
        type: Sequelize.STRING,
      },
      vaitro: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('khachhangs');
  },
};
