const express = require('express');

const router = express.Router();

const homeRouter = require('./home.router');
const userRouter = require('./user.router');
const productRouter = require('./product.router');
const categoryRouter = require('./category.router');

router.use('/', homeRouter);
router.use('/', userRouter);
router.use('/', productRouter);
router.use('/', categoryRouter);

module.exports = router;
