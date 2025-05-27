const express = require('express');
const products = express.Router();
const {getProduct, addProduct } = require('./product.controller');
const { checkpermission, checkAuths } = require('../auth/checkauth');
const { authenticateToken } = require('../../utils/middleware/checkPermission');
// const checkAuths = require('../auth/checkUserAuth');
products.get('/', getProduct);
products.post('/',authenticateToken, checkAuths, addProduct);


module.exports = products