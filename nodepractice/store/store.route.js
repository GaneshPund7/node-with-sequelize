const express =require('express');
const { getStore, addStore } = require('./store.controller');
const store = express.Router();

store.get('/', getStore);
store.post('/', addStore);

module.exports = store