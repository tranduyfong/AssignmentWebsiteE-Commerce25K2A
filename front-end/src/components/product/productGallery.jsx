import React from "react";

const ProductGallery = ({ current }) => {
  return (
    <div className="lg:col-span-5 relative bg-[#ffcc00] flex items-center justify-center p-8 rounded">
      <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 italic tracking-widest">
        ELITE
      </div>
      <div className="absolute top-4 left-4 text-3xl font-black italic tracking-tighter">
        beck.
      </div>
      <img
        src={current.imgSrc}
        alt={current.nameProduct}
        className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xl hover:scale-105 transition duration-500"
      />
    </div>
  );
};

export default ProductGallery;