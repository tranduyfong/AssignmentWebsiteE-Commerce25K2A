import { useState } from "react";
import "./style.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Vui lòng nhập email!");
    } else {
      alert("Email bạn đã đăng ký: " + email);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-item">
          <h2>BECK</h2>
          <p>Website bán giày thể thao chính hãng</p>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-tiktok"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>

        <div className="footer-item">
          <h2>Hỗ trợ</h2>
          <p>Chính sách đổi trả</p>
          <p>Hướng dẫn mua hàng</p>
          <p>Thanh toán</p>
        </div>

        <div className="footer-item">
          <h2>Liên hệ</h2>
          <p>Email: support@beck.vn</p>
          <p>Hotline: 0931. 51. 41. 31</p>
          <p>Địa chỉ: 639 Kim Ngưu, P. Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội (mặt đường lớn)</p>
        </div>

        <div className="footer-item">
          <h2>Đăng ký nhận tin khuyến mãi</h2>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Đăng ký</button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
