const express = require('express');
const { getPermssion, addPermission } = require('./permisson.controller');
const permission = express.Router();

permission.get('/', getPermssion);
permission.post('/', addPermission);
module.exports = permission