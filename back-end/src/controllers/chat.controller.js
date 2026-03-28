// File: controllers/chat.controller.js
const Message = require('../models/message'); // Đường dẫn tới file model Message bạn vừa tạo

const getChatHistory = async (req, res) => {
    try {
        const { roomId } = req.params; // Lấy ID phòng (ID khách) từ URL

        // Tìm tất cả tin nhắn của phòng này, sắp xếp theo thời gian cũ -> mới (createdAt: 1)
        const messages = await Message.find({ roomId }).sort({ createdAt: 1 });

        return res.status(200).json({
            success: true,
            data: messages
        });
    } catch (error) {
        console.error("Lỗi lấy lịch sử chat:", error);
        return res.status(500).json({ success: false, message: "Lỗi máy chủ" });
    }
};

const getChatRooms = async (req, res) => {
    try {
        // Nhóm theo roomId, lấy tin nhắn cuối cùng (mới nhất)
        const rooms = await Message.aggregate([
            { $sort: { createdAt: -1 } }, // Sắp xếp mới nhất lên đầu
            {
                $group: {
                    _id: "$roomId",
                    lastMessage: { $first: "$text" },
                    updatedAt: { $first: "$createdAt" }
                }
            },
            { $sort: { updatedAt: -1 } } // Sắp xếp phòng nào có tin nhắn mới nhất lên đầu danh sách
        ]);

        // Đổi _id thành roomId cho Frontend dễ xài
        const formattedRooms = rooms.map(room => ({
            roomId: room._id,
            lastMessage: room.lastMessage
        }));

        return res.status(200).json({ success: true, data: formattedRooms });
    } catch (error) {
        console.error("Lỗi lấy danh sách phòng chat:", error);
        return res.status(500).json({ success: false, message: "Lỗi máy chủ" });
    }
};

module.exports = { getChatHistory, getChatRooms };