const {
  getAllCategories,
} = require('../03.DataAccess/Repository/categoryRepository');

/* eslint-disable no-useless-catch */
const getAllCategoriesBus = async () => {
  try {
    const result = await getAllCategories();

    if (result.value instanceof Error) throw result.value;

    const categories = result.map(category => {
      return {
        ...category.dataValues,
      };
    });

    return categories;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategoriesBus,
};
