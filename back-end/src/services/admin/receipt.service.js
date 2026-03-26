const Receipt = require('../../models/receipt');

// Hàm lấy danh sách đơn hàng
const fetchReceipts = async (userId = null) => {
    try {
        const query = userId ? { userId: userId } : {};

        // 2. Query vào Database
        const receipts = await Receipt.find(query)
            .sort({ createdAt: -1 }) // Sắp xếp đơn hàng mới nhất lên đầu tiên
        // Optional: Bạn có thể dùng .populate() nếu muốn lấy chi tiết tên, ảnh sản phẩm từ collection Product
        // .populate('products.productId', 'nameProduct imgSrc priceProduct'); 

        return receipts;

    } catch (error) {
        throw new Error("Lỗi khi truy vấn dữ liệu đơn hàng: " + error.message);
    }
};

module.exports = {
    fetchReceipts
};