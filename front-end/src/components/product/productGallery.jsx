import React, { useState, useEffect } from "react";

const ProductGallery = ({ current }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (current?.imgSrc?.length > 0) {
      setSelectedImage(current.imgSrc[0]);
    }
  }, [current]);

  return (
    <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
      </div>
      <div className="w-full flex justify-center items-center bg-gray-50 rounded-xl p-6">
        <img
          src={selectedImage}
          alt={current?.nameProduct}
          className="max-h-100 object-contain transition duration-300"
        />
      </div>
      <div className="flex gap-3 mt-5 justify-center flex-wrap">
        {current?.imgSrc?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            onClick={() => setSelectedImage(img)}
            className={`w-16 h-16 object-cover cursor-pointer rounded-lg border 
              ${selectedImage === img
                ? "border-black scale-105"
                : "border-gray-200"
              }
              hover:scale-105 hover:border-black transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;