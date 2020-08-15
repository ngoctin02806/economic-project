/* eslint-disable */
const {
  getProductById,
  getAllCommentsOfProduct,
  createNewComment,
} = require('../../../02.Business/productBus');

const renderProductDetail = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { user } = req;

    const value = await getProductById(productId);

    if (!value.status) {
      const error = new Error(value.message);
      error.status = 404;

      throw error;
    }

    const comments = await getAllCommentsOfProduct(
      productId,
      user && user.makhachhang
    );

    return res.render('product-detail/index', {
      product: value.product,
      comments,
      message: req.flash('message-comment'),
    });
  } catch (error) {
    next(error);
  }
};

const postNewComment = async (req, res, next) => {
  try {
    const { email, phonenumber, name, editor1, idProduct, idUser } = req.body;
    const result = await createNewComment({
      hoten: name,
      email,
      soDT: phonenumber,
      noidungbinhluan: editor1,
      ngaybinhluan: new Date().getTime(),
      trangthai: 0,
      ma_sp: idProduct,
      ma_kh: idUser,
    });

    if (!result.status) req.flash('message-comment', result.message);
    return res.redirect(req.path);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  renderProductDetail,
  postNewComment,
};
