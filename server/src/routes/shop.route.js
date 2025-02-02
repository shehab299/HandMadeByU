const express = require('express');
const { 
    createShop, 
    getShops, 
    getShop, 
    updateShop, 
    deleteShop 
} = require('../controllers/shop.controller');

const { createShopSchema, updateShopSchema } = require('../validations/shop.validate');
const validate = require('../middleware/validate');
const authenticate = require('../middleware/auth');

const shopRouter = express.Router();

shopRouter.post('/', authenticate, validate(createShopSchema), createShop);
shopRouter.get('/', authenticate, getShops);
shopRouter.get('/:id', authenticate, getShop);
shopRouter.put('/:id', authenticate, validate(updateShopSchema), updateShop);
shopRouter.delete('/:id', authenticate, deleteShop);

module.exports = shopRouter;
