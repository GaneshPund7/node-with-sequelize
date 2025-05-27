const express = require('express');
const product = require('./product/product.route');
// const sale = require('./sales/sales.route');
// const store = require('./store/store.route');
const app = express();
const port = 3000;

app.use(express.json());
// app.use('/product', product);
// app.use('/sale', sale);
// app.use('/store', store);

app.listen(port, ()=>{ console.log('Server iss running')});

