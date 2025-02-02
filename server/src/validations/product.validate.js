const Joi = require('joi')
const productSchema = require('./Models/product.validation')

const createProductSchema = productSchema;

const updateProductSchema = productSchema.fork(['name', 'price', 'description', 'quantity'], (schema) => schema.optional());


module.exports = {
    createProductSchema,
    updateProductSchema
}