const express = require('express');
const sendMailTest = require('../controllers/email.controller');
const router = express.Router();

router.post('/send', sendMailTest);

module.exports = router;