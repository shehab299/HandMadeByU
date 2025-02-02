const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().required(),
    quantity: Joi.number().min(0).required(),
    image: Joi.string().uri()
});

module.exports = productSchema;
