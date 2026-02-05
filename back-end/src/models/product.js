const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nameProduct: String,
    priceProduct: Number,
    imgSrc: [String],
    sizes: [
        {
            size: 40,
            quantity: 30,
        }
    ]
});

module.exports = mongoose.model("Product", ProductSchema);