const Product = require("../../models/product")

const handleGetAllProduct = async () => {
    return Product.find({})
}

module.exports = { handleGetAllProduct }