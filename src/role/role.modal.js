const {DataTypes }  = require('sequelize');
const sequelize = require('../../utils/db/db');

const Role = sequelize.define('Role', {
    roleName: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true      
    },
    description: {
        type: DataTypes.STRING,
        // unique: true,
        allowNull: true
    },

},{ 
    tableName: 'roles',
    timestamps: false

});

Role.associate = (models) =>{
    // Role.hasOne(models.User, { foreignKey: 'RoleId', as :'users'})
    Role.hasOne(models.User, { foreignKey: 'RoleId', as: 'role' });
    // Roles.hasOne(models.Product, { foreignKey: 'RoleId', as : 'products'})
}
module.exports = Role
    Role.sync({ alter: true });