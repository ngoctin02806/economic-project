const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class sanpham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sanpham.hasMany(models.chitietdondathang, { foreignKey: 'ma_sp' });
      sanpham.hasMany(models.chitietdonnhaphang, { foreignKey: 'ma_sp' });
      sanpham.hasMany(models.chitiettrahang, { foreignKey: 'ma_sp' });
      sanpham.hasMany(models.comment, { foreignKey: 'ma_sp' });
      sanpham.hasMany(models.hinhanh, { foreignKey: 'ma_sp' });
      sanpham.hasMany(models.thongtinquangcao, { foreignKey: 'ma_sp' });

      sanpham.belongsTo(models.danhmuc, { foreignKey: 'ma_dm' });
      sanpham.belongsTo(models.nhacungcap, { foreignKey: 'ma_ncc' });
    }
  }
  sanpham.init(
    {
      masanpham: DataTypes.INTEGER,
      tensanpham: DataTypes.STRING,
      giasp: DataTypes.DECIMAL,
      soluongtong: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'sanpham',
    }
  );
  return sanpham;
};
