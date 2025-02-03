const { Model } = require('sequelize');
const { DataTypes } = require('sequelize');

const CartItemSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Carts',
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
};

module.exports = (sequelize, DataTypes) => {
    class CartItem extends Model {
        static associate(models) {
            CartItem.belongsTo(models.Cart, {
                foreignKey: 'cartId',
                as: 'cart'
            });

            CartItem.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product'
            });
        }
    }

    CartItem.init(CartItemSchema, {
        sequelize,
        modelName: 'CartItem'
    });

    CartItem.addHook('beforeUpdate', (cartItem, options) => {
        cartItem.setDataValue('productId', cartItem._previousDataValues.productId) 
        cartItem.setDataValue('cartId', cartItem._previousDataValues.cartId)    
    });

    return CartItem;
};