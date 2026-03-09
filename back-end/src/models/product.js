const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nameProduct: String,
    priceProduct: Number,
    descriptProduct: String,
    imgSrc: [String],
    sizes: [
        {
            size: Number,
            quantity: Number,
        }
    ]
});

module.exports = mongoose.model("Product", ProductSchema);