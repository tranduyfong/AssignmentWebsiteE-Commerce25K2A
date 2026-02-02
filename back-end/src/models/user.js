const mongoose = require('mongoose');

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
        detail: String,
    }],
    isActive: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);