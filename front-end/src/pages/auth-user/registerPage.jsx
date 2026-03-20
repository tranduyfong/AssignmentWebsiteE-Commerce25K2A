import React from 'react';
import { Button, Card, Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/api.service';

const RegisterPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const res = await createUser(values.name, values.email, values.phone, values.password);
        if (!res.data) {
            notification.error({
                message: "Đăng ký thất bại!",
                description: res.message
            });
            return;
        } else {
            notification.success({
                message: "Đăng ký thành công!",
                description: res.message
            });
        }
        navigate('/loginPage');
    };

    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-100 p-4 mt-10'>
            <div className='w-full max-w-md'>
                <div className="mb-6 text-3xl font-bold text-center text-gray-800">
                    Đăng ký tài khoản
                </div>

                <Card className="shadow-md">
                    <Form
                        name="registerForm"
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={false}
                    >
                        <Form.Item
                            label="Họ và tên"
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                        >
                            <Input placeholder="Ví dụ: Nguyễn Văn A" size="large" />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[
                                { required: true, message: 'Vui lòng nhập số điện thoại' },
                            ]}
                        >
                            <Input placeholder="Ví dụ: 0987654321" size="large" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Vui lòng nhập email' },
                                { type: 'email', message: 'Email không hợp lệ' }
                            ]}
                        >
                            <Input placeholder="Ví dụ: abc@gmail.com" size="large" />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                        >
                            <Input.Password size="large" />
                        </Form.Item>

                        <Form.Item className="mb-0">
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                                style={{
                                    marginLeft: 0,
                                    background: '#febb0a',
                                    borderColor: '#febb0a',
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            >
                                Đăng ký
                            </Button>

                        </Form.Item>

                        <div className="mt-4 text-center">
                            <span className="text-gray-500">Đã có tài khoản? </span>
                            <a onClick={() => navigate('/loginPage')} className="text-blue-500 cursor-pointer">
                                Đăng nhập
                            </a>
                        </div>
                    </Form>
                </Card>
            </div>
        </div >
    );
};

export default RegisterPage;