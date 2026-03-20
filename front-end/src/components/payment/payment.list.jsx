import { Card, Row, Col, Input, Button, Divider, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const OrderSummary = (props) => {
    const { data } = props;
    return (
        <Card
            title="Đơn hàng của bạn"
            style={{
                width: 420,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}
        >
            <Row gutter={12} align="middle">
                <Col>
                    <img
                        src={data.current?.imgSrc}
                        alt="product"
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 8,
                            objectFit: "cover",
                            marginBottom: "10px"
                        }}
                    />
                </Col>

                <Col flex="auto">
                    <Text strong style={{ marginBottom: "20px" }}>
                        {data.current?.nameProduct}
                    </Text>
                    <br />
                    <Text type="secondary" style={{ marginBottom: "20px" }}>Size: {data.selectedSize}</Text> <br />
                    <Text type="secondary" style={{ marginBottom: "20px" }}>Quantity: {data.quantity}</Text>
                </Col>
                <Divider />
                {/* <Col>
                    <Text strong>{data.current?.priceProduct} x {data.quantity}</Text>
                </Col> */}
            </Row>

            <Row justify="space-between">
                <Text type="secondary">Tạm tính</Text>
                <Text>{data.totalPrice}</Text>
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
                    {data.totalPrice}
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