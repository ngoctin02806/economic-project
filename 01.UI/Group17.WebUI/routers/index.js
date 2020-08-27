const express = require('express');

const router = express.Router();

const homeRouter = require('./home.router');
const userRouter = require('./user.router');
const productRouter = require('./product.router');
const categoryRouter = require('./category.router');
const cartRouter = require('./cart.router');
const Cart = require('../../../02.Business/cartBus');

router.use((req,res, next) => {
  const cart = new Cart(req.session.cart || {});
  req.session.cart = cart;
  res.locals.totalQuantity = cart.totalQuantity;
  next();
});

router.use('/', homeRouter);
router.use('/', userRouter);
router.use('/', productRouter);
router.use('/', categoryRouter);
router.use('/', cartRouter);
module.exports = router;
