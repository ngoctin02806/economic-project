const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.hasMany(models.quangcaotinnhan, { foreignKey: 'ma_cmt' });

      comment.belongsTo(models.sanpham, { foreignKey: 'ma_sp' });
      comment.belongsTo(models.khachhang, { foreignKey: 'ma_kh' });
    }
  }
  comment.init(
    {
      macomment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      hoten: DataTypes.STRING,
      email: DataTypes.STRING,
      soDT: DataTypes.STRING,
      noidungbinhluan: DataTypes.TEXT,
      ngaybinhluon: DataTypes.DATE,
      trangthai: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'comment',
    }
  );
  return comment;
};
