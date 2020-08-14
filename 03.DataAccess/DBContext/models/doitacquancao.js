const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class doitacquancao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      doitacquancao.hasMany(models.thongtinquangcao, { foreignKey: 'ma_dtqc' });
    }
  }
  doitacquancao.init(
    {
      madoitac: DataTypes.INTEGER,
      tendoitac: DataTypes.STRING,
      ngaykyhopdong: DataTypes.DATE,
      thoihan: DataTypes.INTEGER,
      vitridang: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'doitacquancao',
    }
  );
  return doitacquancao;
};
