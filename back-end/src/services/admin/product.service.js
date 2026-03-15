const Product = require("../../models/product");

const handleCreateProduct = (nameProduct, priceProduct, imgSrc, sizes) => {
    if (!nameProduct || !priceProduct || !imgSrc || !sizes) throw new Error("Sản phẩm thiếu thông tin quan trọng !");

    return Product.create({
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        imgSrc: imgSrc,
        sizes: sizes
    });
}

const handleDeleteProduct = async (value) => {
    if (!value) throw new Error("Không xác định được sản phẩm cần xóa !");

    const result = await Product.deleteOne({ _id: value });

    if (result.deletedCount === 0) throw new Error("Không tìm thấy sản phẩm !");

    return result;
}

const handleUpdateProduct = async (idProduct, nameProduct, priceProduct, imgSrc) => {
    if (!idProduct) throw new Error("Không xác định được sản phẩm cần chỉnh sửa !");

    if (!nameProduct || priceProduct === undefined || !imgSrc) throw new Error("Sản phẩm thiếu thông tin quan trọng để chỉnh sửa !");

    const result = await Product.findByIdAndUpdate(
        idProduct,
        { nameProduct, priceProduct, imgSrc },
        { new: true, runValidators: true }
    );

    if (!result) throw new Error("Không tìm thấy sản phẩm !");

    return result;
}

module.exports = { handleCreateProduct, handleDeleteProduct, handleUpdateProduct }