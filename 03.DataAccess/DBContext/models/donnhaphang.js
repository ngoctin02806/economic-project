'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donnhaphang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      donnhaphang.hasMany(models.chitietdonnhaphang, {foreignKey: 'id_dnh'});
    }
  };
  donnhaphang.init({
    madonnhaphang: DataTypes.INTEGER,
    tongsoluong: DataTypes.INTEGER,
    lydonhap: DataTypes.TEXT,
    ngaylap: DataTypes.DATE,
    trangthaidonhang: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'donnhaphang',
  });
  return donnhaphang;
};