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
  const product = {
    name: "Giày Bóng Đá Adidas Predator 26 Elite Bellingham Trắng Xanh Biển Lưỡi Gà Gập TF",
    sku: "26022804.39",
    price: "740.000đ",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    status: "HÀNG CÓ SẴN",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop",
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("chi-tiet");
  const tabsRef = useRef(null);

  const decreaseQty = () => { if (quantity > 1) setQuantity(quantity - 1); };
  const increaseQty = () => setQuantity(quantity + 1);

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