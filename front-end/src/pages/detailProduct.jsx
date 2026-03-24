import React, { useState, useRef, useEffect } from "react";
import ProductGallery from "../components/product/productGallery";
import ProductInfo from "../components/product/productInfo";
import ProductCommites from "../components/product/productCommites";
import ProductTab from "../components/product/productTab";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api.service";

const DetailProduct = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const res = await getProductById(id);
      console.log(res.data);
      setCurrent(res.data)
    }
    getProduct();
  }, []);

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("chi-tiet");
  const tabsRef = useRef(null);

  const selectedSizeData = current?.sizes?.find(
    (item) => item.size === selectedSize
  );
  const decreaseQty = () => { if (quantity > 1) setQuantity(quantity - 1); };
  const increaseQty = () => {
    if (!selectedSizeData) return;
    if (quantity >= selectedSizeData.quantity) {
      alert("Đã đạt số lượng tối đa trong kho");
      return;
    }
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    setQuantity(1);
  }, [selectedSize]);

  const handleScrollToSizeGuide = () => {
    setActiveTab("chon-size");
    if (tabsRef.current) {
      const y = tabsRef.current.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen pb-20 pt-40 font-sans text-gray-800">

      <div className="border-b border-gray-200">
        <div className="max-w-7xl w-full mx-auto px-4 py-3 text-sm text-gray-500">
          <span>Trang chủ</span> <span className="mx-2">|</span>
          <span>Bộ Sưu Tập Adidas Predator 26</span> <span className="mx-2">|</span>
          <span className="text-yellow-600 font-medium">{current.nameProduct}</span>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 mt-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ProductGallery current={current} />

          <ProductInfo
            current={current}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            quantity={quantity}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            onScrollToSizeGuide={handleScrollToSizeGuide}
          />

          <ProductCommites />
        </div>

        <ProductTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabsRef={tabsRef}
        />

      </div>
    </div>
  );
};

export default DetailProduct;