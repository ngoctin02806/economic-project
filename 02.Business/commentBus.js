/* eslint-disable */
const R = require('ramda');

const {
  getAllCommentsOfProductDB,
  insertCommentDB,
} = require('../03.DataAccess/Repository/commentRepository');

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

    if (data.noidungbinhluan.length === 0) {
      return {
        status: false,
        message: 'Vui lòng không để trống',
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
  getAllCommentsOfProduct,
  createNewComment,
};
