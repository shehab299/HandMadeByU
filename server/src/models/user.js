
import { Model, DataTypes } from 'sequelize';

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
    max: 50,
    validate: {
      isAlpha: true,
    }
  },
  
  middleName: {
    type: DataTypes.STRING,
    allowNull: true,
    min: 2,
    max: 50,
    validate: {
      isAlpha: true,
    }
  },
  
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 2,
    max: 50,
    validate: {
      isAlpha: true,
    }
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },

  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    min: 6,
    max: 20,  
    validate: {
      isAlphanumeric: true,
      is: /^[a-zA-Z][a-zA-Z0-9_]*$/,
    }
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

export default (sequelize, DataTypes) => {

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



