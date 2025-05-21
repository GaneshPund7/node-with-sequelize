const sequelize = require('../../utils/db/db');
const { DataTypes } = require('sequelize');
const models = require('../../utils/db/index');

const Comment = sequelize.define('Comment',{
    comment:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    userId:{
        type: DataTypes.STRING,
    }
},{

    tableName: 'comments',
    timestamps: false
})

//  module.exports = Comment
Comment.sync({force: true })

Comment.associate = (models)=>{
    // Comment.belongsTo(models.User, { foreginKey: 'userId', as: 'users'});
}
// const user = require()
   module.exports = Comment;

// const sequelize = require('../../utils/db/db');
// const { DataTypes } = require('sequelize');

// const Comment = sequelize.define('Comment', {
//   comment: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//   },
// }, {
//   tableName: 'comments',
//   timestamps: false,
// });

// Comment.associate = (models) => {
//   Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
// };

// module.exports = Comment;

// Comment.sync({ alter: true});