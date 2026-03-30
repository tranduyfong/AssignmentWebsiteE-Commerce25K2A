import { Typography, Divider, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const TotalCart = (props) => {
    const navigate = useNavigate();
    const { selectedProducts, totalPrice } = props;

    const handleBuy = () => {
        if (selectedProducts.length === 0) {
            alert("Vui lòng chọn ít nhất một sản phẩm để thanh toán!");
            return;
        }
        navigate("/payment", {
            state: {
                product: selectedProducts,
                totalPrice: totalPrice
            }
        });
    };

    return (
        <div className='flex flex-col items-end text-black mt-10' style={{ marginTop: '50px', textAlign: 'right' }}>
            <Row justify="end" align="middle" style={{ width: '100%' }}>
                <Col xs={24} sm={12} md={8}>
                    <Title level={4} style={{ fontSize: "20px" }}>TỔNG THANH TOÁN:</Title>
                    <Divider style={{ margin: '8px 0' }} />
                    <Title level={3} className='flex justify-between' style={{ color: '#ff4d4f', marginTop: 0 }}>
                        <span className='text-black' style={{ fontSize: "20px" }}>Tổng:</span>
                        {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                        }).format(totalPrice)}
                    </Title>
                </Col>
            </Row>
            <div
                onClick={handleBuy}
                className='w-full sm:w-64 p-3 bg-amber-400 flex items-center justify-center font-bold hover:text-white hover:bg-black transition duration-400 cursor-pointer'
            >
                MUA NGAY ({selectedProducts.length})
            </div>
        </div>
    );
};

export default TotalCart;