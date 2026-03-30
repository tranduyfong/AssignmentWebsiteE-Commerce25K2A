import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { UserOutlined, SendOutlined } from '@ant-design/icons';
import { getChatHistory, getChatRooms } from "../../services/api.service";

const AdminChat = () => {
    const [chatRooms, setChatRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");

    const messagesEndRef = useRef(null);
    const socketRef = useRef(null);
    const currentRoomRef = useRef(null);

    useEffect(() => {
        const fetchRooms = async () => {
            const res = await getChatRooms();
            if (res && res.success) {
                setChatRooms(res.data);
            }
        };
        fetchRooms();
    }, []);

    useEffect(() => {
        socketRef.current = io.connect("http://localhost:3000");

        socketRef.current.on("connect", () => {
            if (currentRoomRef.current) {
                socketRef.current.emit("join_room", currentRoomRef.current);
            }
        });

        const handleReceiveMsg = (data) => {
            if (data.roomId === currentRoomRef.current) {
                setMessages((prev) => [...prev, data]);
            }
        };

        const handleUpdateList = (data) => {
            setChatRooms((prevRooms) => {
                const roomExists = prevRooms.find(r => r.roomId === data.roomId);

                if (roomExists) {
                    const filtered = prevRooms.filter(r => r.roomId !== data.roomId);
                    return [{ roomId: data.roomId, lastMessage: data.text }, ...filtered];
                } else {
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

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const joinRoom = async (roomId) => {
        setCurrentRoom(roomId);
        currentRoomRef.current = roomId;

        socketRef.current.emit("join_room", roomId);

        const res = await getChatHistory(roomId);
        if (res && res.success) {
            setMessages(res.data);
        } else {
            setMessages([]);
        }
    };

    const sendMessage = async () => {
        if (text.trim() !== "" && currentRoom && socketRef.current) {
            const messageData = {
                roomId: currentRoom,
                senderType: "admin",
                text: text,
            };

            socketRef.current.emit("send_message", messageData);
            setText("");
        }
    };

    return (
        <div className="flex h-[calc(100vh-100px)] bg-gray-100 p-6 mt-40">
            <div className="flex w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">

                <div className="w-1/3 border-r border-gray-200 bg-gray-50 flex flex-col">
                    <div className="p-4 bg-white border-b font-bold text-lg">
                        Tin nhắn chờ ({chatRooms.length})
                    </div>

                    <div className="overflow-y-auto flex-1 p-2">
                        {chatRooms.length === 0 ? (
                            <p className="text-center text-gray-400 mt-10 text-sm">
                                Chưa có tin nhắn nào
                            </p>
                        ) : (
                            chatRooms.map((room) => (
                                <div
                                    key={room.roomId}
                                    onClick={() => joinRoom(room.roomId)}
                                    className={`flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer transition 
                                        ${currentRoom === room.roomId
                                            ? 'bg-blue-100 border-blue-300'
                                            : 'bg-white hover:bg-gray-100'
                                        }`}
                                >
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                        <UserOutlined className="text-white text-lg" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-sm truncate">
                                            Khách #{room.roomId.slice(-6)}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">
                                            {room.lastMessage}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="w-2/3 flex flex-col bg-white">
                    {currentRoom ? (
                        <>
                            <div className="p-4 border-b flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center">
                                    <UserOutlined className="text-white text-lg" />
                                </div>
                                <div>
                                    <p className="font-bold">
                                        Khách #{currentRoom.slice(-6)}
                                    </p>
                                    <p className="text-xs text-green-500">● Đang hoạt động</p>
                                </div>
                            </div>

                            <div className="flex-1 p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col max-w-[70%] 
                                            ${msg.senderType === "admin"
                                                ? "self-end items-end"
                                                : "self-start items-start"
                                            }`}
                                    >
                                        <div
                                            className={`px-4 py-2 rounded-2xl text-sm 
                                                ${msg.senderType === "admin"
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-white border"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>

                                        <span className="text-[10px] text-gray-400 mt-1">
                                            {msg.senderType === "admin" ? "Bạn" : "Khách hàng"}
                                        </span>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            <div className="p-4 border-t">
                                <div className="flex items-center gap-2 bg-gray-50 border rounded-full px-4 py-2">
                                    <input
                                        type="text"
                                        className="flex-1 bg-transparent outline-none text-sm"
                                        placeholder="Nhập tin nhắn..."
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") sendMessage();
                                        }}
                                    />
                                    <button
                                        onClick={sendMessage}
                                        className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full"
                                    >
                                        <SendOutlined />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-400">
                            Chọn khách để chat
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AdminChat;