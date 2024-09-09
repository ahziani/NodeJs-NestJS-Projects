const express = require('express');
const router = express();
const path = require('path')

router.get('/', (req, res, next) => {
    res.render('home');
});

module.exports = router;