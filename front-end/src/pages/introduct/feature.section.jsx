import React from 'react';
import { Row, Col, Typography } from 'antd';
import {
    CalendarOutlined,
    RocketOutlined,
    CreditCardOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const features = [
    {
        icon: <CalendarOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
        title: 'Không sợ hết hàng',
        desc: 'Do chẳng cần đợi nhân viên chốt đơn',
    },
    {
        icon: <RocketOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
        title: 'Giao hàng toàn quốc',
        desc: 'Gửi hàng đi luôn trong ngày',
    },
    {
        icon: <CreditCardOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
        title: 'Thanh toán linh hoạt',
        desc: 'Tiền mặt/CK/ví điện tử/thẻ',
    },
    {
        icon: <CheckCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
        title: 'Đổi size thoải mái',
        desc: 'Đến khi anh em hài lòng',
    },
];

const FeatureSection = () => {
    return (
        <div style={{ padding: '40px 40px', backgroundColor: '#fff' }} className='m-auto w-2/3'>
            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
                <h2 className="uppercase font-semibold text-3xl text-gray-900 tracking-tight">CAM KẾT</h2>
            </div>
            <Row gutter={[24, 24]} justify="center" className='mb-10' data-aos="fade-up" data-aos-duration="800">
                {features.map((item, index) => (
                    <Col xs={24} sm={12} md={6} key={index}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            height: '100%'
                        }}>
                            {/* Phần Icon */}
                            <div style={{
                                minWidth: '50px',
                                height: '50px',
                                backgroundColor: '#f0f2f5',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>

                            {/* Phần nội dung */}
                            <div>
                                <Title level={5} style={{ margin: 0, fontSize: '16px' }}>
                                    {item.title}
                                </Title>
                                <Text type="secondary" style={{ fontSize: '14px' }}>
                                    {item.desc}
                                </Text>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FeatureSection;