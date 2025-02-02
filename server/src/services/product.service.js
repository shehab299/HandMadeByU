const AppError = require('../errors/AppError');
const { Product, Shop } = require('../models')


class ProductService {

    static async getProducts(filters) 
    {
        return await Product.findAll({ where: filters });
    }

    static async getProduct(shopId, productId) 
    {
        return await Product.findByPk(productId);
    }

    static async deleteProduct(userId, shopId, productId) 
    {    
        const product = await Product.findOne({ where: { id: productId, shopId } });
    
        if (!product) {
            throw new AppError("Product not found", 404);
        }
    
        const shop = await Shop.findByPk(shopId);
    
        if (!shop || userId !== shop.userId) {
            throw new AppError("Unauthorized", 401);
        }
    
        await product.destroy();
    }

    static async updateProduct(userId, shopId, productId, body)
    {
        const product = await Product.findOne({ where: { id: productId, shopId } });

        if (!product) {
            throw new AppError("Product not found", 404);
        }

        const shop = await Shop.findByPk(shopId);

        if (!shop || userId !== shop.userId) {
            throw new AppError("Unauthorized", 401);
        }

        await product.update(req.body);
        return product;
    }

    static async createProduct(userId, shopId, body) {
     
        const shop = await Shop.findByPk(shopId);

        if(!shop){
            throw new AppError("Shop not found", 404);
        }

        if (userId !== shop.userId) {
            throw new AppError("Unauthorized", 401);
        }

        const product = await Product.create({ ...body, shopId });
        return product;
    }
}

module.exports = ProductService;