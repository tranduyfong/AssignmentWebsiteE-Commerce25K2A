import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { getChatHistory } from "../../services/api.service";
import { MessageOutlined, CloseOutlined } from '@ant-design/icons';

const ChatWidget = ({ userId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Chỉ cuộn xuống khi khung chat đang mở và có tin nhắn mới
    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messageList, isOpen]);


    useEffect(() => {
        if (!userId || !isOpen) return;

        socketRef.current = io.connect("http://localhost:3000");
        socketRef.current.emit("join_room", userId);

        const fetchHistory = async () => {
            const res = await getChatHistory(userId);
            if (res && res.success) {
                setMessageList(res.data);
            }
        };
        fetchHistory();

        const handleReceiveMsg = (data) => {
            setMessageList((list) => [...list, data]);
        };
        socketRef.current.on("receive_message", handleReceiveMsg);

        return () => {
            if (socketRef.current) {
                socketRef.current.off("receive_message", handleReceiveMsg);
                socketRef.current.disconnect();
            }
        };
    }, [userId, isOpen]);

    const sendMessage = async () => {
        if (currentMessage.trim() !== "" && userId && socketRef.current) {
            const messageData = {
                roomId: userId,
                senderType: "user",
                text: currentMessage,
            };

            await socketRef.current.emit("send_message", messageData);
            setCurrentMessage("");
        }
    };

    return (
        // Wrapper cố định ở góc dưới phải
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" style={{ fontSize: "15px" }}>

            {/* 1. KHUNG CHAT (Chỉ hiện khi isOpen === true) */}
            <div
                className={`transition-all duration-300 ease-in-out origin-bottom-right ${isOpen ? 'opacity-100 scale-100 mb-4' : 'opacity-0 scale-0 h-0 w-0 mb-0'} w-80 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden flex flex-col`}
            >
                {/* Header với nút tắt */}
                <div className="bg-[#f59e0b] text-white p-3 font-bold shadow-sm flex justify-between items-center z-10">
                    <span>Chat với Nhân viên hỗ trợ</span>
                    {/* Nút thu nhỏ (X) */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-amber-600 transition"
                    >
                        <CloseOutlined className="text-sm" />
                    </button>
                </div>

                {/* Hiển thị tin nhắn */}
                <div className="h-72 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
                    {messageList.length === 0 ? (
                        <p className="text-center text-gray-400 text-sm mt-10">Hãy gửi tin nhắn để bắt đầu!</p>
                    ) : (
                        messageList.map((msg, index) => (
                            <div key={index} className={`flex flex-col max-w-[80%] ${msg.senderType === "user" ? "self-end items-end" : "self-start items-start"}`}>
                                <div className={`px-3 py-2 rounded-xl text-sm shadow-sm ${msg.senderType === "user" ? "bg-[#ffcc00] text-gray-900 rounded-br-sm" : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"}`}>
                                    {msg.text}
                                </div>
                                <span className="text-[10px] text-gray-400 mt-1">{msg.senderType === "user" ? "Bạn" : "CSKH Soccer Beck"}</span>
                            </div>
                        ))
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Ô nhập tin nhắn */}
                <div className="p-1 bg-white border-t border-gray-100">
                    <div className="flex items-center bg-gray-50 border border-gray-300 rounded-full px-1 py-1 focus-within:border-[#f59e0b] focus-within:bg-white transition shadow-inner">
                        <input
                            type="text"
                            className="bg-transparent outline-none text-sm py-1"
                            placeholder="Nhập tin nhắn..."
                            value={currentMessage}
                            onChange={(e) => setCurrentMessage(e.target.value)}
                            onKeyPress={(e) => { e.key === "Enter" && sendMessage(); }}
                        />
                        <button onClick={sendMessage} className="text-[#f59e0b] font-bold hover:text-amber-600 transition w-1/3 m-0!">
                            Gửi
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. NÚT BONG BÓNG (Nổi bọt) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-gray-100 text-gray-500 hover:bg-gray-200' : 'bg-[#f59e0b] text-white hover:bg-amber-600'}`}
            >
                {/* Đổi icon tùy theo trạng thái mở/đóng */}
                {isOpen ? <CloseOutlined className="text-xl" /> : <MessageOutlined className="text-2xl" />}
            </button>
        </div>
    );
};

export default ChatWidget;