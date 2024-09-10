const express = require('express');
const router = express();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home Page',
        products: adminData.products
    });
});

module.exports = router;