const {
  getUserByEmail,
  insertUser,
  getUserById,
} = require('../03.DataAccess/Repository/userRepository');

/* eslint-disable no-useless-catch */
const checkPasswordOfUser = async (email, password) => {
  try {
    const user = await getUserByEmail(email);

    if (user.value instanceof Error) throw user.value;

    if (!user.value) {
      return {
        status: false,
        code: 'not-exist',
        message: 'User không tồn tại',
      };
    }

    const checkPassword = await user.value.comparePassword(password);

    if (!checkPassword) {
      return {
        status: false,
        code: 'not-match-password',
        message: 'Mật khẩu không chính xác',
      };
    }

    return {
      status: true,
      message: 'success',
      user,
    };
  } catch (error) {
    throw error;
  }
};

const checkUserIsExist = async email => {
  try {
    const user = await getUserByEmail(email);

    if (user.value instanceof Error) throw user.value;

    return user.value;
  } catch (error) {
    throw error;
  }
};

const createNewUser = async data => {
  try {
    const user = await checkUserIsExist(data.email);

    if (!user) {
      const newUser = await insertUser(data);

      return newUser.value;
    }

    return user.dataValues;
  } catch (error) {
    throw error;
  }
};

const getUserByIdentify = async userId => {
  try {
    const user = await getUserById(userId);

    if (user.value instanceof Error) throw user.value;

    return user.value.dataValues;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  checkPasswordOfUser,
  checkUserIsExist,
  createNewUser,
  getUserByIdentify,
};
