const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class hinhanh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hinhanh.belongsTo(models.sanpham, { foreignKey: 'ma_sp' });
    }
  }
  hinhanh.init(
    {
      mahinhanh: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      lienkethinhanh: DataTypes.TEXT,
      hienthi: DataTypes.BOOLEAN,
      ma_sp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'hinhanh',
    }
  );
  return hinhanh;
};
