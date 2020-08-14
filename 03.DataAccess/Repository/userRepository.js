const Result = require('folktale').result;

const { khachhang } = require('../DBContext/models/index');

const getUserByEmail = async email => {
  try {
    const user = await khachhang.findOne({ where: { email } });

    return Promise.resolve(Result.Ok(user));
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};

const getUserById = async userId => {
  try {
    const user = await khachhang.findOne({ where: { makhachhang: userId } });

    return Promise.resolve(Result.Ok(user));
  } catch (error) {
    return Promise.resolve(Result.Error(userId));
  }
};

const insertUser = async data => {
  try {
    const newUser = await khachhang.create(data);
    delete newUser.matkhau;

    return Promise.resolve(Result.Ok(newUser.dataValues));
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};

module.exports = {
  getUserByEmail,
  insertUser,
  getUserById,
};
