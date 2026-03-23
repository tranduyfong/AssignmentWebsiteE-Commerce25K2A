const { handleUserCreate, handleGetUser, getCartData, addToCartData, handleDeleteCart } = require('../services/client/user.service');

const getUser = async (req, res) => {
    const result = await handleGetUser();
    return res.status(200).json({
        data: result
    });
}

const createUser = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        await handleUserCreate(name, email, phone, password);
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

const getCartByUserId = async (req, res) => {
    try {
        const idUser = req.user.id;
        const cart = await getCartData(idUser);

        if (cart === null) {
            return res.status(404).json({
                message: "User không tồn tại"
            });
        }

        return res.status(200).json({
            message: "Get cart success",
            data: cart
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

const addToCart = async (req, res) => {
    const userId = req.user.id;;
    const { productId, quantity, size } = req.body;
    await addToCartData(userId, productId, quantity, size);
    return res.status(200).json({
        message: "Thêm vào giỏ hàng thành công",
    });
}

const deleteInCart = async (req, res) => {
    const userId = req.user.id;
    const { idCart } = req.params;

    const result = await handleDeleteCart(userId, idCart);
    if (result) {
        return res.status(200).json({
            data: 'Xóa khỏi giỏ hàng thành công'
        });
    }
}

module.exports = { getUser, createUser, getAccount, getCartByUserId, addToCart, deleteInCart };