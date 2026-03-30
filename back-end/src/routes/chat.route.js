const express = require('express');
const { getChatHistory, getChatRooms } = require('../controllers/chat.controller');
const router = express.Router();

router.get('/rooms', getChatRooms);
router.get('/history/:roomId', getChatHistory);

module.exports = router;