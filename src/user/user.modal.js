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
        User.hasOne(models.Profile, { as: 'profiles', foreignKey: 'userId' });
        // User.hasMany(models.Employee, { as: 'employees', foreignKey: 'userId' });
        // User.hasOne(models.Product, { as: 'roles', foreignKey: 'userId' });
        User.belongsTo(models.Roles,{ foreignKey: 'roleId', as :'roles'})
    }
    
    module.exports = User;
// const sequelize = require('../../utils/db/db');
// const { DataTypes } = require('sequelize');

// const User = sequelize.define('User', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     tableName: 'users',
//     timestamps: false,
// });

// User.associate = (models) => {
//     User.hasOne(models.Profile, { as: 'profile', foreignKey: 'userId' });
//     User.hasMany(models.Comment, { as: 'comments', foreignKey: 'userId' });
// };
// // User.sync({alter: true});

// module.exports = User;
