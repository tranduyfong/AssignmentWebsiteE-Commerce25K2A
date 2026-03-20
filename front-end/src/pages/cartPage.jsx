import React, { useState } from 'react';
import { Flex, Space, Table, Image as AntImage, Typography, Empty, Button } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
const { Column } = Table;
const { Title, Text: AntText } = Typography;

const CartPage = () => {
    const [cartData, setCartData] = useState([
        {
            id: '1',
            date: '01/01/2025',
            imgs: 'https://bizweb.dktcdn.net/thumb/medium/100/108/842/products/26013107.jpg?v=1770101958230',
            nameProduct: 'Giày thể thao Adidas',
            quantity: '3',
            money: '8.500.000',
        },
        {
            id: '2',
            date: '02/01/2025',
            imgs: 'https://bizweb.dktcdn.net/thumb/small/100/108/842/products/1-7570b343-1230-47eb-a6c5-c2cba3a82ebe.jpg?v=1754987431497',
            nameProduct: 'Giày Lacoste Ag-LT23 Ultra xanh',
            quantity: '1',
            money: '2.500.000',
        },
        {
            id: '3',
            date: '03/01/2025',
            imgs: 'https://bizweb.dktcdn.net/thumb/small/100/108/842/products/23040105.jpg?v=1754987717003',
            nameProduct: 'Giày Nike aford',
            quantity: '2',
            money: '2.400.000',
        },
    ]);
    const onDelete = (id) => {
        alert("Xóa sản phẩm thành công" + id);
    };
    if (cartData.length === 0) {
        return (
            <Flex vertical align="center" justify="center" style={{ minHeight: '60vh', padding: '20px' }}>
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={
                        <AntText type="secondary" style={{ fontSize: '16px' }}>
                            Giỏ hàng của bạn đang trống
                        </AntText>
                    }
                >

                </Empty>
            </Flex>
        );
    }
    return (
        <>
            <Title className='mt-40'>Giỏ hàng</Title>
            <Table dataSource={cartData} rowKey="id" pagination={false} className='mt-5'
                footer={() => (
                    <Flex justify="flex-end" align="center" style={{ paddingRight: '20px' }}>
                        <AntText strong style={{ fontSize: '18px' }}>
                            Tổng cộng:  <AntText style={{ color: 'green', fontSize: '18px' }}>10.000.000 VNĐ</AntText>
                        </AntText>
                    </Flex>

                )}>

                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Ngày" dataIndex="date" key="date" />
                <Column
                    title="Ảnh sản phẩm"
                    dataIndex="imgs"
                    key="imgs"
                    render={(AntText) => (
                        <AntImage
                            width={80}
                            src={AntText}
                            alt="product"
                        />
                    )}
                />
                <Column title="Tên sản phẩm" dataIndex="nameProduct" key="nameProduct" />
                <Column title="Số lượng" dataIndex="quantity" key="quantity" />
                <Column title="Số tiền" dataIndex="money" key="money" />
                <Column
                    key="action"
                    render={(_, record) => (
                        <Space size="middle" >

                            <DeleteOutlined
                                style={{ color: 'red', cursor: 'pointer', size: '18' }}
                                onClick={() => onDelete(record.id)}
                            />

                        </Space>
                    )}
                />
            </Table>

        </>
    )
};
export default CartPage;