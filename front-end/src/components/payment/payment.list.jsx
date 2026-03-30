import { Card, Row, Col, Button, Divider, Typography, Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const OrderSummary = (props) => {
    const navigate = useNavigate();
    const { data, form, handleSubmit, paymentMethod } = props;

    // Chuyển đổi State truyền vào là mảng đối với sản phẩm mua ngay
    const productList = Array.isArray(data?.product) ? data.product : [data?.product];

    const handleOrder = async () => {
        try {
            const values = await form.validateFields();

            const finalData = {
                customerInfo: values,
                products: productList,
                totalPrice: data.totalPrice,
                paymentMethod: paymentMethod
            };

            handleSubmit(finalData);
        } catch (error) {
            console.log("Validate failed:", error);
        }
    };

    return (
        <Card
            title="Đơn hàng của bạn"
            style={{
                width: 420,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}
        >
            <div style={{ maxHeight: '400px', overflowY: 'auto', overflowX: "hidden" }}>
                {productList.map((item, index) => {
                    const productInfo = item?.current || item?.productId;
                    const displaySize = item?.selectedSize || item?.size;
                    const displayQuantity = item?.quantity;
                    const displayImg = productInfo?.imgSrc?.[0];

                    return (
                        <div key={index}>
                            <Row gutter={12} align="middle">
                                <Col>
                                    <Image
                                        src={displayImg}
                                        alt="product"
                                        preview={false}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 8,
                                            objectFit: "cover",
                                        }}
                                    />
                                </Col>

                                <Col flex="auto">
                                    <Text strong style={{ display: 'block' }}>
                                        {productInfo?.nameProduct}
                                    </Text>
                                    <Text type="secondary">
                                        Size: {displaySize} | SL: {displayQuantity}
                                    </Text>
                                </Col>

                                <Col style={{ textAlign: 'right' }}>
                                    <Text strong>
                                        {new Intl.NumberFormat('vi-VN').format(productInfo?.priceProduct)}đ
                                    </Text>
                                </Col>
                            </Row>

                            {/* Kẻ đường ngang nếu có nhiều sản phẩm */}
                            {productList.length > 1 && index !== productList.length - 1 && <Divider style={{ margin: '12px 0' }} />}
                        </div>
                    );
                })}
            </div>

            <Divider />

            <Row justify="space-between">
                <Text type="secondary">Tạm tính</Text>
                <Text strong>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.totalPrice)}
                </Text>
            </Row>

            <Row justify="space-between" style={{ marginTop: 6 }}>
                <Text type="secondary">Phí vận chuyển</Text>
                <Text>Miễn phí</Text>
            </Row>

            <Divider />

            <Row justify="space-between" align="middle">
                <Title level={5} style={{ margin: 0 }}>Tổng cộng</Title>
                <Title level={4} style={{ margin: 0, color: "#f59e0b" }}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.totalPrice)}
                </Title>
            </Row>

            <Divider />

            <Row justify="space-between" align="middle">
                <Button type="link" icon={<ArrowLeftOutlined />} style={{ padding: 0 }} onClick={() => navigate(-1)}>
                    Quay về
                </Button>
                <Button
                    type="primary"
                    size="large"
                    style={{ background: "#f59e0b", borderColor: "#f59e0b", borderRadius: 8 }}
                    onClick={handleOrder}
                >
                    ĐẶT HÀNG
                </Button>
            </Row>
        </Card>
    );
};

export default OrderSummary;