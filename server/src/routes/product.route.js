const express = require('express');
const productController = require('../controllers/product.controller');
const validate = require('../middleware/validate');
const authenticate = require('../middleware/auth');

const productRouter = express.Router();

productRouter.use(authenticate);

productRouter.get('/', productController.getProductsFromAllShops);

module.exports = productRouter;