const { Shop } = require("../models");
const AppError = require("../errors/AppError");

class ShopService {

    static async createShop(userId, { name, description }) 
    {
        return await Shop.create({ name, description, userId });
    }

    static async updateShop(userId, shopId, { name, description }) {
        const shop = await Shop.findByPk(shopId);
        if (!shop) {
            throw new AppError("Shop not found", 404);
        }

        if (shop.userId !== userId) {
            throw new AppError("Unauthorized: You are not the owner of this shop", 401);
        }

        shop.name = name || shop.name;
        shop.description = description || shop.description;

        await shop.save();
        return shop;
    }

    static async deleteShop(userId, shopId) 
    {
        const shop = await Shop.findByPk(shopId);
        if (!shop) {
            throw new AppError("Shop not found", 404);
        }

        if (shop.userId !== userId) {
            throw new AppError("Unauthorized: You are not the owner of this shop", 401);
        }

        await shop.destroy();
    }

    static async getShops(filters) 
    {
        return await Shop.findAll({ where: filters });
    }

    static async getShop(shopId) 
    {
        const shop = await Shop.findByPk(shopId);
        if (!shop) {
            throw new AppError("Shop not found", 404);
        }
        return shop;
    }
}

module.exports = ShopService;
