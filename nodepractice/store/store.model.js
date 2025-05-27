const { DataTypes } = require('sequelize');
const  sequelize = require('../db/db');

const Stores = sequelize.define('Stores',{
    
    store_id: {
        types: DataTypes.INTEGER,
        allowNull: false
    },
    store_name: {
        types: DataTypes.STRING,
        allowNull: false
    },
   
    location: {
        types: DataTypes.STRING,
        allowNull: false    
    }

},{
    tableName: 'Stores'
})

Stores.associate = (models)=>{
Stores.belongsToMany(models.Products, { through: models.Sales, foreignKey: 'store_id'})
}
module.exports= Stores;