const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class thongtinquangcao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      thongtinquangcao.belongsTo(models.doitacquancao, {
        foreignKey: 'ma_dtqc',
      });
      thongtinquangcao.belongsTo(models.nhanvien, { foreignKey: 'ma_nv' });
      thongtinquangcao.belongsTo(models.sanpham, { foreignKey: 'ma_sp' });
    }
  }
  thongtinquangcao.init(
    {
      maquangcao: DataTypes.INTEGER,
      noidungquacao: DataTypes.TEXT,
      ma_dtqc: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'thongtinquangcao',
    }
  );
  return thongtinquangcao;
};
