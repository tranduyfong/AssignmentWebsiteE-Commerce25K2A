const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true
    },
    senderType: {
        type: String,
        enum: ['user', 'admin', 'staff'],
        required: true
    },
    text: {
        type: String,
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);