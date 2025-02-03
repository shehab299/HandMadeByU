const cartItemSchema = require('./Models/cartItem.validation');

const createCartItemSchema = cartItemSchema;

const updateCartItemSchema = cartItemSchema.fork(['quantity'], (schema) => schema.min(0));

module.exports = {
  createCartItemSchema,
  updateCartItemSchema,
};