const { handleCreateProduct, handleDeleteProduct, handleUpdateProduct } = require('../services/admin/product.service');
const { handleGetAllProduct } = require('../services/client/product.service');

const getProductPage = async (req, res) => {
    const result = await handleGetAllProduct();
    return res.status(200).json({
        data: result
    });
};

const createProduct = async (req, res) => {
    try {
        let { nameProduct, priceProduct, imgSrc, sizes } = req.body;
        await handleCreateProduct(nameProduct, priceProduct, imgSrc, sizes);
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
        await handleDeleteProduct(idProduct);

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
        const { nameProduct, priceProduct, imgSrc } = req.body;

        const result = await handleUpdateProduct(idProduct, nameProduct, priceProduct, imgSrc);

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



module.exports = {
    getProductPage,
    createProduct,
    deleteProduct,
    updateProduct
}