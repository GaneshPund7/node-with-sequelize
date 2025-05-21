const User = require('../../src/user/user.modal');
const Profile = require('../../src/profile/profile.modal');
const Employee = require('../../src/modal/employee.modal');
const Comment = require('../../src/comments/comment.modal');
const Roles = require('../../src/role/role.modal');
const Product = require('../../src/products/products.modal')
const models = { User, Profile, Employee, Comment , Roles, Product};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;

 