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

const getProductByMadanhmucDB = async (cateId, offset, limit) => {
  try {
    const product = await sanpham.findAll({
      where: {
        ma_dm: cateId,
      },
      include: [
        {
          model: hinhanh,
        },
      ],
      offset,
      limit,
    });

    return Promise.resolve(Result.Ok(product));
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};
const getallProductByMadanhmucDB = async cateId => {
  try {
    const product = await sanpham.findAll({
      where: {
        ma_dm: cateId,
      },
      include: [
        {
          model: hinhanh,
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
  getProductByMadanhmucDB,
  getallProductByMadanhmucDB,
};
