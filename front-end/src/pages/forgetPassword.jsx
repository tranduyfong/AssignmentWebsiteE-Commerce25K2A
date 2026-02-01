import React from 'react';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const ForgetPassword = () => {
    const onFinish = (values) => {
        alert("Đã xác nhận tài khoản ");
        console.log(values);
    };
    return (
        <>
            <div className='h-screen flex justify-center items-center font-bold'>
                <div className='flex flex-col items-center'>
                    <div className="mb-6 text-2xl font-bold text-center">
                        Quên mật khẩu
                    </div>

                    <Card>
                        <Form
                            name="basic"
                            labelCol={{ span: 15 }}
                            wrapperCol={{ span: 9 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Nhập email tài khoản cần khôi phục"
                                name="email"
                                rules={[{ required: true, message: 'Nhập email' }]}
                            >
                                <Input type="email" />
                            </Form.Item>

                            <Form.Item label={null} wrapperCol={{ span: 24 }}
                                className="flex justify-center">
                                <Button type="primary" htmlType="submit"  >
                                    Xác nhận
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </>
    )
};
export default ForgetPassword;