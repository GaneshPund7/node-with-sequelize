const {DataTypes }=  require('sequelize');
const sequelize = require('../../utils/db/db');

const Product = sequelize.define('Product', {
    productName: {
        type: DataTypes.STRING,
        allowNull : false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false

    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: false
});
module.exports =  Product;

Product.associate = (models)=>{
    // Product.belongsTo(models.Role, {through: models.role, as: 'roles'})
}

Product.sync({ force: true})