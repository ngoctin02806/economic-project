'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chitietdonnhaphang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chitietdonnhaphang.belongsTo(models.sanpham, {foreignKey: 'ma_sp'});
      chitietdonnhaphang.belongsTo(models.donnhaphang, {foreignKey: 'ma_dnh'});
    }
  };
  chitietdonnhaphang.init({
    madonnhaphang: DataTypes.INTEGER,
    soluongnhap: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chitietdonnhaphang',
  });
  return chitietdonnhaphang;
};