const asyncDec = require('../utils/asyncDec');
const ProductService = require('../services/product.service');

async function createProduct(req, res, next) {

    const shopId = req.params.shopId;
    const product = await ProductService.createProduct(shopId, req.body);

    res.status(201).json({
        status: 'success',
        data: { product },
    });
}


async function  getProducts(req, res, next) {

    const shopId = req.params.shopId;
    
    filters = {shopId}

    const products = await ProductService.getProducts(filters);

    res.status(200).json({
        status: 'success',
        data: { products },
    });
}

async function getProduct(req, res, next) {

    const shopId = req.params.shopId;
    const productId = req.params.productId;

    const product = await ProductService.getProduct(shopId, productId);

    res.status(200).json({
        status: 'success',
        data: { product },
    });
}


async function updateProduct(req, res, next) {

    const shopId = req.params.shopId;
    const productId = req.params.productId;
    const userId = req.user.id;

    const product = await ProductService.updateProduct(userId, shopId, productId, req.body);

    res.status(200).json({
        status: 'success',
        data: { product },
    });
}

async function deleteProduct(req, res, next) {

    const shopId = req.params.shopId;
    const productId = req.params.productId;
    const userId = req.user.id;
    
    await ProductService.deleteProduct(userId, shopId, productId);

    res.status(204).json({
        status: 'success',
        data: null,
    });
}

module.exports = {
    createProduct: asyncDec(createProduct),
    getProducts: asyncDec(getProducts),
    getProduct: asyncDec(getProduct),
    updateProduct: asyncDec(updateProduct),
    deleteProduct: asyncDec(deleteProduct),
}


