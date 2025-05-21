const sequelize = require('../../utils/db/db');
const { DataTypes } = require('sequelize');

const Profile = sequelize.define('Profile', {
    bio: {
        type: DataTypes.STRING,
        allowNull: false
        // unique: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {type: DataTypes.INTEGER},

    commentId: {type: DataTypes.INTEGER},
},
    {
        tableName: 'profiles',
        timestamps: false
    });
    
    
    Profile.associate = (models) =>{
        Profile.belongsTo(models.User, { foreignKey: 'userId' , as: 'users' });      
    }

    Profile.sync({ alter: true});
module.exports = Profile;
// const sequelize = require('../../utils/db/db');
// const { DataTypes } = require('sequelize');

// const Profile = sequelize.define('Profile', {
//   bio: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   address: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//   },
// }, {
//   tableName: 'profiles',
//   timestamps: false,
// });

// Profile.associate = (models) => {
//   Profile.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
// };

// module.exports = Profile;
