const Product = require("../models/product");

const getProductPage = async (req, res) => {
    const result = await Product.find({});
    return res.status(200).json({
        data: result
    });
}

const createProduct = async (req, res) => {
    try {
        let { nameProduct, priceProduct, descriptProduct, imgSrc, sizes } = req.body;
        await Product.create({
            nameProduct: nameProduct,
            priceProduct: priceProduct,
            descriptProduct: descriptProduct,
            imgSrc: imgSrc,
            sizes: sizes
        })
        return res.status(200).json({
            data: "Thêm thành công sản phẩm"
        });
    } catch (err) {
        res.status(400).json({
            data: err.message
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { idProduct } = req.params;
        const result = await Product.deleteOne({ _id: idProduct });

        return res.status(200).json({
            data: 'Xóa sản phẩm thành công'
        });

    } catch (error) {
        return res.status(400).json({
            data: error.message
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { idProduct } = req.params;
        const { nameProduct, priceProduct, descriptProduct, imgSrc } = req.body;

        const result = await Product.findByIdAndUpdate(
            idProduct,
            { nameProduct, priceProduct, descriptProduct, imgSrc },
            { new: true, runValidators: true }
        );

        return res.status(200).json({
            message: "Update success",
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = { getProductPage, createProduct, deleteProduct, updateProduct };