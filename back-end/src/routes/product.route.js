const express = require('express');
const { getProductPage, createProduct, deleteProduct, updateProduct, getProductById } = require('../controllers/product.controller');
const router = express.Router();

router.get('/', getProductPage);
router.post('/', createProduct);
router.get('/:idProduct', getProductById);
router.delete('/:idProduct', deleteProduct);
router.put('/:idProduct', updateProduct);

module.exports = router;