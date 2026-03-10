import React from 'react';
import { Button, Card, Col, Form, Input, Row, } from 'antd';
import { Link } from 'react-router-dom';
const LoginPage = () => {
    const onFinish = (values) => {
        alert("Xin chào ");
        console.log(values);
    };
    return (
        <>
            <div className='h-screen flex justify-center items-center font-bold z-0'>
                <div className='flex flex-col items-center'>
                    <div className="mb-6 text-2xl font-bold text-center">
                        Đăng nhập tài khoản
                    </div>
                    <Row>
                        <Col span={12}>
                            <Card className='bg-gray-50'>
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

                                    <Form.Item
                                        wrapperCol={{ span: 24 }}
                                    >
                                        <div className="w-full flex justify-center">
                                            <Link
                                                to="/registerPage"
                                                className="text-blue-500 hover:underline"
                                            >
                                                Tạo tài khoản mới
                                            </Link>
                                        </div>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ span: 24 }}>
                                        <div>
                                            <Button type="primary" htmlType="submit">
                                                Đăng nhập
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>

                            </Card>
                        </Col>
                    </Row>

                </div>


            </div>
        </>
    )
};
export default LoginPage;