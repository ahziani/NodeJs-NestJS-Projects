const express = require('express');
const router = express.Router();
const { addProduct, postProduct, removeProduct } = require('../controllers/products')

router.get('/add-product', addProduct);
router.post('/post-product', postProduct);
router.get('/remove-product/:id', removeProduct);

module.exports = router;