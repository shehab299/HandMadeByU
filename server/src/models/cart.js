const { Model, DataTypes } = require('sequelize');

const CartSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
};

module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {

        static associate(models) {

            console.log(models)

            Cart.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user'
            });

            Cart.hasMany(models.CartItem, {
                foreignKey: 'cartId',
                as: 'cartItems'
            });
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