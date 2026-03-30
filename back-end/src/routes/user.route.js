const express = require('express');
const router = express.Router();
const { getUser, createUser, getAccount, getCartByUserId, addToCart, deleteInCart } = require('../controllers/user.controller');
const { middlewareController } = require('../middleware/jwt.middleware');
const { authControllers } = require('../controllers/auth.controller');

router.get('/', middlewareController.checkValidJWT, middlewareController.roleAdmin, getUser);
router.get('/account', middlewareController.checkValidJWT, getAccount);
router.post('/', createUser)
router.post('/login', authControllers.loginUser)
router.post('/refresh', authControllers.requestRefreshToken)
router.get('/cart', middlewareController.checkValidJWT, getCartByUserId)
router.post('/cart', middlewareController.checkValidJWT, addToCart)
router.delete('/cart/:idCart', middlewareController.checkValidJWT, deleteInCart);
module.exports = router;