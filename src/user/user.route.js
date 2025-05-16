const express = require('express');
const { getUser,postUser, addEmployee} = require('./user.controller')
const user = express.Router();

user.get('/', getUser);
user.post('/', postUser);
user.post('/emp', addEmployee);


module.exports = user;
