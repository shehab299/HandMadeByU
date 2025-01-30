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
      // Define Associations
    }
  }

  User.init(UserSchema, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeSave', async (user, options) => {

    // Hash the password before saving the user
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    






  });


  return User;
};



