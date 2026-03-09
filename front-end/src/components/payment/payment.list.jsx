import { Card, Row, Col, Input, Button, Divider, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const OrderSummary = () => {
    return (
        <Card
            title="Đơn hàng (1 sản phẩm)"
            style={{
                width: 420,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}
        >
            <Row gutter={12} align="middle">
                <Col>
                    <img
                        src="https://via.placeholder.com/60"
                        alt="product"
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 8,
                            objectFit: "cover"
                        }}
                    />
                </Col>

                <Col flex="auto">
                    <Text strong>
                        Giày Bóng Đá Kamito Artista KL PRO Đế Đệm Da Kangaroo TF - Đỏ Vàng
                    </Text>
                    <br />
                    <Text type="secondary">Size: 40</Text>
                </Col>

                <Col>
                    <Text strong>1.300.000đ</Text>
                </Col>
            </Row>

            <Divider />

            <Row gutter={8}>
                <Col flex="auto">
                    <Input placeholder="🎟 Nhập mã giảm giá" />
                </Col>

                <Col>
                    <Button
                        style={{
                            background: "#f59e0b",
                            borderColor: "#f59e0b",
                            color: "#fff"
                        }}
                    >
                        Áp dụng
                    </Button>
                </Col>
            </Row>

            <Divider />

            <Row justify="space-between">
                <Text type="secondary">Tạm tính</Text>
                <Text>1.300.000đ</Text>
            </Row>

            <Row justify="space-between" style={{ marginTop: 6 }}>
                <Text type="secondary">Phí vận chuyển</Text>
                <Text>-</Text>
            </Row>

            <Divider />

            <Row justify="space-between" align="middle">
                <Title level={5} style={{ margin: 0 }}>
                    Tổng cộng
                </Title>

                <Title level={4} style={{ margin: 0, color: "#f59e0b" }}>
                    1.300.000đ
                </Title>
            </Row>

            <Divider />

            <Row justify="space-between" align="middle">
                <Button type="link" icon={<ArrowLeftOutlined />} style={{ padding: 0 }}>
                    Quay về giỏ hàng
                </Button>

                <Button
                    type="primary"
                    size="large"
                    style={{
                        background: "#f59e0b",
                        borderColor: "#f59e0b",
                        borderRadius: 8
                    }}
                >
                    ĐẶT HÀNG
                </Button>
            </Row>
        </Card>
    );
};

export default OrderSummary;