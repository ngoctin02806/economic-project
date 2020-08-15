/* eslint-disable */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      macomment: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hoten: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      soDT: {
        type: Sequelize.STRING,
      },
      noidungbinhluan: {
        type: Sequelize.TEXT,
      },
      ngaybinhluan: {
        type: Sequelize.BIGINT,
      },
      trangthai: {
        type: Sequelize.INTEGER,
      },
      ma_sp: {
        type: Sequelize.INTEGER,
      },
      ma_kh: {
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
    await queryInterface.dropTable('comments');
  },
};
