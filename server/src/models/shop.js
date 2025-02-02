'use strict';

const { Model, DataTypes } = require('sequelize');

const ShopSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
  ,name: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 2,
    max: 50
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  banner:{
    type: DataTypes.STRING,
    validate:{
      isUrl: true
    }
  },
  logo:{
    type: DataTypes.STRING,
    validate:{
      isUrl: true
    }
  }
}




module.exports = (sequelize, DataTypes) => {
  
  class Shop extends Model {
    static associate(models) {
      Shop.belongsTo(models.User, {foreignKey: 'userId', as: 'owner'});
      Shop.hasMany(models.Product, {foreignKey: 'shopId', as: 'products'});
    }
  }

  Shop.init(ShopSchema, {
    sequelize,
    modelName: 'Shop',
  });

  Shop.beforeUpdate((shop, options) => {
    shop.setDataValue('userId', shop._previousDataValues.userId);
    shop.setDataValue('id', shop._previousDataValues.id);
  });
  
  
  return Shop;
};