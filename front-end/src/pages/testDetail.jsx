import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import products from "../data/products";
const TestDetail = () => {
  const params = useParams();
  const id = parseInt(params.id)
  const product = products.find(item => item.id === id);
  const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("chi-tiet");
  
    const tabsRef = useRef(null);
  
    const handleScrollToSizeGuide = () => {
      setActiveTab("chon-size");
  
      if (tabsRef.current) {
        const y = tabsRef.current.getBoundingClientRect().top + window.scrollY - 150;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    const decreaseQty = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };
    const increaseQty = () => setQuantity(quantity + 1);
  
 return (
    <div className="w-full bg-white min-h-screen pb-20 pt-36 font-sans text-gray-800">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl w-full mx-auto px-4 py-3 text-sm text-gray-500">
          <span>Trang chủ</span> <span className="mx-2">|</span>
          <span>Bộ Sưu Tập Adidas Predator 26</span>{" "}
          <span className="mx-2">|</span>
          <span className="text-yellow-600 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 relative bg-[#ffcc00] flex items-center justify-center p-8 rounded">
            <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 italic tracking-widest">
              ELITE
            </div>
            <div className="absolute top-4 left-4 text-3xl font-black italic tracking-tighter">
              beck.
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <h1 className="text-2xl font-medium leading-snug mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 mb-2 uppercase">
              Mã sản phẩm: {product.sku}
            </p>
            <div className="text-3xl font-bold text-red-600 mb-3">
              {product.price}
            </div>

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
                onClick={handleScrollToSizeGuide}
                className="inline-block bg-[#1c2431] text-white text-[11px] px-3 py-1.5 rounded-full cursor-pointer hover:bg-black transition-colors"
              >
                Hướng dẫn chọn size
              </span>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-2 uppercase">
                Chọn số lượng:
              </p>
              <div className="flex flex-row! items-center mb-4">
                <div
                  onClick={decreaseQty}
                  className="w-10 h-10 border border-gray-300 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-lg cursor-pointer shrink-0"
                >
                  -
                </div>
                <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center font-medium shrink-0">
                  {quantity}
                </div>
                <div
                  onClick={increaseQty}
                  className="w-10 h-10 border border-gray-300 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-lg cursor-pointer shrink-0"
                >
                  +
                </div>
              </div>

              <div className="w-full bg-[#ffcc00] hover:bg-yellow-500 text-black font-bold uppercase py-4 rounded transition text-lg flex flex-col items-center justify-center leading-none shadow-sm cursor-pointer">
                <span>Mua tại đây</span>
                <span className="text-xs mt-1 font-medium">Free Ship</span>
              </div>
            </div>

            <div className="text-xs font-bold uppercase">Xem theo #tags:</div>
          </div>

          <div className="lg:col-span-3 border border-gray-200 p-4 bg-gray-50 h-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">KHÔNG SỢ HẾT SIZE</h4>
                  <p className="text-xs text-gray-600">
                    Do shop cần gọi điện nhân viên chốt đơn
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios/50/motorcycle-delivery-single-box.png"
                    alt="motorcycle-delivery-single-box"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">GIAO HÀNG TOÀN QUỐC</h4>
                  <p className="text-xs text-gray-600">
                    Gửi hàng đi luôn trong ngày
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">THANH TOÁN LINH HOẠT</h4>
                  <p className="text-xs text-gray-600">
                    Tiền mặt/CK/ví điện tử/thẻ
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">ĐỔI SIZE THOẢI MÁI</h4>
                  <p className="text-xs text-gray-600">
                    Đến khi anh em hài lòng
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">BẢO HÀNH TRỌN ĐỜI</h4>
                  <p className="text-xs text-gray-600">
                    Lỗi dễ dàng chỉ cần đọc SĐT
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">LUÔN LUÔN TRI ÂN</h4>
                  <p className="text-xs text-gray-600">
                    100% tích điểm, giảm giá lần sau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={tabsRef} className="mt-16 border border-gray-200">
          <div className="flex flex-wrap bg-[#333333] text-white text-sm font-bold uppercase cursor-pointer">
            <div
              className={`py-3 px-6 flex-1 text-center border-r border-gray-600 transition ${activeTab === "chi-tiet" ? "bg-[#ffcc00] text-black" : "hover:bg-gray-700"}`}
              onClick={() => setActiveTab("chi-tiet")}
            >
              Chi tiết sản phẩm
            </div>
            <div
              className={`py-3 px-6 flex-1 text-center border-r border-gray-600 transition ${activeTab === "huong-dan" ? "bg-[#ffcc00] text-black" : "hover:bg-gray-700"}`}
              onClick={() => setActiveTab("huong-dan")}
            >
              Hướng dẫn mua hàng
            </div>
            <div
              className={`py-3 px-6 flex-1 text-center border-r border-gray-600 transition ${activeTab === "chon-size" ? "bg-[#ffcc00] text-black" : "hover:bg-gray-700"}`}
              onClick={() => setActiveTab("chon-size")}
            >
              Cách chọn size
            </div>
            <div
              className={`py-3 px-6 flex-1 text-center transition ${activeTab === "hoan-tra" ? "bg-[#ffcc00] text-black" : "hover:bg-gray-700"}`}
              onClick={() => setActiveTab("hoan-tra")}
            >
              Chính sách hoàn trả
            </div>
          </div>

          <div className="p-8 text-gray-700 bg-white min-h-100">
            {activeTab === "chi-tiet" && (
              <div className="animate-fade-in">
                <h3 className="text-lg font-bold text-green-600 mb-4 uppercase">
                  Thông tin chi tiết
                </h3>
                <p>Nội dung chi tiết sản phẩm sẽ được hiển thị ở đây...</p>
              </div>
            )}

            {activeTab === "huong-dan" && (
              <div className="animate-fade-in space-y-4">
                <h3 className="text-lg font-bold text-green-600 uppercase mb-4">
                  Hướng dẫn mua hàng
                </h3>
                <div>
                  Để mua hàng ngay lập tức anh em chỉ cần gọi đến{" "}
                  <strong>0963.51.41.31</strong> và cung cấp tên sản phẩm cùng
                  size cần mua.
                  <br />
                  Để mua hàng theo cách bình thường anh em làm theo các bước
                  sau:
                </div>

                <div>
                  <p className="font-bold italic">
                    Bước 1: Truy cập website và lựa chọn sản phẩm cần mua để mua
                    hàng
                  </p>
                  <p className="text-sm">
                    Anh em có thể sử dụng bộ lọc size để tìm nhanh hơn mẫu giày
                    phù hợp với anh em nhất. Kết quả bộ lọc size vừa thể hiện
                    chính xác các mẫu giày đáp ứng kích thước lại vừa tránh cho
                    anh em phải lựa chọn quá nhiều mẫu giày trong khi có thể các
                    mẫu đó đã / tạm thời hết hàng, hết size. Nhìn vào danh sách
                    sản phẩm của bộ lọc size, anh em cũng khái quát được những
                    màu sắc hiện có để lựa chọn một cách trực quan nhất.
                  </p>
                </div>

                <div>
                  <p className="font-bold italic">
                    Bước 2: Click vào sản phẩm muốn mua
                  </p>
                  <p className="text-sm">
                    Trang chi tiết sản phẩm sẽ hiện ra với các nút{" "}
                    <span className="text-yellow-600 font-bold">MUA NGAY</span>{" "}
                    màu vàng ở bên cạnh ảnh sản phẩm.
                    <br />
                    Click vào nút MUA NGAY này và không quên chọn 1 trong các
                    size có sẵn được liệt kê ngay bên trên. Hệ thống sẽ lập tức
                    chuyển đến trang giỏ hàng, liệt kê danh sách các sản phẩm
                    anh em đã ngắm mua và đã ấn nút mua. Nếu anh em đã chắc chắn
                    về các sản phẩm đó, ấn nút THANH TOÁN để hoàn tất.
                  </p>
                </div>

                <div>
                  <p className="font-bold italic">
                    Bước 3: Điền các thông tin để nhận đơn hàng
                  </p>
                  <p className="text-sm">
                    Anh em điền lần lượt các thông tin vào các dòng. <br />
                    Lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của
                    mình. <br />
                    Thông tin số điện thoại và địa chỉ chi tiết là cực kì quan
                    trọng, nên bạn điền xong cần kiểm tra lại thật kĩ.
                  </p>
                </div>

                <div>
                  <p className="font-bold italic">
                    Bước 4: Xem lại thông tin đặt hàng, điền chú thích và gửi
                    đơn hàng
                  </p>
                  <p className="text-sm">
                    Anh em xem lại thông tin đơn hàng, kiểm tra lại tên sản
                    phẩm, giá từng loại sản phẩm và số lượng. <br />
                    Anh em kiểm tra lại thông tin của người nhận hàng (SĐT, địa
                    chỉ..)
                    <br />
                    Sau khi nhận được đơn hàng của anh em,{" "}
                    <span className="font-bold text-black italic">
                      beck.
                    </span>{" "}
                    thường sẽ gọi điện ngay lập tức nên anh em hãy chú ý điện
                    thoại nhé
                    <br />
                    <span className="font-bold text-black italic">
                      Trân trọng cảm ơn.
                    </span>
                  </p>
                </div>
              </div>
            )}

            {activeTab === "chon-size" && (
              <div className="animate-fade-in space-y-4">
                <h3 className="text-lg font-bold text-white inline-block px-2 py-1 uppercase mb-2">
                  Hướng dẫn chọn size
                </h3>
                <p>
                  <span className="font-bold italic">
                    Cách 1: Dựa vào size của đôi giày bạn đang đi (chính xác
                    95%)
                  </span>
                  <br />
                  Lấy ngay đôi giày của mỉnh ra xem lại nhé (anh em nào ít đá
                  bóng có thể mượn của đồng đội hoặc anh hàng xóm :D ) <br />
                  Nếu đang đi dòng giày vải (Thượng Đình, Thashoco, bata tàu
                  warrior...) thì bạn phải tăng lên 1 size khi chọn <br />
                  (Ví dụ: đi Thượng Đình 39 thì chọn size 40) <br />
                  Nếu anh em đang đi giày nike, adidas, puma....thì anh em giữ
                  nguyên size khi chọn
                </p>
                <p>
                  <span className="font-bold italic">
                    Cách 2: Dựa vào bảng chọn size (chính xác 80%)
                  </span>
                  <br />
                  Khi không có 1 đôi giày bên cạnh để đối chiếu thì anh em có
                  thể lấy thước đo chân rồi so sánh với bảng sau <br />
                  Cách chọn này sở dĩ được{" "}
                  <span className="font-bold text-black italic">
                    beck.
                  </span>{" "}
                  đánh giá chính xác ở mức độ 80% nó phụ thuộc rất nhiều yếu tố
                  như động tác đo của bạn có chuẩn xác tuyệt đối không, thước
                  bạn sử dụng, mắt đọc có thẳng hay không và chân bạn và phom
                  giày có hợp không, Có anh em chân bè, có anh em chân thon.
                </p>
                <div className="border border-black inline-block p-4 mt-2">
                  <h4 className="text-center font-bold text-lg mb-4">
                    Bảng đo size giày
                  </h4>
                  <table className="w-64 text-center border-collapse">
                    <thead>
                      <tr className="bg-blue-200 font-bold">
                        <th className="border border-gray-400 p-1">US</th>
                        <th className="border border-gray-400 p-1">VietNam</th>
                        <th className="border border-gray-400 p-1">CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 font-bold">
                          3.5
                        </td>
                        <td className="border border-gray-400">35</td>
                        <td className="border border-gray-400">22</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">4</td>
                        <td className="border border-gray-400">36</td>
                        <td className="border border-gray-400">22.5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">
                          4.5
                        </td>
                        <td className="border border-gray-400">37</td>
                        <td className="border border-gray-400">23</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">5</td>
                        <td className="border border-gray-400">38</td>
                        <td className="border border-gray-400">23.5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">
                          5.5
                        </td>
                        <td className="border border-gray-400">39</td>
                        <td className="border border-gray-400">24</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">6</td>
                        <td className="border border-gray-400">40</td>
                        <td className="border border-gray-400">24.5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">
                          6.5
                        </td>
                        <td className="border border-gray-400">41</td>
                        <td className="border border-gray-400">25</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">7</td>
                        <td className="border border-gray-400">42</td>
                        <td className="border border-gray-400">25.5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">
                          7.5
                        </td>
                        <td className="border border-gray-400">43</td>
                        <td className="border border-gray-400">26</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">8</td>
                        <td className="border border-gray-400">44</td>
                        <td className="border border-gray-400">26.5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">
                          8.5
                        </td>
                        <td className="border border-gray-400">45</td>
                        <td className="border border-gray-400">27</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 font-bold">9</td>
                        <td className="border border-gray-400">46</td>
                        <td className="border border-gray-400">27.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <span className="font-bold italic">
                    Cách 3: Gọi điện tới số hotline của{" "}
                    <span className="font-bold text-black italic">beck.</span> -
                    0963.51.41.31 để được nhân viên bên mình chọn giúp
                  </span>
                  <br />
                  Nếu với 2 cách trên vẫn chưa làm anh em hết băn khoăn thì anh
                  em hãy gọi điện cho{" "}
                  <span className="font-bold text-black italic">
                    beck.
                  </span>{" "}
                  luôn và ngay nhé. <br />
                  Anh em lưu ý, trong tất cả các cách chọn size trên của BECK
                  SPORT đưa ra đều chỉ mang tính chất hướng dẫn, để ae tham
                  khảo. <br />
                  Anh em mua giày tại{" "}
                  <span className="font-bold text-black italic">beck.</span> nếu
                  có rộng chật thì sẽ luôn được đổi size thoải mái cho tới khi
                  vừa thi thôi. Tuy nhiên điều này hoàn toàn xuất phát từ chính
                  sách đặt lợi ích của khách hàng lên đầu của{" "}
                  <span className="font-bold text-black italic">beck.</span> chứ
                  không phải vì{" "}
                  <span className="font-bold text-black italic">beck.</span>
                  phải chịu trách nhiệm vì bài hướng dẫn chọn size này nhé.
                </p>
              </div>
            )}

            {activeTab === "hoan-tra" && (
              <div className="animate-fade-in space-y-4 text-[15px] leading-relaxed text-gray-800">
                <h3 className="text-lg font-bold text-green-500 uppercase mb-4">
                  CHÍNH SÁCH ĐỔI TRẢ HÀNG
                </h3>
                <div>
                  <p className="font-bold mb-2">
                    1. Đổi hàng theo nhu cầu anh em (đổi trả hàng vì không ưng
                    ý)
                  </p>
                  <p className="mb-2">
                    Tất cả mặt hàng đã mua không thể được hoàn trả nhưng có thể
                    đổi trả trong vòng 07 ngày kể từ ngày nhận hàng tính theo
                    thời điểm thông báo từ đối tác vận chuyển.
                  </p>
                  <p className="mb-2">
                    <span className="font-bold text-black italic">beck.</span>{" "}
                    chỉ chấp nhận đổi hàng cho các sản phẩm thỏa mãn các điều
                    kiện sau:
                  </p>
                  <div className="space-y-2 mb-2">
                    <p>
                      - Còn nguyên trạng như khi nhận được (bề mặt không bị nhăn
                      nhúm, đế giày không bị xước, mòn, ...)
                    </p>
                    <p>
                      - Đầy đủ các chi tiết, phụ kiện được tặng kèm theo đơn
                      hàng (trong trường hợp chỉ đổi mẫu, đổi size thì có thể
                      giữ lại phụ kiện, quà tặng).
                    </p>
                    <p>
                      - Giày nhất định phải chưa sử dụng kể cả chạy thử, thi đấu
                      thử
                    </p>
                  </div>
                  <p>
                    Sau 7 ngày kể từ ngày anh em nhận hàng,{" "}
                    <span className="font-bold text-black italic">beck.</span>{" "}
                    có quyền từ chối hỗ trợ cho những yêu cầu trên của .
                  </p>
                </div>

                <div className="pt-2">
                  <p className="font-bold mb-2">
                    2. Đổi trả không vì lý do chủ quan từ anh em (Hàng giao
                    không mới, không nguyên vẹn, sai nội dung hoặc bị thiếu)
                  </p>
                  <p className="mb-2">
                    <span className="font-bold text-black italic">beck.</span>{" "}
                    khuyến khích anh em hàng phải kiểm tra tình trạng bên ngoài
                    của gói hàng và sản phẩm trước khi thanh toán để đảm bảo
                    rằng hàng hóa được giao đúng chủng loại, số lượng, màu sắc
                    theo đơn đặt hàng và tình trạng bên ngoài không bị tác động.
                  </p>
                  <p className="mb-2">
                    (Xin lưu ý những bước kiểm tra sâu hơn như xỏ thử giày, lên
                    chân để đánh giá ... chỉ có thể được chấp nhận sau khi đơn
                    hàng được thanh toán đầy đủ, nghĩa là đã chuyển khoản trước
                    cho cửa hàng toàn bộ hoặc một phần giá trị đơn hàng hoặc đã
                    thanh toán xong với bưu tá ngay tại lúc nhận hàng).
                  </p>
                  <p className="mb-2">
                    Trong trường hợp anh em đã thanh toán, nhận hàng và sau đó
                    phát hiện hàng hóa không còn mới nguyên vẹn, sai nội dung
                    hoặc thiếu hàng, xin vui lòng chụp ảnh sản phẩm và liên hệ
                    với{" "}
                    <span className="font-bold text-black italic">beck.</span>{" "}
                    để chúng tôi được khắc phục thiếu sót (của shop hoặc đối tác
                    vận chuyển) một cách nhanh nhất có thể.
                  </p>
                  <p>
                    Tuy nhiên với kinh nghiệm tổ chức bán hàng qua nhiều năm và
                    với tác phong chuyên nghiệp của mình,{" "}
                    <span className="font-bold text-black italic">beck.</span>{" "}
                    tự tin sai sót của chúng tôi là dưới 1% và thái độ tiếp nhận
                    khi có sự cố luôn là hợp tác đặt lợi ích của anh em cùng uy
                    tín của cửa hàng lên đầu..
                  </p>
                </div>

                <div className="pt-2">
                  <p className="font-bold mb-2">
                    3. Một số lưu ý khi gửi hàng đổi
                  </p>
                  <p className="mb-2">
                    -{" "}
                    <span className="underline italic">
                      Đổi hoặc bảo hành cái gì thì gửi cái đó
                    </span>
                    , hầu như bỏ qua việc gửi phụ kiện. Cụ thể nếu giày rộng
                    chật chẳng hạn và cần đổi size khác thì chỉ gửi đôi giày về
                    cho shop thôi. Tất / túi rút, hay bất cứ phần quà tặng hay
                    sản phẩm mua thêm nào khác không gửi về kèm.
                  </p>
                  <p className="mb-2">
                    -{" "}
                    <span className="underline italic">
                      Quí khách tự thanh toán chi phí khi gửi hàng
                    </span>
                    , bởi vì nếu quí khách chỉ định shop nhận bưu kiện phải
                    thanh toán chi phí vận chuyển thì shop sẽ luôn phải xác minh
                    đó là bưu kiện nào. Vì một ngày có rất nhiều KH gửi bưu kiện
                    về shop, hầu như các bưu kiện là không cần thanh toán, nếu
                    phát sinh một vài bưu kiện phải thanh toán thì shop phải
                    liên hệ lại KH xem đó là KH nào, vì sao phải thanh toán, như
                    thế sẽ rất mất thời gian cho cả KH, shop và bên chuyển phát.
                  </p>
                  <p>
                    Tuy nhiên các bạn yên tâm vì mọi chi phí phát sinh nếu việc
                    đổi trả hàng có nguyên nhân từ phía shop thì shop sẽ chịu
                    hoàn toàn chi phí và cộng dồn, khấu trừ...vào lần gửi lại
                    hàng cho bạn sau đó.
                  </p>
                </div>

                <div className="pt-2">
                  <p className="font-bold mb-2">4. Phương thức hoàn tiền</p>
                  <p className="mb-2">
                    Tùy theo lí do hoàn trả sản phẩm, kết quả đánh giá chất
                    lượng sản phẩm mà anh em gửi lại hoặc qua chụp ảnh , BECK
                    SPORT sẽ có những phương thức hoàn tiền với chi tiết như
                    sau:
                  </p>
                  <div className="space-y-2 mb-2">
                    <p>- Đổi sản phẩm mới cùng loại</p>
                    <p>
                      - Chuyển khoản qua ngân hàng theo thông tin của anh em
                      cung cấp
                    </p>
                    <p>
                      - Riêng đối với các đơn hàng thanh toán qua thẻ tín dụng
                      quốc tế,{" "}
                      <span className="font-bold text-black italic">beck.</span>{" "}
                      sẽ áp dụng hình thức hoàn tiền vào tài khoản thanh toán
                      của chủ thẻ.
                    </p>
                    <p>- Hoàn tiền mặt trực tiếp tại cửa hàng</p>
                    <p>
                      - Hoàn tiền qua nạp thẻ cào điện thoại (viettel,
                      vinaphone, mobile) vào 1 số điện thoại mà anh em chỉ định.
                    </p>
                  </div>
                  <p>
                    Mọi chi tiết hoặc thắc mắc anh em vui lòng liên hệ với BECK
                    SPORT qua số điện thoại hỗ trợ hoặc để lại lời nhắn tại
                    website.
                  </p>
                </div>
                <div className="pt-4">
                  <p>------------------------------------</p>
                  <p className="font-bold uppercase text-black mt-2">
                    CHÚ Ý: TẤT CẢ SẢN PHẨM TRONG CHƯƠNG TRÌNH SALE / XẢ HÀNG /
                    QUÀ TẶNG SẼ KHÔNG ĐƯỢC PHÉP HOÀN TRẢ CŨNG NHƯ ĐỔI TRẢ.
                  </p>
                  <p className="italic mt-1">Xin chân thành cảm ơn.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetail;