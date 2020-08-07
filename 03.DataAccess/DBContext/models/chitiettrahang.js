'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chitiettrahang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chitiettrahang.belongsTo(models.sanpham, {foreignKey: 'ma_sp'});
      chitiettrahang.belongsTo(models.dontrahang, {foreignKey: 'ma_dth'});
    }
  };
  chitiettrahang.init({
    machitiet: DataTypes.INTEGER,
    soluongtra: DataTypes.INTEGER,
    lidotra: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chitiettrahang',
  });
  return chitiettrahang;
};