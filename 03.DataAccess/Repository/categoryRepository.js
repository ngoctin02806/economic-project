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

module.exports = {
  getAllCategories,
};
