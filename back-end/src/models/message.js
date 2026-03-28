const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    // roomId chính là ID của khách hàng (để biết tin nhắn này thuộc về hội thoại nào)
    roomId: { type: String, required: true },

    // Phân biệt ai là người gửi
    senderType: { type: String, enum: ['user', 'admin', 'staff'], required: true },

    // Nội dung tin nhắn
    text: { type: String, required: true },

}, { timestamps: true }); // Tự động có createdAt để sắp xếp tin nhắn cũ -> mới

module.exports = mongoose.model('Message', MessageSchema);