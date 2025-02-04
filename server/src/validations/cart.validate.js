const Joi = require('joi');
const cartItemSchema = require('./Models/cartItem.validation');

const createCartItemSchema = cartItemSchema;

const updateCartItemSchema = Joi.object({
  quantity: cartItemSchema.extract('quantity').optional()
});


module.exports = {
  createCartItemSchema,
  updateCartItemSchema,
};