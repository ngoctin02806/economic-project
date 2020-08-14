const { Model } = require('sequelize');
const bcryptjs = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class khachhang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      khachhang.hasMany(models.dondathang, { foreignKey: 'ma_kh' });
    }
  }
  khachhang.init(
    {
      makhachhang: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      tenkhachhang: DataTypes.STRING,
      sdt: DataTypes.STRING,
      diachi: DataTypes.TEXT,
      email: DataTypes.STRING,
      matkhau: DataTypes.STRING,
      avatar: DataTypes.STRING,
      loaixacthuc: DataTypes.STRING,
      vaitro: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'khachhang',
    }
  );

  // eslint-disable-next-line
  khachhang.addHook('beforeCreate', async function(user, options) {
    user.matkhau = await user.hashPassword(user.matkhau); // eslint-disable-line
  });

  khachhang.prototype.hashPassword = async function() {
    return bcryptjs.hash(this.matkhau, 10);
  };

  khachhang.prototype.comparePassword = async function(password) {
    return bcryptjs.compare(password, this.matkhau);
  };

  return khachhang;
};
