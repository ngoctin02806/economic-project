const {
  getAllCategories,
  getNamebyMA,
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

const getNameCategoriesBus = async id => {
  try {
    const result = await getNamebyMA(id);

    if (result.value instanceof Error) throw result.value;

    return result.dataValues;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllCategoriesBus,
  getNameCategoriesBus,
};
