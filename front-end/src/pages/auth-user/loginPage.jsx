import React from 'react';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        alert("Xin chào " + values.email);
        console.log(values);
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 mt-10'>
            <div className="mb-8 text-3xl font-bold text-gray-800">
                Đăng nhập
            </div>


            <Row gutter={[24, 24]} className="w-full max-w-5xl">

                <Col xs={24} md={12}>
                    <Card title="ĐĂNG NHẬP" className='h-full shadow-md'>
                        <Form
                            name="loginForm"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            style={{ width: '100%' }}
                        >
                            <Form.Item
                                label="Tên đăng nhập"
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <div className="flex justify-between items-center mb-4">
                                <Link to="/forgetPassword" style={{ color: '#1677ff' }}>
                                    Quên mật khẩu?
                                </Link>
                            </div>

                            <Form.Item
                                style={{ marginBottom: 0 }}
                                className="w-full"
                            >
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
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card title="KHÁCH HÀNG MỚI" className='h-full shadow-md'>
                        <div className="flex flex-col h-full justify-between">
                            <div className="text-gray-600 text-base mb-6 leading-relaxed">
                                Bằng cách tạo một tài khoản với cửa hàng của chúng tôi, bạn sẽ có thể
                                thực hiện những quy trình mua hàng nhanh hơn, lưu trữ nhiều địa chỉ
                                gửi hàng, xem và theo dõi đơn đặt hàng của bạn và nhiều hơn nữa.
                            </div>
                            <div className="w-full pt-4">
                                <Button
                                    type="default"
                                    size="large"
                                    block
                                    style={{
                                        marginLeft: 0,
                                        background: '#febb0a',
                                        borderColor: '#febb0a',
                                        color: 'black',
                                        fontWeight: 'bold'
                                    }}
                                    onClick={() => navigate('/registerPage')}
                                >
                                    Tạo tài khoản mới
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;