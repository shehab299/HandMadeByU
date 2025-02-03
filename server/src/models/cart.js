const { Model, DataTypes } = require('sequelize');

const CartSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'User',
            key: 'id'
        }
    }
};

module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {

        static associate(models) {

            Cart.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user'
            });

            Cart.hasMany(models.CartItem, {
                foreignKey: 'cartId',
                as: 'cartItems'
            })
        }

    }

    Cart.init(CartSchema, {
        sequelize,
        modelName: 'Cart'
    });

    Cart.addHook('beforeUpdate', (cart, options) => {
        cart.setDataValue('userId', cart._previousDataValues.userId);
    })

    return Cart;
};