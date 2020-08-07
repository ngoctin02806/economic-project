'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dondathang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dondathang.hasMany(models.chitietdondathang, {foreignKey: 'id_ddh'});


      dondathang.belongsTo(models.khachhang, {foreignKey: 'ma_kh'});
      dondathang.belongsTo(models.nhanvien, {foreignKey: 'ma_nv '});
    }
  };
  dondathang.init({
    madondathang: DataTypes.INTEGER,
    tongsoluong: DataTypes.INTEGER,
    tongtien: DataTypes.DECIMAL,
    trangthai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dondathang',
  });
  return dondathang;
};