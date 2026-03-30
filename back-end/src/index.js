const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const webRouter = require('./routes/config.route');
const connection = require('./configs/database');
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const Message = require('./models/message');

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`Kết nối mới: ${socket.id}`);

    socket.on("join_room", (roomId) => {
        socket.rooms.forEach(room => {
            if (room !== socket.id) {
                socket.leave(room);
            }
        });

        socket.join(roomId);
    });

    socket.on("send_message", async (data) => {
        try {
            const savedMessage = await Message.create({
                roomId: data.roomId,
                senderType: data.senderType,
                text: data.text
            });

            io.to(data.roomId).emit("receive_message", savedMessage);

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
