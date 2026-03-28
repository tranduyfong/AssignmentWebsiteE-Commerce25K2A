import React, { useState, useEffect } from 'react';
import { Col, Row, Checkbox, Slider, Space, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import { getAllProducts } from "../services/api.service";

const { Panel } = Collapse;
const Product = () => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2000000]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

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
    console.log(products);
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
                                                <button className="w-full py-2 bg-[#FECD4C] hover:bg-gray-800 hover:text-white font-bold transition-all duration-300 rounded uppercase text-[11px] text-black">
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