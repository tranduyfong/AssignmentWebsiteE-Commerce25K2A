import React, { useState, useEffect } from 'react';
import { Col, Row, Checkbox, Slider, Space, Collapse, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { getAllProducts } from "../services/api.service";
import "./css/home.css";
const { Panel } = Collapse;
const Product = () => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2000000]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

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

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    const handleFilter = () => {
        const result = products.filter(item => {

            const matchPrice =
                item.priceProduct >= priceRange[0] &&
                item.priceProduct <= priceRange[1];

            const matchBrand =
                selectedBrands.length === 0 ||
                selectedBrands.some(brand =>
                    item.nameProduct.toLowerCase().includes(brand.toLowerCase())
                );

            const matchSize =
                selectedSizes.length === 0 ||
                item.sizes?.some(s =>
                    selectedSizes.includes(s.size)
                );

            return matchPrice && matchBrand && matchSize;
        });

        setFilterProducts(result);
    };
    return (
        <>
            <div className='mt-40 w-2/3 m-auto text-gray-500'>
                <div className='flex'>
                    <Link to="/">Trang chủ | </Link>
                    <Link className='ml-1 text-amber-400 font-semibold'>Sản phẩm</Link>
                </div>
                <Divider className='mt-3!' />
            </div>
            <div className="px-[30px] mb-20 ">
                <div className="flex justify-center items-center uppercase font-bold text-2xl mb-5">
                    Sản phẩm
                </div>
                <Row gutter={[24, 24]}>
                    <Col xs={24} md={6} lg={5}>
                        <div className="bg-white p-5 rounded-lg border border-gray-200 sticky top-5">
                            <div className="font-bold text-lg mb-4 border-b pb-2">BỘ LỌC</div>
                            <Collapse defaultActiveKey={['1', '2', '3', '4']} ghost expandIconPosition="end">
                                <Panel header={<span className="font-semibold">Thương hiệu</span>} key="1">
                                    <Checkbox.Group
                                        options={["Nike", "Adidas", "Puma"]}
                                        onChange={(checkedValues) => setSelectedBrands(checkedValues)}
                                    />
                                </Panel>
                                <Panel header={<span className="font-semibold">Kích thước</span>} key="3">
                                    <div className="flex flex-wrap gap-2">
                                        {[38, 39, 40, 41, 42, 43, 44].map(size => (
                                            <div
                                                key={size}
                                                onClick={() => {
                                                    if (selectedSizes.includes(size)) {
                                                        setSelectedSizes(selectedSizes.filter(s => s !== size));
                                                    } else {
                                                        setSelectedSizes([...selectedSizes, size]);
                                                    }
                                                }}
                                                className={`border px-2 py-1 text-xs cursor-pointer 
                                            ${selectedSizes.includes(size) ? "bg-black text-white" : ""}`}
                                            >
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

                    <Col xs={24} md={18} lg={19} className='all-product'>
                        <Row gutter={[16, 30]}>
                            {filterProducts?.map((items) => (
                                <Col className="gutter-row mb-5" span={4} key={items._id}>
                                    <Link to={`/detail/${items._id}`}>
                                        <div className="box w-full">
                                            <div class="img-wrapper">
                                                <img src={items.imgSrc[0]} alt={items.nameProduct} />
                                            </div>
                                            <div className="flex flex-col text-center grow bg-white w-full inner-content">
                                                <p className="font-semibold text-black " style={{ fontSize: "17px" }}>
                                                    Mã SP: {items._id.slice(-8).toUpperCase()}
                                                </p>
                                                <p className="font-bold text-red-600">
                                                    {formatPrice(items.priceProduct)}
                                                </p>
                                                <p className="font-bold text-black mb-2 uppercase" style={{ fontSize: "17px" }}>
                                                    {items.sizes?.some(s => s.quantity > 0) ? (
                                                        <p className="font-bold mb-2 uppercase" style={{ fontSize: "17px" }}>
                                                            Hàng có sẵn
                                                        </p>
                                                    ) : (
                                                        <p className="font-bold text-gray-500 mb-2 uppercase" style={{ fontSize: "17px" }}>
                                                            Hết hàng
                                                        </p>
                                                    )}
                                                </p>
                                                <div className="flex flex-wrap justify-center gap-2 mb-2" style={{ fontSize: "15px" }}>
                                                    {items.sizes && items.sizes.length > 0 ? (
                                                        items.sizes.map((s, index) => (
                                                            <span
                                                                key={s._id || index}
                                                                className={`font-bold ${s.quantity > 0
                                                                    ? "text-black" // Còn hàng: Màu đen
                                                                    : "text-gray-300 line-through cursor-not-allowed" // Hết hàng: Màu xám nhạt và gạch ngang
                                                                    }`}
                                                            >
                                                                {s.size}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        // Fallback: Nếu dữ liệu lỗi hoặc chưa có mảng sizes, hiển thị mặc định
                                                        <span className="font-bold text-black">38 39 40 41 42 43 44</span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-black font-light line-clamp-2 mt-auto hover:font-semibold" style={{ fontSize: "15px" }}>
                                                    {items.nameProduct}
                                                </p>
                                                <Link to={`/detail/${items._id}`} className='w-full block'>
                                                    <button className="w-full py-2 bg-[#FECD4C] hover:bg-gray-800 hover:text-white font-bold transition-all duration-300 rounded uppercase text-[11px] text-black btn-buy">
                                                        Mua
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                </Row>
            </div>
        </>
    );
};

export default Product;