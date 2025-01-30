const {Shop} = require("../models");
const AppError = require("../errors/AppError");
const asyncDec = require("../utils/asyncDec");

async function createShop(req, res, next) {

    const { name, description } = req.body;

    const shop = await Shop.create({
        name,
        description,
        userId: req.user.id
    });

    res.status(201).json({
        status: "success",
        data: { shop },
    });
}

async function updateShop(req, res, next) {

    const shop = await Shop.findByPk(req.params.id);

    if (!shop) {
        return next(new AppError("Shop not found", 404));
    }

    if(shop.userId !== req.user.id){
        return next(new AppError("Unauthorized: You are not the owner of this shop", 401));
    }

    const { name, description } = req.body
    
    shop.name = name || shop.name;
    shop.description = description || shop.description;

    await shop.save();

    res.status(200).json({
        status: "success",
        data: { shop },
    });
}

async function deleteShop(req, res, next) {

    const shop = await Shop.findByPk(req.params.id);

    if (!shop) {
        return next(new AppError("Shop not found", 404));
    }

    if(shop.userId !== req.user.id){
        return next(new AppError("Unauthorized: You are not the owner of this shop", 401));
    }

    await shop.destroy();

    res.status(204).json({
        status: "success",
        data: null,
    });
}

async function getShops(req, res, next) {

    filters = {};

    if(req.query.userId){
        filters.userId = req.query.userId;
    }

    const shops = await Shop.findAll(filters);

    res.status(200).json({
        status: "success",
        data: { shops },
    });

}

async function getShop(req, res, next) {
    
    const shop = await Shop.findByPk(req.params.id);

    if (!shop) {
        return next(new AppError("Shop not found", 404));
    }

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
    getShop: asyncDec(getShop)
}
