const express = require('express');
const router = express();
const path = require('path')

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home Page'
    });
});

module.exports = router;