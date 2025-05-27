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
    UserId: {type: DataTypes.INTEGER},

    CommentId: {type: DataTypes.INTEGER},
},
    {
        tableName: 'profiles',
        timestamps: false
    });
    
    
    Profile.associate = (models) =>{
        Profile.belongsTo(models.User , {as: 'profiles'});
        Profile.belongsTo(models.Comment, { as : 'comments'} );        
    }
    module.exports = Profile;

    Profile.sync({ alter: true });