const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cart.controller');
const { categoryMiddleware } = require('../middlewares/category.middleware');
const { checkExistUser } = require('../middlewares/auth.middleware');
const Cart = require('../../../02.Business/cartBus')
const {getProductById} = require('../../../02.Business/productBus');


router.post('/',(req,res,next) => {
  var productID = req.body.id;
  var quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
  var productController = require('../controllers/product.controller');
  productController
  .getById(productID)
  .then(product => {
      var cartItem = req.session.cart.add(product, productID, quantity);
      res.json(cartItem);
  })
  .catch(error => next(error));
});
router

router.get(
  '/cart',
  categoryMiddleware,
  cartController.cart
);

router.get('/cart/add/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const cartObject = req.session.cart;

    const product = await getProductById(id);

    cartObject.add(product, product.masanpham, 1);

    return res.redirect('/');
  } catch (error) {
    return next(error);
  }
});

router.get('/cart/pay', checkExistUser, (req, res, next) =>{
  try {
    return res.send('successful payments')
  } catch (error) {
    return next(error);
  }
})

module.exports = router;
