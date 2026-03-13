import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        alert("Tạo tài khoản thành công");
        console.log(values);
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
                            <Input placeholder="Họ và tên" size="large" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Vui lòng nhập email' },
                                { type: 'email', message: 'Email không hợp lệ' }
                            ]}
                        >
                            <Input placeholder="abc@gmail.com" size="large" />
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