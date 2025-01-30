const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(6).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    firstName: Joi.string().min(2).max(50).required(),
    middleName: Joi.string().min(2).max(50),
    lastName: Joi.string().min(2).max(50).required(),
    age: Joi.number().integer().min(1).max(100)
});

module.exports = userSchema;

