const { VNPay, ignoreLogger } = require('vnpay');
require('dotenv').config();

const vnpayInstance = new VNPay({
    tmnCode: process.env.VNP_TMN_CODE,
    secureSecret: process.env.VNP_HASH_SECRET,
    vnpayHost: 'https://sandbox.vnpayment.vn',
    hashAlgorithm: 'SHA512',
    loggerFn: ignoreLogger,
    testMode: true,
});

module.exports = vnpayInstance;