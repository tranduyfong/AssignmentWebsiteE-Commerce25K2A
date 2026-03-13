import React from "react";

const ProductTab = ({ activeTab, setActiveTab, tabsRef }) => {
  return (
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
            <h3 className="text-lg font-bold text-green-600 uppercase mb-4">Hướng dẫn mua hàng</h3>
            <div>
              Để mua hàng ngay lập tức anh em chỉ cần gọi đến <strong>0963.51.41.31</strong> và cung cấp tên sản phẩm cùng size cần mua.<br />
              Để mua hàng theo cách bình thường anh em làm theo các bước sau:
            </div>
            <div>
              <p className="font-bold italic">Bước 1: Truy cập website và lựa chọn sản phẩm cần mua để mua hàng</p>
              <p className="text-sm">Anh em có thể sử dụng bộ lọc size để tìm nhanh hơn mẫu giày phù hợp với anh em nhất. Kết quả bộ lọc size vừa thể hiện chính xác các mẫu giày đáp ứng kích thước lại vừa tránh cho anh em phải lựa chọn quá nhiều mẫu giày trong khi có thể các mẫu đó đã / tạm thời hết hàng, hết size. Nhìn vào danh sách sản phẩm của bộ lọc size, anh em cũng khái quát được những màu sắc hiện có để lựa chọn một cách trực quan nhất.</p>
            </div>
            <div>
              <p className="font-bold italic">Bước 2: Click vào sản phẩm muốn mua</p>
              <p className="text-sm">Trang chi tiết sản phẩm sẽ hiện ra với các nút <span className="text-yellow-600 font-bold">MUA NGAY</span> màu vàng ở bên cạnh ảnh sản phẩm.<br />Click vào nút MUA NGAY này và không quên chọn 1 trong các size có sẵn được liệt kê ngay bên trên. Hệ thống sẽ lập tức chuyển đến trang giỏ hàng, liệt kê danh sách các sản phẩm anh em đã ngắm mua và đã ấn nút mua. Nếu anh em đã chắc chắn về các sản phẩm đó, ấn nút THANH TOÁN để hoàn tất.</p>
            </div>
            <div>
              <p className="font-bold italic">Bước 3: Điền các thông tin để nhận đơn hàng</p>
              <p className="text-sm">Anh em điền lần lượt các thông tin vào các dòng. <br />Lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình. <br />Thông tin số điện thoại và địa chỉ chi tiết là cực kì quan trọng, nên bạn điền xong cần kiểm tra lại thật kĩ.</p>
            </div>
            <div>
              <p className="font-bold italic">Bước 4: Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng</p>
              <p className="text-sm">Anh em xem lại thông tin đơn hàng, kiểm tra lại tên sản phẩm, giá từng loại sản phẩm và số lượng. <br />Anh em kiểm tra lại thông tin của người nhận hàng (SĐT, địa chỉ..)<br />Sau khi nhận được đơn hàng của anh em, <span className="font-bold text-black italic">beck.</span> thường sẽ gọi điện ngay lập tức nên anh em hãy chú ý điện thoại nhé<br /><span className="font-bold text-black italic">Trân trọng cảm ơn.</span></p>
            </div>
          </div>
        )}

        {activeTab === "chon-size" && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-lg font-bold text-white bg-[#1c2431] inline-block px-3 py-1 rounded-sm uppercase mb-2">
              Hướng dẫn chọn size
            </h3>
            <p><span className="font-bold italic">Cách 1: Dựa vào size của đôi giày bạn đang đi (chính xác 95%)</span><br />Lấy ngay đôi giày của mỉnh ra xem lại nhé (anh em nào ít đá bóng có thể mượn của đồng đội hoặc anh hàng xóm :D ) <br />Nếu đang đi dòng giày vải (Thượng Đình, Thashoco, bata tàu warrior...) thì bạn phải tăng lên 1 size khi chọn <br />(Ví dụ: đi Thượng Đình 39 thì chọn size 40) <br />Nếu anh em đang đi giày nike, adidas, puma....thì anh em giữ nguyên size khi chọn</p>
            <p><span className="font-bold italic">Cách 2: Dựa vào bảng chọn size (chính xác 80%)</span><br />Khi không có 1 đôi giày bên cạnh để đối chiếu thì anh em có thể lấy thước đo chân rồi so sánh với bảng sau <br />Cách chọn này sở dĩ được <span className="font-bold text-black italic">beck.</span> đánh giá chính xác ở mức độ 80% nó phụ thuộc rất nhiều yếu tố như động tác đo của bạn có chuẩn xác tuyệt đối không, thước bạn sử dụng, mắt đọc có thẳng hay không và chân bạn và phom giày có hợp không, Có anh em chân bè, có anh em chân thon.</p>
            
            <div className="border border-black inline-block p-4 mt-2">
              <h4 className="text-center font-bold text-lg mb-4">Bảng đo size giày</h4>
              <table className="w-64 text-center border-collapse">
                <thead>
                  <tr className="bg-blue-200 font-bold">
                    <th className="border border-gray-400 p-1">US</th>
                    <th className="border border-gray-400 p-1">VietNam</th>
                    <th className="border border-gray-400 p-1">CM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-400 font-bold">3.5</td><td className="border border-gray-400">35</td><td className="border border-gray-400">22</td></tr>
                  <tr><td className="border border-gray-400 font-bold">4</td><td className="border border-gray-400">36</td><td className="border border-gray-400">22.5</td></tr>
                  <tr><td className="border border-gray-400 font-bold">4.5</td><td className="border border-gray-400">37</td><td className="border border-gray-400">23</td></tr>
                  <tr><td className="border border-gray-400 font-bold">5</td><td className="border border-gray-400">38</td><td className="border border-gray-400">23.5</td></tr>
                  <tr><td className="border border-gray-400 font-bold">5.5</td><td className="border border-gray-400">39</td><td className="border border-gray-400">24</td></tr>
                  <tr><td className="border border-gray-400 font-bold">6</td><td className="border border-gray-400">40</td><td className="border border-gray-400">24.5</td></tr>
                  <tr><td className="border border-gray-400 font-bold">6.5</td><td className="border border-gray-400">41</td><td className="border border-gray-400">25</td></tr>
                  <tr><td className="border border-gray-400 font-bold">7</td><td className="border border-gray-400">42</td><td className="border border-gray-400">25.5</td></tr>
                  <tr><td className="border border-gray-400 font-bold">7.5</td><td className="border border-gray-400">43</td><td className="border border-gray-400">26</td></tr>
                  <tr><td className="border border-gray-400 font-bold">8</td><td className="border border-gray-400">44</td><td className="border border-gray-400">26.5</td></tr>
                  <tr><td className="border border-gray-400 font-bold">8.5</td><td className="border border-gray-400">45</td><td className="border border-gray-400">27</td></tr>
                  <tr><td className="border border-gray-400 font-bold">9</td><td className="border border-gray-400">46</td><td className="border border-gray-400">27.5</td></tr>
                </tbody>
              </table>
            </div>

            <p><span className="font-bold italic">Cách 3: Gọi điện tới số hotline của <span className="font-bold text-black italic">beck.</span> - 0963.51.41.31 để được nhân viên bên mình chọn giúp</span><br />Nếu với 2 cách trên vẫn chưa làm anh em hết băn khoăn thì anh em hãy gọi điện cho <span className="font-bold text-black italic">beck.</span> luôn và ngay nhé. <br />Anh em lưu ý, trong tất cả các cách chọn size trên của BECK SPORT đưa ra đều chỉ mang tính chất hướng dẫn, để ae tham khảo. <br />Anh em mua giày tại <span className="font-bold text-black italic">beck.</span> nếu có rộng chật thì sẽ luôn được đổi size thoải mái cho tới khi vừa thi thôi. Tuy nhiên điều này hoàn toàn xuất phát từ chính sách đặt lợi ích của khách hàng lên đầu của <span className="font-bold text-black italic">beck.</span> chứ không phải vì <span className="font-bold text-black italic">beck.</span> phải chịu trách nhiệm vì bài hướng dẫn chọn size này nhé.</p>
          </div>
        )}

        {activeTab === "hoan-tra" && (
          <div className="animate-fade-in space-y-4 text-[15px] leading-relaxed text-gray-800">
            <h3 className="text-lg font-bold text-green-500 uppercase mb-4">CHÍNH SÁCH ĐỔI TRẢ HÀNG</h3>
            <div>
              <p className="font-bold mb-2">1. Đổi hàng theo nhu cầu anh em (đổi trả hàng vì không ưng ý)</p>
              <p className="mb-2">Tất cả mặt hàng đã mua không thể được hoàn trả nhưng có thể đổi trả trong vòng 07 ngày kể từ ngày nhận hàng tính theo thời điểm thông báo từ đối tác vận chuyển.</p>
              <p className="mb-2"><span className="font-bold text-black italic">beck.</span> chỉ chấp nhận đổi hàng cho các sản phẩm thỏa mãn các điều kiện sau:</p>
              <div className="space-y-2 mb-2">
                <p>- Còn nguyên trạng như khi nhận được (bề mặt không bị nhăn nhúm, đế giày không bị xước, mòn, ...)</p>
                <p>- Đầy đủ các chi tiết, phụ kiện được tặng kèm theo đơn hàng (trong trường hợp chỉ đổi mẫu, đổi size thì có thể giữ lại phụ kiện, quà tặng).</p>
                <p>- Giày nhất định phải chưa sử dụng kể cả chạy thử, thi đấu thử</p>
              </div>
              <p>Sau 7 ngày kể từ ngày anh em nhận hàng, <span className="font-bold text-black italic">beck.</span> có quyền từ chối hỗ trợ cho những yêu cầu trên.</p>
            </div>
            <div className="pt-4">
              <p>------------------------------------</p>
              <p className="font-bold uppercase text-black mt-2">CHÚ Ý: TẤT CẢ SẢN PHẨM TRONG CHƯƠNG TRÌNH SALE / XẢ HÀNG / QUÀ TẶNG SẼ KHÔNG ĐƯỢC PHÉP HOÀN TRẢ CŨNG NHƯ ĐỔI TRẢ.</p>
              <p className="italic mt-1">Xin chân thành cảm ơn.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTab;