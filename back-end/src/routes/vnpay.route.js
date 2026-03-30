const express = require('express');
const { createPaymentUrl, vnpayReturn } = require('../controllers/vnpay.controller');
const { middlewareController } = require('../middleware/jwt.middleware');
const router = express.Router();

router.post('/', middlewareController.checkValidJWT, createPaymentUrl);
router.get('/', middlewareController.checkValidJWT, vnpayReturn);

module.exports = router;