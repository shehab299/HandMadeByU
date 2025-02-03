const express = require('express');
const shopController = require('../controllers/shop.controller');
const validate = require('../middleware/validate');
const authenticate = require('../middleware/auth');
const shopValidator = require('../validations/shop.validate');

const productRouter = require('./shop/product.shop.route');

const shopRouter = express.Router();

shopRouter.use(authenticate);

shopRouter.post('/', validate(shopValidator.createShopSchema), shopController.createShop);
shopRouter.get('/', shopController.getShops);
shopRouter.get('/:id', shopController.getShop);
shopRouter.put('/:id', validate(shopValidator.updateShopSchema), shopController.updateShop);
shopRouter.delete('/:id', shopController.deleteShop);
shopRouter.use(':shopId/products', productRouter);

module.exports = shopRouter;
