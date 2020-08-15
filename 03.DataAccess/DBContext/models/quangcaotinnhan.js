const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class quangcaotinnhan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      quangcaotinnhan.belongsTo(models.nhanvien, { foreignKey: 'ma_nv' });
      quangcaotinnhan.belongsTo(models.comment, { foreignKey: 'ma_cmt' });
    }
  }
  quangcaotinnhan.init(
    {
      maquangcao: DataTypes.INTEGER,
      noidungtinnhan: DataTypes.TEXT,
      dagui: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'quangcaotinnhan',
    }
  );
  return quangcaotinnhan;
};
