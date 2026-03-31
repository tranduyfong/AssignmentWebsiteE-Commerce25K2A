import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { UserOutlined, SendOutlined } from '@ant-design/icons';
import { Layout, List, Avatar, Input, Button, Typography, Empty, Badge } from "antd";
import { getChatHistory, getChatRooms } from "../../services/api.service";

const { Sider, Content } = Layout;
const { Text } = Typography;

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
        <div style={{ padding: '24px', height: '80vh', backgroundColor: '#f5f5f5' }}>
            <Layout
                style={{
                    maxWidth: '1200px',
                    height: '100%',
                    margin: '0 auto',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}
            >
                <Sider width={320} theme="light" style={{ borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', fontWeight: 'bold', fontSize: '16px' }}>
                        Tin nhắn chờ ({chatRooms.length})
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        <List
                            itemLayout="horizontal"
                            dataSource={chatRooms}
                            locale={{ emptyText: <Empty description="Chưa có tin nhắn nào" image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}
                            renderItem={(room) => (
                                <List.Item
                                    onClick={() => joinRoom(room.roomId)}
                                    style={{
                                        padding: '12px 16px',
                                        cursor: 'pointer',
                                        backgroundColor: currentRoom === room.roomId ? '#e6f4ff' : 'transparent',
                                        borderBottom: '1px solid #f0f0f0',
                                        transition: 'background-color 0.2s'
                                    }}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar size="large" icon={<UserOutlined />} />}
                                        title={<Text strong>Khách #{room.roomId.slice(-6)}</Text>}
                                        description={<Text type="secondary" ellipsis>{room.lastMessage}</Text>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </Sider>

                {/* KHU VỰC CHAT CHÍNH */}
                <Content style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
                    {currentRoom ? (
                        <>
                            {/* Header phòng chat */}
                            <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Badge dot status="success" offset={[-4, 30]}>
                                    <Avatar size="large" style={{ backgroundColor: '#f59e0b' }} icon={<UserOutlined />} />
                                </Badge>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Khách #{currentRoom.slice(-6)}</div>
                                    <div style={{ fontSize: '12px', color: '#52c41a' }}>Đang hoạt động</div>
                                </div>
                            </div>

                            {/* Danh sách tin nhắn */}
                            <div style={{ flex: 1, padding: '24px', overflowY: 'auto', backgroundColor: '#fafafa' }}>
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: msg.senderType === "admin" ? "flex-end" : "flex-start",
                                            marginBottom: '16px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                maxWidth: '70%',
                                                padding: '10px 16px',
                                                borderRadius: '16px',
                                                backgroundColor: msg.senderType === "admin" ? "#1677ff" : "#fff",
                                                color: msg.senderType === "admin" ? "#fff" : "#000",
                                                border: msg.senderType === "admin" ? "none" : "1px solid #d9d9d9",
                                                wordWrap: 'break-word'
                                            }}
                                        >
                                            {msg.text}
                                        </div>
                                        <Text style={{ fontSize: '11px', marginTop: '4px' }} type="secondary">
                                            {msg.senderType === "admin" ? "Bạn" : "Khách hàng"}
                                        </Text>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input gửi tin nhắn */}
                            <div style={{ padding: '16px', borderTop: '1px solid #f0f0f0', backgroundColor: '#fff' }}>
                                <Input
                                    size="large"
                                    placeholder="Nhập tin nhắn..."
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    onPressEnter={sendMessage}
                                    style={{ borderRadius: '24px' }}
                                    suffix={
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            icon={<SendOutlined />}
                                            onClick={sendMessage}
                                        />
                                    }
                                />
                            </div>
                        </>
                    ) : (
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Empty description="Chọn khách để chat" image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </div>
                    )}
                </Content>
            </Layout>
        </div>
    );
};

export default AdminChat;