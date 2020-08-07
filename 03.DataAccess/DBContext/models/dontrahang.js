'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dontrahang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dontrahang.hasMany(models.chitiettrahang,{foreignKey: 'ma_dth'})
    }
  };
  dontrahang.init({
    madonhang: DataTypes.INTEGER,
    soluongtra: DataTypes.INTEGER,
    ngaylap: DataTypes.DATE,
    tendoitac: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dontrahang',
  });
  return dontrahang;
};