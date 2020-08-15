const express = require('express');

const router = express.Router();

const homeRouter = require('./home.router');
const userRouter = require('./user.router');
const productRouter = require('./product.router');

router.use('/', homeRouter);
router.use('/', userRouter);
router.use('/', productRouter);

module.exports = router;
