var express = require('express');
var router = express.Router();
let ProductCollection = require('../models/ProductSchema');

// standard home page
router.get('/', function(req, res) {
  res.render('index', { title: 'Classwork' });
});

//get all products
router.get('/product',(req,res) => {
  ProductCollection.find({},(errors,results) => {
    if(errors) res.send(errors);
    else res.send(results);
  })
});

// add a product
router.post('/product',(req,res) => {
  ProductCollection.create({
    product_ID: req.body.product_ID,
    price: req.body.price,
    quantity: req.body.quantity,
  },(errors) => {
    if(errors) res.send(errors);
  })
});

module.exports = router;
