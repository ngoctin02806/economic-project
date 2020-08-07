'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class danhmuc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      danhmuc.hasMany(models.sanpham, {foreignKey: 'ma_dm'});
    }
  };
  danhmuc.init({
    madanhmuc: DataTypes.INTEGER,
    tendanhmuc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'danhmuc',
  });
  return danhmuc;
};