const Result = require('folktale/result');

const { comment, khachhang } = require('../DBContext/models');

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
  getAllCommentsOfProductDB,
  insertCommentDB,
};
