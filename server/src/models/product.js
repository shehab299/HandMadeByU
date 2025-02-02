'use strict';

const { Model, DataTypes } = require('sequelize');


const ProductSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 2,
    max: 100
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true, 
      min: 0
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  image: {
    type: DataTypes.STRING
  }
}

module.exports = (sequelize, DataTypes) => {
  
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Shop, { foreignKey: 'shopId', as: 'shop' });
    }
  }

  Product.init(ProductSchema, {
    sequelize,
    modelName: 'Product',
  });

  Product.beforeUpdate((product, options) => {
    product.setDataValue('shopId', product._previousDataValues.shopId);
    product.setDataValue('id', product._previousDataValues.id);
  });

  
  return Product;
};
