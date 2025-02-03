const asyncDec = require('../utils/asyncDec');
const CartService = require('../services/cart.service');

async function addToCart (req, res, next) {

    const userId = req.user.id;
    const { productId, quantity } = req.body;

    const item = await CartService.addToCart(userId, cartId, productId, quantity);

    res.status(201).json({
        status: 'success',
        data: { item },
    });

};

async function getCart(req, res, next) {
    
    const userId = req.user.id;
    const cart = await CartService.getCart(userId);

    res.status(200).json({
        status: 'success',
        data: { cart },
    });
}

async function updateCartItem(req, res, next) {
    
    const userId = req.user.id;
    const { itemId } = req.params;
    const { quantity } = req.body;

    const cartItem = await CartService.updateCartItem(userId, itemId, quantity);

    if(!cartItem){
        res.status(204).json({
            status: 'success',
            data: null,
        });
    };

    res.status(200).json({
        status: 'success',
        data: { cartItem },
    });
};

async function clearCart(req, res, next) {

    const userId = req.user.id;
    await CartService.clearCart(userId);

    res.status(204).json({
        status: 'success',
        data: null,
    });
}

module.exports = {
    addToCart: asyncDec(addToCart),
    getCart: asyncDec(getCart),
    updateCartItem: asyncDec(updateCartItem),
    clearCart: asyncDec(clearCart)
}; 