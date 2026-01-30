import { useState } from "react";
import "./footer.css";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubcribe = () => {
        if(email.trim() === ""){
            alert("Vui lòng nhập emmail!");
        } else {
            alert("Email của bạn đã đăng kí là: " + email);
            setEmail("");
        }
    };

    return (
        <>
            <div className="bg-gray-300 h-10 flex justify-center items-center fixed bottom-0 w-screen">
                <p>Đây là Footer</p>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="item">
                        <h3>BECK</h3>
                        <p>Website bán giày thể thao chính hãng</p>
                    </div>
                    <div className="item">
                        <h3>Hỗ trợ</h3>
                        <p>Chính sách bảo hành</p>
                        <p>Chính sách đổi trả</p>
                        <p>Hướng dẫn mua hàng</p>
                    </div>
                    <div className="item">
                        <h3>Liên hệ</h3>
                        <p>Email: support.beck@gmail.com</p>
                        <p>Hotline/Zalo: 0931. 51. 41. 31</p>
                        <p>Địa chỉ: 639 Kim Ngưu, P. Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội (mặt đường lớn)</p>
                    </div>
                    <div className="item">
                        <h3>Đăng ký nhận tin khuyến mãi</h3>
                        <input type="email" placeholder="Nhập email của bạn tại đây" 
                        value={email} onChange={(e) => setEmail(e.target.value)}>
                        </input>
                        <button onClick={handleSubcribe}>Đăng ký</button>
                    </div>
                </div>
            </footer>
        </>

        
    );
}

export default Footer;