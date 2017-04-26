// routes/products-route.js

const express = require('express');
const Product = require('../models/product-model.js');

const productRoutes = express.Router();


productRoutes.get('/products', (req, res, next) => {
  Product.find((err, productList) => {
    if (err) {
      next(err);
      return;
    }
  res.render('products/products-list-view.ejs', {
    products: productList
    });
  });
});


productRoutes.get('/products/new', (req, res, next) => {
  // Just shows a form. Nothing else.
  res.render('products/new-product-view.ejs');
});

module.exports = productRoutes;
