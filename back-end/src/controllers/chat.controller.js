const Message = require('../models/message');

const getChatHistory = async (req, res) => {
    try {
        const { roomId } = req.params;

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
        const rooms = await Message.aggregate([
            { $sort: { createdAt: -1 } },
            {
                $group: {
                    _id: "$roomId",
                    lastMessage: { $first: "$text" },
                    updatedAt: { $first: "$createdAt" }
                }
            },
            { $sort: { updatedAt: -1 } }
        ]);

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