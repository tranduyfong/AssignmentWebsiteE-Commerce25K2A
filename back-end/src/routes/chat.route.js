// File: routes/chat.route.js
const express = require('express');
const { getChatHistory, getChatRooms } = require('../controllers/chat.controller');
const router = express.Router();

// Tạo API GET: /api/chat/history/12345...
router.get('/rooms', getChatRooms); // Thêm dòng này (Bắt buộc phải để trên '/history/:roomId' để tránh bị nhầm route)
router.get('/history/:roomId', getChatHistory);

module.exports = router;