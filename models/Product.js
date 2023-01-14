// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      // validate: {
      // }
      // Still needs to validate that it is a decimal
    }
  },
  {
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      // validate: {
        
      // }
      // Validate that this is numeric
    }
  },
  {
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

// {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true
//   }
// },
// {
//   product_name: {
//     type: DataTypes.STRING,
    
//   }
// },
// {
//   price: {
//     type: DataTypes.INTEGER,

//   }
// },
// {
//   stock: {
//     type: DataTypes.INTEGER,
//   }
// },
// {
//   category_id: {
//     type: DataTypes.INTEGER,
//   }
// },