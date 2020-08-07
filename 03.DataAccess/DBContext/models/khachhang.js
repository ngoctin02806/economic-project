'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class khachhang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      khachhang.hasMany(models.dondathang, {foreignKey: 'ma_kh'});
    }
  };
  khachhang.init({
    makhachhang: DataTypes.INTEGER,
    tenkhachhang: DataTypes.STRING,
    sdt: DataTypes.STRING,
    diachi: DataTypes.TEXT,
    email: DataTypes.STRING,
    vaitro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'khachhang',
  });
  return khachhang;
};