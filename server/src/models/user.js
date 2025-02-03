const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcryptjs");

const UserSchema = {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 2,
    max: 50
  },
  
  middleName: {
    type: DataTypes.STRING,
    allowNull: true,
    min: 2,
    max: 50
  },
  
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 2,
    max: 50
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },

  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    min: 6,
    max: 20
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 6
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
};

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    static associate(models) 
    {    
      User.hasMany(models.Shop, { foreignKey: 'userId', as: 'shops'});
      User.hasOne(models.Cart, { foreignKey: 'userId', as: 'cart'});
    }
  }

  User.init(UserSchema, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('afterCreate', async (user, options) => {
    const { Cart } = sequelize.models;
    await Cart.create({ userId: user.id });
  });

  User.addHook('beforeSave', async (user, options) => {

    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }

  });

  User.addHook('beforeUpdate', async (user, options) => {
    user.setDataValue('id', user._previousDataValues.id);
  });

  return User;
};



