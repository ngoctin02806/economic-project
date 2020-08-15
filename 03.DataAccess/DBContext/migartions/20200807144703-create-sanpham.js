/* eslint-disable */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sanphams', {
      masanpham: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tensanpham: {
        type: Sequelize.STRING,
      },
      giasp: {
        type: Sequelize.DECIMAL,
      },
      soluongtong: {
        type: Sequelize.INTEGER,
      },
      mota: {
        type: Sequelize.STRING,
      },
      ma_dm: {
        type: Sequelize.INTEGER,
      },
      ma_ncc: {
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
    await queryInterface.dropTable('sanphams');
  },
};
