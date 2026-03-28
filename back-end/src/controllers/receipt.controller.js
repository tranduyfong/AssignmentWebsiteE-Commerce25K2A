const { fetchReceipts } = require("../services/admin/receipt.service");
const { handleBuyProducts } = require("../services/client/receipt.service");

const createReceipt = async (req, res) => {
    try {
        const data = req.body;

        const result = await handleBuyProducts(data);

        return res.status(201).json({
            success: true,
            message: "Đặt hàng thành công!",
            data: result
        });
    } catch (error) {
        console.log("Lỗi đặt hàng:", error.message);
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const getReceipt = async (req, res) => {
    try {
        const data = await fetchReceipts();

        return res.status(200).json({
            success: true,
            message: "Lấy danh sách đơn hàng thành công!",
            data: data
        });

    } catch (error) {
        console.error(">>> Lỗi tại getReceipt Controller:", error);

        return res.status(500).json({
            success: false,
            message: "Đã xảy ra lỗi từ phía máy chủ",
            error: error.message
        });
    }
};

const getMyReceipt = async (req, res) => {
    try {
        const userId = req.user.id;
        const data = await fetchReceipts(userId);

        return res.status(200).json({
            success: true,
            message: "Lấy danh sách đơn hàng thành công!",
            data: data
        });

    } catch (error) {
        console.error(">>> Lỗi tại getReceipt Controller:", error);

        return res.status(500).json({
            success: false,
            message: "Đã xảy ra lỗi từ phía máy chủ",
            error: error.message
        });
    }
}



module.exports = { createReceipt, getReceipt, getMyReceipt };