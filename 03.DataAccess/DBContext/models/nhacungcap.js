'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nhacungcap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      nhacungcap.hasMany(models.sanpham, {foreignKey: 'ma_ncc'});
    }
  };
  nhacungcap.init({
    manhacungcap: DataTypes.INTEGER,
    tennhacungcap: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nhacungcap',
  });
  return nhacungcap;
};