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

const handleBuyProducts = async (data) => {
    console.log(data);

    await handleCheckExistQuantity(data?.products);
    return Receipt.create(data);
}

module.exports = { handleCheckExistQuantity, handleBuyProducts };