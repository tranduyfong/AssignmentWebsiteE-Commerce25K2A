const mongoose = require('mongoose');

const ReceiptSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },

    orderCode: {
        type: String,
        required: true
    },

    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },

            nameProduct: String,
            imgSrc: String,

            priceAtTime: {
                type: Number,
                required: true
            },

            size: Number,
            quantity: Number
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: ["COD", "VNPAY"],
        default: "COD"
    },

    orderStatus: {
        type: String,
        enum: ["processing", "shipping", "completed", "cancelled"],
        default: "processing"
    },

    shippingAddress: {
        fullName: String,
        phone: String,
        address: String,
    }

}, { timestamps: true });

module.exports = mongoose.model("Receipt", ReceiptSchema);