const express = require('express');
const router = express.Router();
const { addProduct, postProduct, removeProduct, editProduct, postEditProduct } = require('../controllers/products')

router.get('/add-product', addProduct);
router.post('/post-product', postProduct);

router.get('/edit-product/:id', editProduct);
router.post('/edit-product', postEditProduct);

router.get('/remove-product/:id', removeProduct);

module.exports = router;