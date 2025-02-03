const AppError = require("../errors/AppError");
const { Product, Cart, CartItem, sequelize } = require('../models');


class CartService{

    static async addToCart(userId, productId, quantity){

        const transaction = await sequelize.transaction();

        const product = await Product.findByPk(productId, { transaction });
        
        if (!product) {
            throw new AppError("Product Not Found", 404);
        }

        if (product.quantity < quantity) {
            throw new AppError("Not enough products in stock", 401);
        }

        let cart = await Cart.findOne({ where: { userId }, transaction });

        let cartItem = await CartItem.findOne({ 
            where: { cartId: cart.id, productId: product.id }, 
            transaction 
        });

        if (cartItem) {
            cartItem.quantity += quantity;
            await cartItem.save({ transaction });
        } else {
            cartItem = await CartItem.create({
                cartId: cart.id,
                productId: product.id,
                quantity
            }, { transaction });
        }

        product.quantity -= quantity;
        await product.save({ transaction });

        await transaction.commit();

        return cartItem;    
    }

    static async getCart(userId){

        const cart = await Cart.findOne({
            where: { userId },
            include: [{
                model: CartItem,
                include: Product
            }]
        });

        return cart;
    }

    static async updateCartItem(userId, cartItemId, quantity){

        const cart = await Cart.findOne({ where: { userId } });

        const cartItem = await CartItem.findOne({
            where: { id: cartItemId, cartId: cart.id }
        });

        if (!cartItem) {
            throw new AppError("Cart Item Not Found", 404);
        }

        const product = await Product.findByPk(cartItem.productId);

        if (product.quantity < quantity) {
            throw new AppError("Not enough products in stock", 401);
        }

        if (quantity === 0) {
            await cartItem.destroy();
            return null;
        }

        const oldQuantity = cartItem.quantity;

        cartItem.quantity = quantity;
        await cartItem.save();

        product.quantity += oldQuantity - quantity;
        await product.save();

        return cartItem;
    }

    static async clearCart(userId){
        const cart = await Cart.findOne({ where: { userId } });
        CartItem.destroy({ where: { cartId: cart.id } });
    }

}

module.exports = CartService;