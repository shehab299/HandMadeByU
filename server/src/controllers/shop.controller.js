const asyncDec = require("../utils/asyncDec");
const ShopService = require("../services/shop.service");

async function createShop(req, res, next) {
    const shop = await ShopService.createShop(req.user.id, req.body);

    res.status(201).json({
        status: "success",
        data: { shop },
    });
}

async function updateShop(req, res, next) {
    const shop = await ShopService.updateShop(req.user.id, req.params.id, req.body);

    res.status(200).json({
        status: "success",
        data: { shop },
    });
}

async function deleteShop(req, res, next) {
    await ShopService.deleteShop(req.user.id, req.params.id);

    res.status(204).json({
        status: "success",
        data: null,
    });
}

async function getShops(req, res, next) {
    const filters = req.query.userId ? { userId: req.query.userId } : {};
    const shops = await ShopService.getShops(filters);

    res.status(200).json({
        status: "success",
        data: { shops },
    });
}

async function getShop(req, res, next) {
    const shop = await ShopService.getShop(req.params.id);

    res.status(200).json({
        status: "success",
        data: { shop },
    });
}

module.exports = {
    createShop: asyncDec(createShop),
    updateShop: asyncDec(updateShop),
    deleteShop: asyncDec(deleteShop),
    getShops: asyncDec(getShops),
    getShop: asyncDec(getShop),
};
