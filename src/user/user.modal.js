const sequelize = require('../../utils/db/db');
const { DataTypes } = require('sequelize');
// const Profile = require('./profile.modal')
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
        // unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
     RoleId: {
        type: DataTypes.INTEGER,
        // allowNull: false
    }
},
    {
        tableName: 'users',
        timestamps: false
    });

    User.associate = (models) =>{
        // User.hasOne(models.Profile, {foreignKey: 'UserId',  })
        User.belongsTo(models.Role, { foreignKey: 'RoleId', as: 'role'})
        User.belongsToMany(models.Comment, {  through: models.Profile, foreignKey: 'UserId', 
            otherKey: 'commentId', as: 'comments'
        })
        User.belongsToMany(models.Role, { through: models.Permission, foreignkey: 'UserId' })
    }
    
    module.exports = User;
 User.sync({ alter: true }); 