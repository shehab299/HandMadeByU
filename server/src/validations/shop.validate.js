const Joi = require('joi');
const shop = require('./Models/shop.validation');

const createShopSchema = shop;

const updateShopSchema = shop.fork(['name', 'description'], (schema) => schema.optional());

module.exports = {
    createShopSchema,
    updateShopSchema
};