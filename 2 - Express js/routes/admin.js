const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product Page'
    })
})

router.post('/post-product', (req, res, next) => {
    products.push({
        name: req.body.title,
        price: req.body.price
    });
    
    res.redirect('/')
});

exports.router = router;
exports.products = products;