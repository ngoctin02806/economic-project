const Result = require('folktale/result');

const { danhmuc } = require('../DBContext/models');

const getAllCategories = async () => {
  try {
    const categories = await danhmuc.findAll({
      attributes: ['madanhmuc', 'tendanhmuc'],
    });

    return Promise.resolve(categories);
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};
const getNamebyMA = async id => {
  try {
    const categories = await danhmuc.findOne({
      attributes: ['tendanhmuc'],
      where: {
        madanhmuc: id,
      },
    });

    return Promise.resolve(categories);
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};

module.exports = {
  getAllCategories,
  getNamebyMA,
};
