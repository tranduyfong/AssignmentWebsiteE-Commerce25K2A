const express = require('express');
const router = express.Router();
const { getUser, createUser, getAccount } = require('../controllers/user.controller');
const { middlewareController } = require('../middleware/jwt.middleware');
const { authControllers } = require('../controllers/auth.controller');

router.get('/', middlewareController.checkValidJWT, middlewareController.roleAdmin, getUser);
router.get('/account', middlewareController.checkValidJWT, getAccount);
router.post('/', createUser)
router.post('/login', authControllers.loginUser)
router.post('/refresh', authControllers.requestRefreshToken)
module.exports = router;