const WarrantyPolicy = () => {
    return (
        <div className="container py-10">
            <h1>Chính sách bảo hành</h1>

            <p>
                Tất cả sản phẩm giày thể thao tại BECK đều được kiểm tra kỹ trước khi giao đến khách hàng.
            </p>

            <h3>Thời gian bảo hành</h3>
            <p>
                Sản phẩm được bảo hành trong vòng <b>30 ngày</b> kể từ ngày nhận hàng đối với lỗi từ nhà sản xuất.
            </p>

            <h3>Điều kiện bảo hành</h3>
            <ul>
                <li>Sản phẩm bị bung keo, lỗi đường may từ nhà sản xuất</li>
                <li>Sản phẩm còn trong thời gian bảo hành</li>
                <li>Còn đầy đủ hộp và phụ kiện đi kèm</li>
            </ul>

            <h3>Trường hợp không bảo hành</h3>
            <ul>
                <li>Giày bị hư do sử dụng sai cách</li>
                <li>Giày bị rách do va chạm mạnh</li>
                <li>Giày đã qua sửa chữa từ bên thứ ba</li>
            </ul>
        </div>
    );
};

export default WarrantyPolicy;