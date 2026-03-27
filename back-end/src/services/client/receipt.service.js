const Product = require("../../models/product");
const Receipt = require("../../models/receipt");

const handleCheckExistQuantity = async (data) => {
    for (const item of data) {
        // Số lượng mua và size đã chọn
        const cartQuantity = item.quantity;
        const selectedSize = item.size;

        const product = await Product.findById(item.productId);

        if (!product) {
            throw new Error(`Sản phẩm không tồn tại trong hệ thống!`);
        }

        // Tìm đúng size của mình trong data fetch ở trên
        const sizeInfo = product.sizes.find(s => s.size === selectedSize);
        if (!sizeInfo) {
            throw new Error(`Sản phẩm "${product.nameProduct}" hiện không có size ${selectedSize}!`);
        }

        if (cartQuantity > sizeInfo.quantity) {
            throw new Error(`Sản phẩm "${product.nameProduct}" size ${selectedSize} chỉ còn ${sizeInfo.quantity} đôi trong kho!`);
        }
    }
}

const handleUpdateStock = async (products) => {
    // Lặp qua từng sản phẩm khách vừa mua
    for (const item of products) {
        await Product.updateOne(
            {
                _id: item.productId,
                "sizes.size": item.size
            },
            {
                $inc: {
                    // Toán tử $inc dùng để tăng/giảm số lượng
                    // Dấu $ đại diện cho cái size đã tìm thấy ở điều kiện trên
                    "sizes.$.quantity": -item.quantity
                }
            }
        );
    }
};

const handleBuyProducts = async (data) => {
    // Check có đủ dư số lượng hay không
    await handleCheckExistQuantity(data?.products);
    const newReceipt = await Receipt.create(data);

    // Trừ tồn kho
    await handleUpdateStock(data?.products);

    return newReceipt;
}

module.exports = { handleCheckExistQuantity, handleBuyProducts, handleUpdateStock };