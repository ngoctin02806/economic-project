const express = require('express');

const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/san-pham/:productId/:slug', productController.renderProductDetail);
router.post('/san-pham/:productId/:slug', productController.postNewComment);
router.post(
  '/san-pham/:productId/:slug/cap-nhap',
  productController.updateExistComment
);
router.post('/comments/:commentId', productController.deleteExistComment);

module.exports = router;
