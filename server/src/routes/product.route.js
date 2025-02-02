const express = require('express');

const validate = require('../middleware/validate')
const authenticate = require('../middleware/auth')

const {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller")

const {
    createProductSchema,
    updateProductSchema
} = require('../validations/product.validate')

const productRouter = express.Router();

productRouter.get('/', authenticate, getProducts)
productRouter.get('/:productId', authenticate, getProduct)
productRouter.post('/', authenticate, validate(createProductSchema), createProduct)
productRouter.delete('/:productId', authenticate, deleteProduct)
productRouter.put('/:productId', authenticate, validate(updateProductSchema), updateProduct)

module.exports = productRouter;