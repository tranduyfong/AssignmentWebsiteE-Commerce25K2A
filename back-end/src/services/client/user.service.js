const { hashPassword } = require('../../utils/password')
const User = require("../../models/user");
const { getProductById } = require('../../controllers/product.controller');
require('dotenv').config();

const handleUserCreate = async (name, email, phone, password) => {
    if (!name || !email || !password || !phone) throw new Error("Thiếu thông tin bắt buộc");

    const existEmail = await User.findOne({ email });
    if (existEmail) throw new Error("Email đã tồn tại");

    const passwordHash = await hashPassword(password);

    return User.create({
        name: name,
        email: email,
        password: passwordHash,
        phone: phone
    });
}

const handleGetUser = async () => {
    return User.find({})
}

const getCartData = async (id) => {
    const user = await User.findById(id)
        .select("cart")
        .populate({
            path: "cart.productId",
            select: "nameProduct priceProduct imgSrc"
        });

    if (!user) return null;
    return user.cart;
}

const addToCartData = async (userId, productId, quantity, size) => {
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({
            message: "User không tồn tại"
        });
    }

    const existingItem = user.cart.find(
        item =>
            item.productId.toString() === productId &&
            item.size === size
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        user.cart.push({
            productId,
            quantity,
            size
        });
    }

    await user.save();
}

const handleDeleteCart = async (idUser, idCart) => {
    if (!idCart) throw new Error("Không xác định được sản phẩm cần xóa !");

    const result = await User.findByIdAndUpdate(
        idUser,
        {
            $pull: { cart: { _id: idCart } }
        }, { new: true }
    )

    if (result.deletedCount === 0) throw new Error("Không tìm thấy sản phẩm !");

    return result;
}

module.exports = { handleUserCreate, handleGetUser, getCartData, addToCartData, handleDeleteCart };