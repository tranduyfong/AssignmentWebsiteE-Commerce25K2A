import React, { useState } from 'react';
import { Col, Row, Checkbox, Slider, InputNumber, Space, Collapse } from 'antd';

const { Panel } = Collapse;

const data = [
    {
        id: 1,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Vàng Chanh Cổ Lửng HQ TF",
        price: "1.300.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/25101103-3.jpg?v=1761715986937"
    },
    {
        id: 2,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Pink Edition",
        price: "1.450.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/beck-78.jpg?v=1753152089380"
    },
    {
        id: 3,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro White/Blue",
        price: "1.300.000",
        image: "https://bizweb.dktcdn.net/thumb/grande/100/108/842/products/25122104.jpg?v=1766378262600"
    },
    {
        id: 4,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Black",
        price: "1.350.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/26011603.jpg?v=1768901271760"
    },
    {
        id: 5,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Green",
        price: "1.300.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/26011506-2.jpg?v=1768901106970"
    },
    {
        id: 6,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Orange",
        price: "1.300.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/26012920.jpg?v=1769761447993"
    },
    {
        id: 7,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Vàng Chanh Cổ Lửng HQ TF",
        price: "1.300.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/25101103-3.jpg?v=1761715986937"
    },
    {
        id: 8,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Pink Edition",
        price: "1.450.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/beck-78.jpg?v=1753152089380"
    },
    {
        id: 9,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro White/Blue",
        price: "1.300.000",
        image: "https://bizweb.dktcdn.net/thumb/grande/100/108/842/products/25122104.jpg?v=1766378262600"
    },
    {
        id: 10,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Black",
        price: "1.350.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/26011603.jpg?v=1768901271760"
    },
    {
        id: 11,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Green",
        price: "1.300.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/26011506-2.jpg?v=1768901106970"
    },
    {
        id: 12,
        name: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Orange",
        price: "1.300.000",
        image: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/26012920.jpg?v=1769761447993"
    },
];

const Product = () => {
    const [priceRange, setPriceRange] = useState([0, 2000000]);
    return (
        <div className="mt-35 px-[30px] mb-20">
            <div className="flex justify-center items-center uppercase font-bold text-2xl mb-5">
                Sản phẩm
            </div>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={6} lg={5}>
                    <div className="bg-white p-5 rounded-lg border border-gray-200 sticky top-5">
                        <div className="font-bold text-lg mb-4 border-b pb-2">BỘ LỌC</div>

                        <Collapse defaultActiveKey={['1', '2', '3', '4']} ghost expandIconPosition="end">
                            <Panel header={<span className="font-semibold">Thương hiệu</span>} key="1">
                                <Space direction="vertical" className="w-full">
                                    <Checkbox>Nike</Checkbox>
                                    <Checkbox>Adidas</Checkbox>
                                    <Checkbox>Puma</Checkbox>
                                    <Checkbox>Mizuno</Checkbox>
                                </Space>
                            </Panel>

                            <Panel header={<span className="font-semibold">Màu sắc</span>} key="2">
                                <div className="grid grid-cols-2 gap-2">
                                    <Checkbox>Vàng</Checkbox>
                                    <Checkbox>Hồng</Checkbox>
                                    <Checkbox>Trắng</Checkbox>
                                    <Checkbox>Đen</Checkbox>
                                    <Checkbox>Xanh lá</Checkbox>
                                    <Checkbox>Cam</Checkbox>
                                </div>
                            </Panel>

                            <Panel header={<span className="font-semibold">Kích thước</span>} key="3">
                                <div className="flex flex-wrap gap-2">
                                    {[38, 39, 40, 41, 42, 43, 44].map(size => (
                                        <div key={size} className="border px-2 py-1 text-xs cursor-pointer ">
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </Panel>

                            <Panel header={<span className="font-semibold">Khoảng giá (đ)</span>} key="4">
                                <Slider
                                    range
                                    step={50000}
                                    max={3000000}
                                    defaultValue={[0, 1500000]}
                                    onChange={(val) => setPriceRange(val)}
                                />
                                <div className="flex justify-between text-[12px] font-medium">
                                    <span>{priceRange[0].toLocaleString()}đ</span>
                                    <span>{priceRange[1].toLocaleString()}đ</span>
                                </div>
                            </Panel>
                        </Collapse>

                        <button className="w-full mt-6 py-2 bg-gray-800 text-white rounded font-bold hover:bg-black transition-all">
                            ÁP DỤNG
                        </button>
                    </div>
                </Col>
                <Col xs={24} md={18} lg={19}>
                    <Row gutter={[16, 30]}>
                        {data.map((item) => (
                            <Col key={item.id} xs={24} sm={12} md={12} lg={6}>
                                <div className="h-full flex flex-col bg-white shadow-md hover:shadow-2xl duration-300 rounded-lg border border-gray-100 group">
                                    <div className=" aspect-square ">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full duration-500"
                                        />
                                    </div>

                                    <div className="p-3 flex flex-col flex-grow">
                                        <div className="text-[15px] font-bold text-gray-800 line-clamp-2 h-10 mb-2 leading-tight">
                                            {item.name}
                                        </div>

                                        <div className="mt-auto">
                                            <div className="text-[16px] font-bold text-red-600 mb-3">
                                                {item.price}đ
                                            </div>

                                            <button className="w-full py-2 bg-[#FECD4C] hover:bg-gray-800 hover:text-white font-bold transition-all duration-300 rounded uppercase text-[11px]">
                                                Mua
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Product;