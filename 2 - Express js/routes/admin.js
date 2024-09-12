const express = require('express');
const router = express.Router();
const { addProduct, postProduct, removeProduct, editProduct, postEditProduct } = require('../controllers/products')

// router.get('/add-product', addProduct);
router.post('/post-product', postProduct);

// router.get('/edit-product/:id', editProduct);
router.put('/edit-product/:id', postEditProduct);

router.delete('/remove-product/:id', removeProduct);

module.exports = router;