/* eslint-disable */
const R = require('ramda');

const {
  getAllProductsDB,
  getProductByIdDB,
  getAllCommentsOfProductDB,
  insertCommentDB,
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

const getAllCommentsOfProduct = async (productId, userId) => {
  try {
    const result = await getAllCommentsOfProductDB(parseInt(productId, 10));

    if (result.value instanceof Error) throw result.value;

    const comments = result.value.map(cmt => {
      return {
        ...R.path(['dataValues'])(cmt),
        khachhang: {
          ...R.path(['khachhang', 'dataValues'])(cmt),
        },
        isMe:
          R.path(['khachhang', 'dataValues', 'makhachhang'])(cmt) === userId,
      };
    });

    return comments;
  } catch (error) {
    throw error;
  }
};

const createNewComment = async data => {
  try {
    const regexPhonenumber = /[0-9]+/;
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkPhonenumber = regexPhonenumber.test(data.soDT);
    if (!checkPhonenumber) {
      return {
        status: false,
        message: 'Số điện thoại không bao gồm chữ và kí tự đặt biệt',
      };
    }

    if (data.soDT.length > 10) {
      return {
        status: false,
        message: 'Số điện thoại không quá 10 chữ số',
      };
    }

    const checkEmail = regexEmail.test(data.email);
    if (!checkEmail) {
      return {
        status: false,
        message: 'Email không chính xác',
      };
    }

    const result = await insertCommentDB(data);
    if (result.value instanceof Error) throw result.value;

    return {
      status: true,
      comment: result.value,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getAllCommentsOfProduct,
  createNewComment,
};
