import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { getChatHistory } from "../../services/api.service";
import { MessageOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Input, Typography, Empty } from "antd";

const { Text } = Typography;

const ChatWidget = ({ userId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

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
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>

            <div
                style={{
                    width: '320px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    transformOrigin: 'bottom right',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isOpen ? 'scale(1)' : 'scale(0)',
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? '420px' : '0px',
                    marginBottom: isOpen ? '16px' : '0px',
                    visibility: isOpen ? 'visible' : 'hidden',
                    overflow: 'hidden'
                }}
            >
                <div style={{ backgroundColor: '#f59e0b', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', zIndex: 10 }}>
                    <Text strong style={{ color: '#fff', fontSize: '15px' }}>Chat với Nhân viên hỗ trợ</Text>
                    <Button
                        type="text"
                        shape="circle"
                        icon={<CloseOutlined />}
                        onClick={() => setIsOpen(false)}
                        style={{ color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    />
                </div>

                <div style={{ flex: 1, padding: '16px', overflowY: 'auto', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {messageList.length === 0 ? (
                        <div style={{ margin: 'auto' }}>
                            <Empty description="Hãy gửi tin nhắn để bắt đầu!" image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </div>
                    ) : (
                        messageList.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: '85%',
                                    alignSelf: msg.senderType === "user" ? "flex-end" : "flex-start",
                                    alignItems: msg.senderType === "user" ? "flex-end" : "flex-start"
                                }}
                            >
                                <div
                                    style={{
                                        padding: '8px 12px',
                                        fontSize: '14px',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                        backgroundColor: msg.senderType === "user" ? "#ffcc00" : "#fff",
                                        color: msg.senderType === "user" ? "#1f2937" : "#1f2937",
                                        border: msg.senderType === "user" ? "none" : "1px solid #e5e7eb",
                                        borderRadius: '12px',
                                        borderBottomRightRadius: msg.senderType === "user" ? '2px' : '12px',
                                        borderBottomLeftRadius: msg.senderType === "user" ? '12px' : '2px',
                                        wordWrap: 'break-word'
                                    }}
                                >
                                    {msg.text}
                                </div>
                                <Text style={{ fontSize: '10px', marginTop: '4px' }} type="secondary">
                                    {msg.senderType === "user" ? "Bạn" : "CSKH Soccer Beck"}
                                </Text>
                            </div>
                        ))
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div style={{ padding: '12px', backgroundColor: '#fff', borderTop: '1px solid #f3f4f6' }}>
                    <Input
                        placeholder="Nhập tin nhắn..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onPressEnter={sendMessage}
                        style={{ borderRadius: '24px' }}
                        suffix={
                            <Button
                                type="text"
                                style={{ color: '#f59e0b', fontWeight: 'bold' }}
                                onClick={sendMessage}
                            >
                                Gửi
                            </Button>
                        }
                    />
                </div>
            </div>

            <Button
                shape="circle"
                onClick={() => setIsOpen(!isOpen)}
                icon={isOpen ? <CloseOutlined style={{ fontSize: '20px' }} /> : <MessageOutlined style={{ fontSize: '24px' }} />}
                style={{
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isOpen ? '#f3f4f6' : '#f59e0b',
                    color: isOpen ? '#6b7280' : '#fff',
                    border: 'none',
                    boxShadow: isOpen ? '0 4px 6px rgba(0,0,0,0.1)' : '0 10px 15px -3px rgba(245, 158, 11, 0.4), 0 4px 6px -2px rgba(245, 158, 11, 0.2)',
                    transition: 'all 0.3s'
                }}
            />
        </div>
    );
};

export default ChatWidget;