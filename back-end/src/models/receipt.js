const mongoose = require('mongoose');

const ReceiptSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            nameProduct: String,
            price: Number,
            imgSrc: String,

            size: Number,
            quantity: Number,

            totalPrice: Number
        }
    ],

    totalAmount: Number,

    paymentMethod: {
        type: String,
        enum: ["COD", "VNPAY"],
        default: "COD"
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
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
        city: String,
        district: String,
        ward: String
    }

}, { timestamps: true });
