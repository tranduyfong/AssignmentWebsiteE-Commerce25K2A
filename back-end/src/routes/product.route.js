const express = require('express');
const { getProductPage, createProduct, deleteProduct, updateProduct } = require('../controllers/product.controller');
const router = express.Router();

router.get('/', getProductPage);
router.post('/', createProduct);
router.delete('/:idProduct', deleteProduct);
router.put('/:idProduct', updateProduct);

module.exports = router;