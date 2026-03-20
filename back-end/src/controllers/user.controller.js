const { handleUserCreate, handleGetUser } = require('../services/client/user.service');

const getUser = async (req, res) => {
    const result = await handleGetUser();
    return res.status(200).json({
        data: result
    });
}

const createUser = async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {
        await handleUserCreate(name, email, password, phone);
        return res.status(201).json({
            data: "Thêm tài khoản thành công!"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
}

const getAccount = async (req, res) => {
    const user = req.user;
    res.status(200).json({
        data: { user }
    });
}

module.exports = { getUser, createUser, getAccount };