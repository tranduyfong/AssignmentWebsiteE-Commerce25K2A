const { hashPassword } = require('../../utils/password')
const User = require("../../models/user");
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

module.exports = { handleUserCreate, handleGetUser };