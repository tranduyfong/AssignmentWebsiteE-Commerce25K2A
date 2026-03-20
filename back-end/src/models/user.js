const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,

    role: {
        type: String,
        enum: ["user", "admin", "staff"],
        default: "user",
    },

    address: [{
        city: String,
        district: String,
        village: String,
        more: String,
        isDefault: Boolean
    }],

    cart: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        size: Number,
        quantity: Number
    }],
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);