const Joi = require('joi');


const shopSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(2).max(255).required(),
    logo: Joi.string().uri().optional(),
    banner: Joi.string().uri().optional()
});


module.exports = shopSchema;