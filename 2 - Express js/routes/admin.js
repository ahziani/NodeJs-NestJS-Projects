const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../views/add-product.html'))
})

router.post('/post-product', (req, res, next) => {
    const product = req.body.title;
    fs.writeFileSync('file.txt', product);
    res.redirect('/')
});

module.exports = router;