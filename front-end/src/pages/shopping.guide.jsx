const ShoppingGuide = () => {
  return (
    <div className="max-w-5xl mx-auto mt-24 px-6 mt-50">
      <h1 className="text-4xl font-extrabold italic mb-6">
        HƯỚNG DẪN MUA HÀNG
      </h1>
      <hr className="border-gray-300 mb-10" />
      <div className="space-y-3 text-[15px] leading-relaxed">
        <p>
          Truy cập website: 
          <a 
            href="https://beck.vn/" 
            className="text-red-500 font-semibold ml-1"
          >
            https://beck.vn/
          </a>
          {" "}và lựa chọn sản phẩm bạn muốn mua.
        </p>
        <p>
          Sau khi lựa chọn được sản phẩm và kiểm tra còn hàng các bạn có thể mua hàng bằng những cách sau:
        </p>
        <h1 className="text-xl font-bold mt-4">
          1. Mua hàng trực tiếp
        </h1>

        <p>Quý khách có thể đến trực tiếp cửa hàng tại địa chỉ:</p>
        <p>
            <b>639 Kim Ngưu, P. Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội (mặt đường lớn)</b>
        </p>
        <h1 className="text-xl font-bold mt-4">
          2. Mua hàng online
        </h1>
        <p>
          Nếu không thể tới trực tiếp cửa hàng để mua hàng, quý khách có thể đặt hàng qua:
        </p>

        <p>
          <b>Website:</b>{" "}
          <a href="https://beck.vn/" className="text-blue-600">
            https://beck.vn/
          </a>
        </p>
        <p>
          <b>Hotline/Zalo:</b> 0931. 51. 41. 31
        </p>
        <p>
          <b>Facebook:</b>{" "}
          <a
            href="https://www.facebook.com/soccerbeck"
            className="text-blue-600"
          >
            https://www.facebook.com/soccerbeck
          </a>
        </p>
        <p>
          <b>Tiktok:</b>{" "}
          <a
            href="https://www.tiktok.com/@beck.vn"
            className="text-blue-600"
          >
            https://www.tiktok.com/@beck.vn
          </a>
        </p>
        <p>
          <b>Shopee:</b>{" "}
          <a
            href="https://s.shopee.vn/soccerbeck"
            className="text-blue-600"
          >
            https://s.shopee.vn/soccerbeck
          </a>
        </p>
        <p className="text-red-500 italic mt-6">
          Lưu ý: Điền đầy đủ thông tin bao gồm: Tên, SĐT và địa chỉ nhận hàng để
          chúng tôi có thể liên hệ lại cho bạn để xác nhận thông tin đơn hàng.
        </p>

      </div>
    </div>
  );
};

export default ShoppingGuide;