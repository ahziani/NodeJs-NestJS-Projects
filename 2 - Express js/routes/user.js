const express = require('express');
const router = express();
const { getProducts } = require('../controllers/products')

router.get('/', getProducts);

module.exports = router;