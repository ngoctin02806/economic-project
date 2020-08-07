'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chitietdondathang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chitietdondathang.belongsTo(models.sanpham, {foreignKey: 'ma_sp'});
      chitietdondathang.belongsTo(models.dondathang, {foreignKey: 'ma_ddh'});
    }
  };
  chitietdondathang.init({
    machitiet: DataTypes.INTEGER,
    soluong: DataTypes.INTEGER,
    tongtien: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'chitietdondathang',
  });
  return chitietdondathang;
};