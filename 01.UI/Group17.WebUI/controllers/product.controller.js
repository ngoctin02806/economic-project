/* eslint-disable */
const {
  getProductById,
  getAllCommentsOfProduct,
} = require('../../../02.Business/productBus');

const renderProductDetail = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const value = await getProductById(productId);

    if (!value.status) {
      const error = new Error(value.message);
      error.status = 404;

      throw error;
    }

    const comments = await getAllCommentsOfProduct(productId);

    return res.render('product-detail/index', { product: value.product });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  renderProductDetail,
};
