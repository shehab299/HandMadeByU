const Joi = require('joi');

const cartItemSchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = cartItemSchema;