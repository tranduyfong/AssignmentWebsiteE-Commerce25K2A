import React from "react";

const ProductInfo = ({ 
  product, 
  selectedSize, 
  setSelectedSize, 
  quantity, 
  increaseQty, 
  decreaseQty, 
  onScrollToSizeGuide 
}) => {
  return (
    <div className="lg:col-span-4 flex flex-col">
      <h1 className="text-2xl font-medium leading-snug mb-2">{product.name}</h1>
      <p className="text-sm text-gray-500 mb-2 uppercase">Mã sản phẩm: {product.sku}</p>
      <div className="text-3xl font-bold text-red-600 mb-3">{product.price}</div>

      <div className="mb-6">
        <span className="inline-block border border-gray-400 rounded-full px-3 py-1 text-xs font-medium">
          {product.status}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2 uppercase">Chọn size:</p>
        <div className="flex flex-row! flex-wrap gap-2 mb-2">
          {product.sizes.map((size) => (
            <div
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 border flex items-center justify-center text-sm transition-colors cursor-pointer shrink-0
                ${selectedSize === size ? "border-black bg-black text-white font-bold" : "border-gray-300 hover:border-black"}`}
            >
              {size}
            </div>
          ))}
        </div>
        <span
          onClick={onScrollToSizeGuide}
          className="inline-block bg-[#1c2431] text-white text-[11px] px-3 py-1.5 rounded-full cursor-pointer hover:bg-black transition-colors"
        >
          Hướng dẫn chọn size
        </span>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-2 uppercase">Chọn số lượng:</p>
        <div className="flex flex-row! items-center mb-4">
          <div onClick={decreaseQty} className="w-10 h-10 border border-gray-300 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-lg cursor-pointer shrink-0">-</div>
          <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center font-medium shrink-0">{quantity}</div>
          <div onClick={increaseQty} className="w-10 h-10 border border-gray-300 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-lg cursor-pointer shrink-0">+</div>
        </div>

        <div className="w-full bg-[#ffcc00] hover:bg-yellow-500 text-black font-bold uppercase py-4 rounded transition text-lg flex flex-col items-center justify-center leading-none shadow-sm cursor-pointer">
          <span>Mua tại đây</span>
          <span className="text-xs mt-1 font-medium">Free Ship</span>
        </div>
      </div>

      <div className="text-xs font-bold uppercase">Xem theo #tags:</div>
    </div>
  );
};

export default ProductInfo;