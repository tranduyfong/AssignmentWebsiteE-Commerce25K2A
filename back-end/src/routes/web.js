const express = require('express');
const { getProductPage, createProduct, deleteProduct, updateProduct } = require('../controllers/product.controller');
const { default: getUserPage } = require('../controllers/user.controller');
const { getIntroductPage } = require('../controllers/web.controller');
const router = express.Router();

// API để dùng cho sản phẩm
router.get('/product', getProductPage);
router.post('/product/create', createProduct);
router.delete('/product/delete/:idProduct', deleteProduct);
router.put('/product/update/:idProduct', updateProduct);

// API dùng cho người dùng
router.get('/user', getUserPage);

router.get('/introduct', getIntroductPage);

module.exports = router;