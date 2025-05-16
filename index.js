const User = require('./src/modal/user.modal');
const Profile = require('./src/modal/profile.modal');
const Employee = require('./src/modal/employee.modal');

const models = { User, Profile, Employee };

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
