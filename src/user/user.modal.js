const sequelize = require('../../utils/db/db');
const { DataTypes } = require('sequelize');
const models = require('../../utils/db/index')
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
     roleId: {
        type: DataTypes.INTEGER,
        // allowNull: false
    }
},
    {
        tableName: 'users',
        timestamps: false
    });

    User.associate = (models) =>{
        // User.hasOne(models.Profile, { as: 'profiles', foreignKey: 'UserId' });
        User.belongsTo(models.Role, { foreignKey: 'roleId'})
        User.belongsToMany(models.Comment, { 
            through: models.Profile, 
            foreignKey: 'UserId', 
            otherKey: 'commentId',
            as: 'comments'
        })
    }
    module.exports = User;
 User.sync({ alter: true}); 