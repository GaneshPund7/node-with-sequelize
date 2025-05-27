const express =require('express');
const { getSales, addSales } = require('./sales.controller');
const sale = express.Router();

sales.get('/', getSales);
sales.post('/', addSales);

module.exports = sale