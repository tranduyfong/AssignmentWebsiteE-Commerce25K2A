const express = require('express');
const { default: getHomePage, default: getProductPage } = require('../controllers/product.controller');
const { default: getUserPage } = require('../controllers/user.controller');
const { getIntroductPage } = require('../controllers/web.controller');
const router = express.Router();

router.get('/', getHomePage);
router.get('/product', getProductPage);
router.get('/user', getUserPage);
router.get('/introduct', getIntroductPage);

module.exports = router;