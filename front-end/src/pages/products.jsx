import React, { useState } from 'react';
import { Col, Divider, Row, Modal, Button, Tag } from 'antd';

const Product = () => {
    const [cartData, setCartData] = useState([
        {
            id: '1',
            nameProduct: 'Giày thể thao Ar xanh dương',
            imgs: 'https://bizweb.dktcdn.net/thumb/medium/100/108/842/products/26013107.jpg?v=1770101958230',
            price: 8500000,
        },
        {
            id: '2',
            nameProduct: 'Giày Adidas sọc đen gót hồng',
            imgs: 'https://bizweb.dktcdn.net/thumb/small/100/108/842/products/1-7570b343-1230-47eb-a6c5-c2cba3a82ebe.jpg?v=1754987431497',
            price: 2500000,
        },
        {
            id: '3',
            nameProduct: 'Giày Adidas trắng sọc xám',
            imgs: 'https://bizweb.dktcdn.net/thumb/small/100/108/842/products/23040105.jpg?v=1754987717003',
            price: 2400000
        },
        {
            id: '4',
            nameProduct: 'Giày Adidas sọc đen gót hồng',
            imgs: 'https://bizweb.dktcdn.net/thumb/small/100/108/842/products/1-7570b343-1230-47eb-a6c5-c2cba3a82ebe.jpg?v=1754987431497',
            price: 2500000,
        },
        {
            id: '5',
            nameProduct: 'Giày Adidas sọc đen gót hồng',
            imgs: 'https://bizweb.dktcdn.net/thumb/small/100/108/842/products/1-7570b343-1230-47eb-a6c5-c2cba3a82ebe.jpg?v=1754987431497',
            price: 2500000,
        },
    ]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    return (
        <div className='p-12 bg-white min-h-screen mt-15 '>
            <Divider orientation="center">
                <h2 className="text-2xl font-bold uppercase ">Sản phẩm</h2>
            </Divider>

            <Row gutter={[24, 24]}>
                {cartData.map((item) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                        <div
                            className="group bg-white rounded-lg shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden border border-gray-100"
                        >
                            <div className='relative overflow-hidden h-64'>
                                <img
                                    src={item.imgs}
                                    alt={item.nameProduct}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>
                            <div className="p-4 text-center">
                                <div className="font-semibold text-gray-800">Mã sản phẩm: 000{item.id}</div>
                                <p className="text-red-500 font-bold mt-2">{formatPrice(item.price)}</p>
                                <div className='font-semibold text-gray-800 uppercase'>Hàng có sẵn</div>
                                <h2 className="text-gray-950 truncate">{item.nameProduct}</h2>

                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
export default Product;