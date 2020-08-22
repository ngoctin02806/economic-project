const Result = require('folktale/result');

const { sanpham, hinhanh, danhmuc } = require('../DBContext/models');

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

module.exports = {
  getAllProductsDB,
  getProductByIdDB,
};
