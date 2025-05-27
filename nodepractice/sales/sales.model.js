const { DataTypes } = require('sequelize');
const sequelize  = require('../db/db');

const Sales = sequelize.define('Sales',{
    sale_id : {
        types: DataTypes.STRING,
        allowNull: false
    },
    store_id: {
        types: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        types: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        types: DataTypes.STRING,
        allowNull: false    
    }

},{
    tableName: 'Sales'
})
Sales.belongsTo(models.Products)
Sales.belongsTo(models.Stores)

module.exports= Sales;