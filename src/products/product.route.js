const express = require('express');
const products = express.Router();
const {getProduct, addProduct } = require('./product.controller');
const { checkpermission } = require('../auth/checkauth');
products.get('/', getProduct);
products.post('/',checkpermission, addProduct);


module.exports = products