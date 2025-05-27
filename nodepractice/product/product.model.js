 
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
 
const Products = sequelize.define('Product',{
    p_name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    p_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    tableName: 'Product'
})
Products.associate = (models)=>{
Products.belongsToMany(models.Stores, { through: models.Sales, foreignKey: 'product_id'})
}

module.exports= Products;