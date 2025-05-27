const {DataTypes} = require('sequelize');
const sequelize = require('../../utils/db/db');


const Permission = sequelize.define('Permission', {
    RoleId: {
        type: DataTypes.INTEGER,
        unique: true
    },
    UserId: {
        type: DataTypes.INTEGER

    }
}, {
    tableName: 'permission',
    timestamps: false
});

Permission.associate = (models)=>{
     Permission.belongsTo(models.User)
     Permission.belongsTo(models.Role)
}
Permission.sync({alter: true})
module.exports = Permission
