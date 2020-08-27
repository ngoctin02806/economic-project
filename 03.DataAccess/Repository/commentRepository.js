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

const updateCommentDB = async (data, commentId) => {
  try {
    const result = await comment.update(
      { ...data },
      { where: { macomment: commentId } }
    );

    return Promise.resolve(Result.Ok(result));
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};

const deleteCommentDB = async commentId => {
  try {
    const result = await comment.destroy({
      where: { macomment: commentId },
    });

    return Promise.resolve(Result.Ok(result));
  } catch (error) {
    return Promise.resolve(Result.Error(error));
  }
};

module.exports = {
  getAllCommentsOfProductDB,
  insertCommentDB,
  updateCommentDB,
  deleteCommentDB,
};
