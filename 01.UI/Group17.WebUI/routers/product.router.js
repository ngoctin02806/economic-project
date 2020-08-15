const express = require('express');

const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/san-pham/:productId/:slug', productController.renderProductDetail);

module.exports = router;
