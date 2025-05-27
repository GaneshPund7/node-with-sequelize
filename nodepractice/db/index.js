 const Products = require("../product/product.model");
const Sales = require("../sales/sales.model");
const Stores = require("../store/store.model");

const models = [ Products, Sales, Stores];

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
module.exports = models