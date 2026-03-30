import React, { useState, useEffect } from 'react';
import { Col, Row, Checkbox, Slider, Space, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import { getAllProducts } from "../services/api.service";

const { Panel } = Collapse;

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2000000]);
    const [selectSize, setSelectSize] = useState([]);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const res = await getAllProducts();
                const actualData = res?.data ? res.data : (Array.isArray(res) ? res : []);

                setProducts(actualData);
                setFilterProducts(actualData);
            } catch (error) {
                console.error("Lỗi fetch API:", error);
                setFilterProducts([]);
            }
        }
        loadProduct();
    }, []);

    const handleFilter = () => {
        const result = products.filter(item => {
            const matchPrice = item.priceProduct >= priceRange[0] && item.priceProduct <= priceRange[1];

            const itemSizes = item.sizes || [];
            const matchSize = selectSize.length === 0 ||
                itemSizes.some(s => selectSize.includes(Number(s)));

            return matchPrice && matchSize;
        });
        setFilterProducts(result);
    };

    const toggleSize = (size) => {
        if (selectSize.includes(size)) {
            setSelectSize(selectSize.filter(s => s !== size));
        } else {
            setSelectSize([...selectSize, size]);
        }
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
                                        <div
                                            key={size}
                                            onClick={() => toggleSize(size)}
                                            className={`border px-3 py-1 text-xs cursor-pointer transition-all ${selectSize.includes(size)
                                                ? "border-black bg-black text-white"
                                                : "border-gray-300 hover:border-black"
                                                }`}
                                        >
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </Panel>
                            <Panel header={<span className="font-semibold">Khoảng giá (đ)</span>} key="4">
                                <Slider
                                    range
                                    step={500000}
                                    max={10000000}
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
                        {Array.isArray(filterProducts) && filterProducts.length > 0 ? (
                            filterProducts.map((item) => (
                                <Col xs={12} sm={8} md={6} key={item._id}>
                                    <div className="all-product">
                                        <Row className="mb-10" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                            {products?.map(items => (
                                                <Col className="gutter-row" span={4} key={items._id}>
                                                    <div className="box">
                                                        <img src={items.imgSrc[0]} alt={items.nameProduct} />
                                                        <div className="inner-content">
                                                            <p className="inner-title">{items.nameProduct}</p>
                                                            <p className="inner-price">Giá: {items.priceProduct}</p>
                                                            <button className="btn-buy">
                                                                <Link to={`/detail/${items._id}`}>
                                                                    Mua
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            <div className="w-full text-center py-10">
                                Không có sản phẩm nào để hiển thị.
                            </div>
                        )}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Product;