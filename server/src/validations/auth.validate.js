const Joi = require('joi');
const userSchema = require("./Models/user.validation");


const signupSchema = Joi.object({}).concat(userSchema);

const loginSchema = Joi.object({
    email: userSchema.extract('email'),
    password: userSchema.extract('password')
});

module.exports = {
    signupSchema,
    loginSchema
};

