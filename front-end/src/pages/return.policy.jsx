const ReturnPolicy = () => {
    return (
        <div className="container" style={{padding:"40px 0"}}>
            <h1>Chính sách đổi trả</h1>

            <p>
                BECK hỗ trợ đổi trả sản phẩm nếu khách hàng không hài lòng.
            </p>

            <h3>Thời gian đổi trả</h3>
            <p>
                Trong vòng <b>7 ngày</b> kể từ ngày nhận hàng.
            </p>

            <h3>Điều kiện đổi trả</h3>
            <ul>
                <li>Sản phẩm chưa qua sử dụng</li>
                <li>Còn đầy đủ hộp và phụ kiện</li>
                <li>Còn hóa đơn mua hàng</li>
            </ul>

            <h3>Trường hợp được đổi</h3>
            <ul>
                <li>Size giày không vừa</li>
                <li>Sản phẩm bị lỗi từ nhà sản xuất</li>
                <li>Giao sai sản phẩm</li>
            </ul>
        </div>
    );
};

export default ReturnPolicy;