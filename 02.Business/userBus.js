const {
  getUserByEmail,
  insertUser,
  getUserById,
} = require('../03.DataAccess/Repository/userRepository');

// eslint-disable-next-line no-unused-vars
const checkPasswordOfUser = async (email, password) => {
  const user = await getUserByEmail(email);

  if (user.value instanceof Error) throw user.value;
};

const checkUserIsExist = async email => {
  const user = await getUserByEmail(email);

  if (user.value instanceof Error) throw user.value;

  return user.value;
};

const createNewUser = async data => {
  const user = await checkUserIsExist(data.email);

  if (!user) {
    const newUser = await insertUser(data);

    return newUser.value;
  }

  return user.dataValues;
};

const getUserByIdentify = async userId => {
  const user = await getUserById(userId);

  if (user.value instanceof Error) throw user.value;

  return user.value.dataValues;
};

module.exports = {
  checkPasswordOfUser,
  checkUserIsExist,
  createNewUser,
  getUserByIdentify,
};
