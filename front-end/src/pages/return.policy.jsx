const ReturnPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto mt-32 px-6 mt-50">
        <h1 className="text-4xl font-extrabold italic mb-6">
            CHÍNH SÁCH ĐỔI TRẢ
        </h1>
        <hr className="mb-10 border-gray-300" />
        <div className="space-y-3 text-[15px] leading-relaxed">
            <h1 className="text-xl font-bold">
                1. Quy định đổi trả
            </h1>
        <p>
          Khách hàng có thể đổi hàng ( đổi size hoặc đổi màu ) trong vòng 
          <b> 7 NGÀY </b> sau khi nhận được hàng với điều kiện :
        </p>
        <p>
          <b>GIÀY CHƯA SỬ DỤNG</b>, mới 100%, chưa mang chạy thử, đá thử
        </p>
        <p>
          <b>GIÀY HOÀN TOÀN SẠCH SẼ</b>, không có bất kỳ sự hư hao
          ( rách , xước giày , trầy lót , dây , đế giày… )
        </p>
        <p>
          <b>ĐẦY ĐỦ HỘP THEO GIÀY</b>, còn nguyên tem , tag , hóa đơn mua hàng
        </p>
        <p className="italic">
          Các trường hợp đổi hàng quá 7 ngày vui lòng liên hệ Hotline :
          <b> 0931. 51. 41. 31 </b> để được xử lý.
        </p>
        <p>
          Khách hàng có thể đổi sang 1 hoặc nhiều sản phẩm có giá trị tương đương,
          Cao hơn <span className="text-red-500 font-semibold">(khách hàng sẽ bù thêm tiền)</span>,
          hoặc Thấp hơn
          <span className="text-red-500 font-semibold">
            {" "}
            (shop sẽ hoàn lại khoản chênh lệch không vượt quá 30% giá trị đôi giày)
          </span>{" "}
          sau quá trình đổi hàng.
        </p>

      </div>

      <div className="mt-8 space-y-3 text-[15px] leading-relaxed">
        <h1 className="text-xl font-bold">
          2. Phương thức hoàn tiền
        </h1>
        <p>
          Tùy theo lí do hoàn trả sản phẩm, kết quả đánh giá chất lượng sản phẩm
          mà khách hàng gửi lại hoặc qua chụp ảnh,
          <b> beck.vn </b>
          sẽ có những phương thức hoàn tiền với chi tiết như sau:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Đổi sản phẩm mới cùng loại</li>
          <li>Chuyển khoản qua ngân hàng theo thông tin khách hàng cung cấp</li>
          <li>
            Đối với các đơn hàng thanh toán qua thẻ tín dụng quốc tế,
            <b> Beck. </b> sẽ áp dụng hình thức hoàn tiền vào tài khoản
            thanh toán của chủ thẻ.
          </li>
          <li>Hoàn tiền mặt trực tiếp tại cửa hàng</li>
          <li>
            Hoàn tiền qua nạp thẻ cào điện thoại
            (viettel, vinaphone, mobile) vào số điện thoại khách hàng chỉ định
          </li>
        </ul>
        <p>
          Mọi chi tiết hoặc thắc mắc xin vui lòng liên hệ với
          <b> Beck. </b>
          qua số điện thoại hỗ trợ hoặc để lại lời nhắn tại website.
        </p>

      </div>

      <div className="mt-8 font-bold">
        CHÚ Ý: TẤT CẢ SẢN PHẨM TRONG CHƯƠNG TRÌNH SALE / XẢ HÀNG / QUÀ TẶNG
        SẼ KHÔNG ĐƯỢC PHÉP HOÀN TRẢ CŨNG NHƯ ĐỔI TRẢ.
      </div>
      <p className="mt-3 italic">
        Xin chân thành cảm ơn.
      </p>

    </div>
  );
};

export default ReturnPolicy;