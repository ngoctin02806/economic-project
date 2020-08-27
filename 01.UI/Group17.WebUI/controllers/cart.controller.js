/* eslint-disable */


const cart = async(req, res, next) => {
    try {
        var cart = req.session.cart;

        console.log(cart.getCart());

        res.render('cart/cart', {
            cart: cart.getCart()
        }); 
    } catch (error) {
        next(error);
    }
};

module.exports = {
    cart
};