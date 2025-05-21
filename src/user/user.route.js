const express = require('express');
const { getUser,postUser, addEmployee} = require('./user.controller')
const { userLogin } = require('../../src/auth/user.login');
const user = express.Router();

user.get('/', getUser);
user.post('/', postUser);
user.post('/emp', addEmployee);
user.post('/login', userLogin);



module.exports = user;
