const sequelize = require('../../utils/db/db');
const { DataTypes } = require('sequelize');
const models = require('../../index')
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
    }
},
    {
        tableName: 'users',
        timestamps: false
    });

    
    User.associate = (models) =>{
        User.hasOne(models.Profile, { as: 'profiles', foreignKey: 'userId' });
        User.hasMany(models.Employee, { as: 'employees', foreignKey: 'userId' });
    }
    
    User.sync({alter: true});
    module.exports = User;