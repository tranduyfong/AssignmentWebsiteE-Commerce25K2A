import React, { useState, useEffect } from "react";

const ProductGallery = ({ current }) => {  
  const rawImageList = Array.isArray(current?.imgSrc) 
    ? current.imgSrc 
    : (current?.imgSrc ? [current.imgSrc] : []);

  const uniqueImageList = Array.from(new Set(rawImageList));

  const imageList = uniqueImageList.length > 0 
    ? uniqueImageList 
    : ["https://placehold.co/600x600?text=No+Image"];

  const [mainImage, setMainImage] = useState(imageList[0]);

  useEffect(() => {
    if (imageList.length > 0) {
      setMainImage(imageList[0]);
    }
  }, [current]);

  return (
    <div className="lg:col-span-5 flex flex-col gap-4">
      
      <div className="relative bg-white flex items-center justify-center p-8 rounded-lg aspect-4/3 border border-gray-100">
        <img
          src={mainImage}
          alt={current?.nameProduct || "Product"}
          className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm transition-all duration-300"
        />
      </div>
      
      {imageList.length > 1 && (
        <div className="flex flex-row gap-4 overflow-x-auto py-2">
          {imageList.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 border rounded cursor-pointer p-2 flex items-center justify-center shrink-0 transition-all 
                ${mainImage === img ? "border-black shadow-md scale-105" : "border-gray-200 hover:border-gray-400"}`}
            >
              <img 
                src={img} 
                alt={`thumb-${idx}`} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default ProductGallery;