/* eslint-disable */
const R = require('ramda');

const {
  getAllProductsDB,
  getProductByIdDB,
} = require('../03.DataAccess/Repository/productRepository');

/* eslint-disable no-useless-catch */
const getAllProducts = async (offset, limit) => {
  try {
    const products = await getAllProductsDB(offset, limit);

    if (products.value instanceof Error) throw products.value;

    const result = products.value.map(product => {
      return {
        ...product.dataValues,
        hinhanhs: R.path(['hinhanhs'])(product).map(img => {
          return {
            ...R.path(['dataValues'])(img),
          };
        }),
        img_show: {
          ...R.path(['hinhanhs'])(product).find(img => img.hienthi === true)
            .dataValues,
        },
      };
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const getProductById = async productId => {
  try {
    const product = await getProductByIdDB(productId);

    if (product.value instanceof Error) throw product.value;

    if (!product.value) {
      return {
        status: false,
        message: 'Sản phẩm không tồn tại',
      };
    }

    const result = {
      ...R.path(['value', 'dataValues'])(product),
      hinhanhs: R.path(['value', 'hinhanhs'])(product).map(img => {
        return {
          ...R.path(['dataValues'])(img),
        };
      }),
      danhmucs: {
        ...R.path(['value', 'danhmuc', 'dataValues'])(product),
      },
      img_show: {
        ...R.path(['value', 'hinhanhs'])(product).find(
          img => img.hienthi === true
        ).dataValues,
      },
    };

    return {
      status: true,
      product: result,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
