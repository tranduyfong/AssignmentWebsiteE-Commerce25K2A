import React from 'react';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const LoginPage = () => {
    const onFinish = (values) => {
        alert("Xin chào ");
        console.log(values);
    };
    return (
        <>
            <div className='h-screen flex justify-center items-center font-bold'>
                <div className='flex flex-col items-center'>
                    <div className="mb-6 text-2xl font-bold text-center">
                        Đăng nhập tài khoản
                    </div>

                    <Card >
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Nhập email đăng nhập' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={[{ required: true, message: 'Nhập mật khẩu' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{ span: 24 }}
                            >
                                <div className="w-full flex justify-center">
                                    <Link
                                        to="/forgetPassword"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Quên mật khẩu?
                                    </Link>
                                </div>
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <div className="flex justify-center">
                                    <Button type="primary" htmlType="submit">
                                        Đăng nhập
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>


            </div>
        </>
    )
};
export default LoginPage;