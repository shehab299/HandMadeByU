const express = require('express');

const validate = require('../../middleware/validate')
const authenticate = require('../../middleware/auth')

const {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../../controllers/product.controller")

const {
    createProductSchema,
    updateProductSchema
} = require('../../validations/product.validate')

const productRouter = express.Router({ mergeParams: true });

productRouter.get('/', getProducts)
productRouter.get('/:productId', getProduct)
productRouter.post('/', validate(createProductSchema), createProduct)
productRouter.delete('/:productId', deleteProduct)
productRouter.put('/:productId', validate(updateProductSchema), updateProduct)

module.exports = productRouter;