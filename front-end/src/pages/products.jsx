import React, { useState, useEffect } from 'react';
import { Col, Row, Checkbox, Slider, Space, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import { getAllProducts } from "../services/api.service";

const { Panel } = Collapse;

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2000000]);

    useEffect(() => {
        const loadProduct = async () => {
            const res = await getAllProducts();
            if (res && res.data) {
                setProducts(res.data);
                setFilterProducts(res.data);
            }
        };
        loadProduct();
    }, []);


    const handleFilter = () => {
        const result = products.filter(item =>
            item.priceProduct >= priceRange[0] &&
            item.priceProduct <= priceRange[1]
        );
        setFilterProducts(result);
    };

    return (
        <div className="mt-40 px-[30px] mb-20">
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
                                    value={priceRange}
                                    onChange={(val) => setPriceRange(val)}
                                />
                                <div className="flex justify-between text-[12px] font-medium">
                                    <span>{priceRange[0].toLocaleString()}đ</span>
                                    <span>{priceRange[1].toLocaleString()}đ</span>
                                </div>
                            </Panel>
                        </Collapse>

                        <button
                            onClick={handleFilter}
                            className="w-full mt-6 py-2 bg-gray-800 text-white rounded font-bold hover:bg-black transition-all"
                        >
                            ÁP DỤNG
                        </button>
                    </div>
                </Col>

                <Col xs={24} md={18} lg={19}>
                    <Row gutter={[16, 30]}>
                        {filterProducts?.map((item) => (
                            <Col key={item._id} xs={24} sm={12} md={12} lg={6}>
                                <div className="h-full flex flex-col bg-white shadow-md hover:shadow-2xl duration-300 rounded-lg border border-gray-100 group">
                                    <div className="aspect-square overflow-hidden rounded-t-lg">
                                        <img
                                            src={item.imgSrc && item.imgSrc[0]}
                                            alt={item.nameProduct}
                                            className="w-full h-full object-cover group-hover:scale-110 duration-500"
                                        />
                                    </div>

                                    <div className="p-3 flex flex-col flex-grow">
                                        <div className="text-[15px] font-bold text-gray-800 line-clamp-2 h-10 mb-2 leading-tight">
                                            {item.nameProduct}
                                        </div>
                                        <div className="mt-auto">
                                            <div className="text-[16px] font-bold text-red-600 mb-3">
                                                {item.priceProduct?.toLocaleString()}đ
                                            </div>
                                            <Link to={`/detail/${item._id}`}>
                                                <button className="w-full py-2 bg-[#FECD4C] hover:bg-gray-800 hover:text-white font-bold transition-all duration-300 rounded uppercase text-[11px]">
                                                    Mua
                                                </button>
                                            </Link>
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