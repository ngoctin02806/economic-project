const Result = require('folktale/result');

const {
  sanpham,
  hinhanh,
  danhmuc,
  comment,
  khachhang,
} = require('../DBContext/models');

const getAllProductsDB = async (offset, limit) => {
  try {
    const products = await sanpham.findAll({
      include: [
        {
          model: hinhanh,
        },
      ],
      offset,
      limit,
    });

    return Promise.resolve(Result.Ok(products));
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};

const getProductByIdDB = async productId => {
  try {
    const product = await sanpham.findOne({
      where: {
        masanpham: productId,
      },
      include: [
        {
          model: hinhanh,
        },
        {
          model: danhmuc,
        },
      ],
    });

    return Promise.resolve(Result.Ok(product));
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};

const getAllCommentsOfProductDB = async productId => {
  try {
    const comments = await comment.findAll({
      where: {
        ma_sp: productId,
      },
      include: [
        {
          model: khachhang,
        },
      ],
    });

    return Promise.resolve(Result.Ok(comments));
  } catch (error) {
    return Promise.resolve(error);
  }
};

const insertCommentDB = async data => {
  try {
    const result = await comment.create({ ...data });

    return Promise.resolve(Result.Ok(result));
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};

module.exports = {
  getAllProductsDB,
  getProductByIdDB,
  getAllCommentsOfProductDB,
  insertCommentDB,
};
