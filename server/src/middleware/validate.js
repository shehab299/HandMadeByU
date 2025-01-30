const Joi = require('joi');
const AppError = require('../errors/AppError');

function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return next(new AppError(error.details[0].message), 400);
    }
    next();
  };
}

module.exports = validate;