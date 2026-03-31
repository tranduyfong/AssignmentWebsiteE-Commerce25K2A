const express = require('express');
const { getChatHistory, getChatRooms } = require('../controllers/chat.controller');
const { middlewareController } = require('../middleware/jwt.middleware');
const router = express.Router();

router.get('/rooms', middlewareController.checkValidJWT, middlewareController.roleStaff, getChatRooms);
router.get('/history/:roomId', middlewareController.checkValidJWT, getChatHistory);

module.exports = router;