const express = require('express');
const { getRole, postRole } = require('./role.controller');
const role = express.Router();

role.get('/', getRole);
role.post('/', postRole);

module.exports = role