import React from 'react';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
    const onFinish = (values) => {
        alert("Tạo tài khoản thành công ");
        console.log(values);
    };
    return (
        <>
            <div className='h-screen flex justify-center items-center font-bold'>
                <div className='flex flex-col items-center'>
                    <div className="mb-6 text-2xl font-bold text-center">
                        Đăng ký tài khoản
                    </div>

                    <Card>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Nhập họ và tên"
                                name="name"
                                rules={[{ required: true, message: 'Hãy nhập họ và tên' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Nhập email"
                                name="email"
                                rules={[{ required: true, message: 'Hãy nhập email đăng nhập' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={[{ required: true, message: 'Hãy nhập mật khẩu' }]}
                            >
                                <Input.Password />
                            </Form.Item>


                            <Form.Item wrapperCol={{ span: 24 }}>
                                <div className="flex justify-center">
                                    <Button type="primary" htmlType="submit">
                                        Tạo tài khoản
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
export default RegisterPage;