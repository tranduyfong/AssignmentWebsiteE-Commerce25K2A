const Product = require("../../models/product")

const handleGetAllProduct = async (brand) => {
     if (brand) {
        return await Product.find({
            brand: { $regex: `^${brand}$`, $options: "i" }
        });
    }
    return await Product.find({})
}

const handleGetProductById = async (id) => {
    const result = await Product.findById(id);
    if (!result) throw new Error("Không tìm thấy sản phẩm !");
    return result;
}
module.exports = { handleGetAllProduct, handleGetProductById,}