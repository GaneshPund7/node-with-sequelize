// const sequelize = require('')
const sequelize = require('../../utils/db/db');
const { DataTypes } = require('sequelize');

const Employee = sequelize.define('Employee', {

    employeeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    empRole: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'employees',
    timestamps: false,

});

module.exports = Employee;

// Employee.associate = (models) => {
//     Employee.belongsTo(models.User, { foreignKey: "userId", as: "users" })
// }

// Employee.sync({ force: true });