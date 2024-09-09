const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/post-product" method="POST">'+
        'Title : <input type="text" name="title"/>'+
        '<button>Add</button>'+
    '</form>')
})

router.post('/post-product', (req, res, next) => {
    const product = req.body.title;
    fs.writeFileSync('file.txt', product);
    res.redirect('/')
});

module.exports = router;