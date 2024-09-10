const express = require('express');
const router = express.Router();
const { addProduct, postProduct } = require('../controllers/products')

router.get('/add-product', addProduct);
router.post('/post-product', postProduct);

module.exports = router;