const express = require('express');
const { getProduct, addProduct } = require('./product.controller');
const product = express.Router();

// product.get('/', getProduct);
product.post('/', addProduct);

module.exports = product