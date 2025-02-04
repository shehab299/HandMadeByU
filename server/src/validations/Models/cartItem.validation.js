const Joi = require('joi');
const product = require('../../models/product');

const cartItemSchema = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = cartItemSchema;