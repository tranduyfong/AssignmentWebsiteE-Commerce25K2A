import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { UserOutlined, SendOutlined } from '@ant-design/icons';
import { getChatHistory } from "../../services/api.service";


const AdminChat = () => {
    // Danh sách các phòng (khách hàng) đang chat
    const [chatRooms, setChatRooms] = useState([]);
    // Phòng đang được Admin chọn để chat
    const [currentRoom, setCurrentRoom] = useState(null);
    // Danh sách tin nhắn của phòng đang chọn
    const [messages, setMessages] = useState([]);
    // Nội dung tin nhắn Admin đang gõ
    const [text, setText] = useState("");

    const messagesEndRef = useRef(null);
    const socketRef = useRef(null); // THÊM DÒNG NÀY

    // Tự động cuộn xuống cuối khi có tin nhắn mới
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);

    // 1. LẮNG NGHE SỰ KIỆN TỪ BACKEND
    useEffect(() => {
        // KHỞI TẠO SOCKET KHI VÀO TRANG ADMIN
        socketRef.current = io.connect("http://localhost:3000");

        // A. Lắng nghe tin nhắn gửi đến phòng hiện tại đang mở
        const handleReceiveMsg = (data) => {
            // Chỉ hiển thị tin nhắn nếu nó thuộc về cái phòng Admin đang bấm vào
            setMessages((prev) => [...prev, data]);
        };

        // B. Lắng nghe kênh "Tổng đài" để cập nhật danh sách bên trái
        const handleUpdateList = (data) => {
            setChatRooms((prevRooms) => {
                // Kiểm tra xem khách này đã có trong danh sách bên trái chưa
                const roomExists = prevRooms.find(r => r.roomId === data.roomId);
                if (roomExists) {
                    // Nếu có rồi thì đẩy họ lên đầu danh sách
                    const filtered = prevRooms.filter(r => r.roomId !== data.roomId);
                    return [{ roomId: data.roomId, lastMessage: data.text }, ...filtered];
                } else {
                    // Nếu khách mới tinh thì thêm vào
                    return [{ roomId: data.roomId, lastMessage: data.text }, ...prevRooms];
                }
            });
        };

        socketRef.current.on("receive_message", handleReceiveMsg);
        socketRef.current.on("admin_update_list", handleUpdateList);

        return () => {
            if (socketRef.current) {
                socketRef.current.off("receive_message", handleReceiveMsg);
                socketRef.current.off("admin_update_list", handleUpdateList);
                socketRef.current.disconnect();
            }
        };
    }, []);

    // 2. KHI ADMIN CLICK VÀO 1 KHÁCH HÀNG BÊN TRÁI
    const joinRoom = async (roomId) => {
        setCurrentRoom(roomId);
        // Báo cho BE biết Admin chui vào phòng này
        socketRef.current.emit("join_room", roomId);

        // GỌI API LẤY LỊCH SỬ CHAT TRONG DATABASE
        const res = await getChatHistory(roomId);
        if (res && res.success) {
            setMessages(res.data); // Đổ dữ liệu cũ vào màn hình
        } else {
            setMessages([]); // Nếu lỗi hoặc chưa có gì thì để trống
        }
    };

    // 3. ADMIN GỬI TIN NHẮN
    const sendMessage = async () => {
        if (text.trim() !== "" && currentRoom && socketRef.current) {
            const messageData = {
                roomId: currentRoom,
                senderType: "admin", // Phân biệt đây là Admin gửi
                text: text,
            };

            // NHỚ ĐỔI THÀNH socketRef.current
            await socketRef.current.emit("send_message", messageData);
            setText("");
        }
    };

    return (
        <div className="flex h-[calc(100vh-100px)] bg-gray-100 p-6 mt-40">
            <div className="flex w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">

                {/* CỘT TRÁI: DANH SÁCH KHÁCH HÀNG (Sidebar) */}
                <div className="w-1/3 border-r border-gray-200 bg-gray-50 flex flex-col">
                    <div className="p-4 bg-white border-b border-gray-200 font-bold text-lg text-gray-800">
                        Tin nhắn chờ ({chatRooms.length})
                    </div>
                    <div className="overflow-y-auto flex-1 p-2">
                        {chatRooms.length === 0 ? (
                            <p className="text-center text-gray-400 mt-10 text-sm">Chưa có tin nhắn nào</p>
                        ) : (
                            chatRooms.map((room, index) => (
                                <div
                                    key={index}
                                    onClick={() => joinRoom(room.roomId)}
                                    className={`flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer transition ${currentRoom === room.roomId ? 'bg-blue-100 border-blue-300' : 'bg-white hover:bg-gray-100 border border-transparent'}`}
                                >
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                        <UserOutlined className="text-white text-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-sm text-gray-800 truncate">Khách #{room.roomId.slice(-6)}</p>
                                        <p className="text-xs text-gray-500 truncate">{room.lastMessage}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* CỘT PHẢI: KHUNG CHAT CHI TIẾT */}
                <div className="w-2/3 flex flex-col bg-white">
                    {currentRoom ? (
                        <>
                            {/* Header khung chat */}
                            <div className="p-4 border-b border-gray-200 bg-white flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center">
                                    <UserOutlined className="text-white text-lg" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">Đang chat với: Khách #{currentRoom.slice(-6)}</p>
                                    <p className="text-xs text-green-500 font-medium">● Đang hoạt động</p>
                                </div>
                            </div>

                            {/* Khu vực hiển thị tin nhắn */}
                            <div className="flex-1 p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex flex-col max-w-[70%] ${msg.senderType === "admin" ? "self-end items-end" : "self-start items-start"}`}>
                                        <div className={`px-4 py-2 rounded-2xl text-sm shadow-sm ${msg.senderType === "admin" ? "bg-blue-600 text-white rounded-tr-sm" : "bg-white border border-gray-200 text-gray-800 rounded-tl-sm"}`}>
                                            {msg.text}
                                        </div>
                                        <span className="text-[10px] text-gray-400 mt-1">{msg.senderType === "admin" ? "Bạn" : "Khách hàng"}</span>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Khu vực nhập tin nhắn */}
                            <div className="p-4 bg-white border-t border-gray-200">
                                <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-full px-4 py-2 focus-within:border-blue-500 focus-within:bg-white transition">
                                    <input
                                        type="text"
                                        className="flex-1 bg-transparent outline-none text-sm"
                                        placeholder={`Nhắn tin cho Khách #${currentRoom.slice(-6)}...`}
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        onKeyPress={(e) => { e.key === "Enter" && sendMessage(); }}
                                    />
                                    <button onClick={sendMessage} className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                                        <SendOutlined className="-ml-1" />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        // Màn hình chờ khi chưa chọn khách nào
                        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 mb-4 text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                            </svg>
                            <p className="text-lg font-medium">Chọn một khách hàng để bắt đầu trò chuyện</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AdminChat;