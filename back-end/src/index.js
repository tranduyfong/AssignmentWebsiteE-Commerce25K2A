const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const webRouter = require('./routes/config.route');
const connection = require('./configs/database');
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const Message = require('./models/message'); // Nhớ import Model vừa tạo

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
// Khởi tạo Socket.IO và cấp quyền CORS cho Frontend (cổng 5173)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

// 3. Lắng nghe các kết nối từ Client
io.on("connection", (socket) => {
    console.log(`Kết nối mới: ${socket.id}`);

    // 1. NGƯỜI DÙNG XIN VÀO PHÒNG
    socket.on("join_room", (roomId) => {
        socket.join(roomId);
        console.log(`Socket ${socket.id} đã tham gia phòng: ${roomId}`);
    });

    // 2. LẮNG NGHE TIN NHẮN 1-1 (Trong file server.js)
    socket.on("send_message", async (data) => {
        try {
            const savedMessage = await Message.create({
                roomId: data.roomId,
                senderType: data.senderType,
                text: data.text
            });

            // Phát tin nhắn cho khách hàng trong phòng đó
            io.to(data.roomId).emit("receive_message", savedMessage);

            // THÊM DÒNG NÀY: Báo cáo lên kênh "Tổng đài Admin" để Admin cập nhật danh sách
            io.emit("admin_update_list", savedMessage);

        } catch (error) {
            console.error("Lỗi lưu tin nhắn:", error);
        }
    });

    socket.on("disconnect", () => {
        console.log(`Đã thoát: ${socket.id}`);
    });
});

app.use('/', webRouter);

connection();

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
