'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nhanvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      nhanvien.hasMany(models.dondathang, {foreignKey: 'ma_nv'});
      nhanvien.hasMany(models.quangcaotinnhan, {foreignKey: 'ma_nv'});
      nhanvien.hasMany(models.thongtinquancao, {foreignKey: 'ma_nv'});
    }
  };
  nhanvien.init({
    manhanvien: DataTypes.INTEGER,
    tennhanvien: DataTypes.STRING,
    vaitro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'nhanvien',
  });
  return nhanvien;
};