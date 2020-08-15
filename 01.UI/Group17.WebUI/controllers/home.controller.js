/* eslint-disable */
const { getAllProducts } = require('../../../02.Business/productBus');

const home = async (req, res, next) => {
  try {
    const products = await getAllProducts(1, 16);
    return res.render('home/index', { products });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  home,
};
