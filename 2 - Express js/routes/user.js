const express = require('express');
const router = express();
const { getProducts, getProduct } = require('../controllers/products')

router.get('/', getProducts);
router.get('/product/:id', getProduct);

module.exports = router;