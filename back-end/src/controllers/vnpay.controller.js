const vnpayInstance = require("../configs/vnpay");
const Receipt = require("../models/receipt");
require('dotenv').config();

const createPaymentUrl = async (req, res) => {
    try {
        const { orderCode, amount } = req.body;

        // Get ip User
        const ipAddr = '127.0.0.1';

        const urlString = vnpayInstance.buildPaymentUrl({
            vnp_Amount: amount / 100,
            vnp_IpAddr: ipAddr,
            vnp_TxnRef: orderCode,
            vnp_OrderInfo: `Thanh toan thanh cong don hang ${orderCode}`,
            vnp_OrderType: 'other',
            vnp_ReturnUrl: process.env.VNP_RETURN_URL
        });

        return res.status(200).json({
            success: true,
            paymentUrl: urlString
        });
    } catch (error) {
        console.error("Lỗi tạo link VNPay:", error);
        return res.status(500).json({ success: false, message: "Lỗi tạo thanh toán" });
    }
}

const vnpayReturn = async (req, res) => {
    try {
        let vnpayParams = req.query;
        const verify = vnpayInstance.verifyReturnUrl(vnpayParams);

        if (!verify.isSuccess) {
            return res.status(400).json({ success: false, message: "Dữ liệu bị giả mạo, chữ ký không hợp lệ!" });
        }
        if (vnpayParams['vnp_ResponseCode'] === '00' || vnpayParams['vnp_TransactionStatus'] === '00') {

            const orderCode = vnpayParams['vnp_TxnRef'];
            await Receipt.findOneAndUpdate(
                { orderCode: orderCode },
                {
                    paymentStatus: 'Paid',
                }
            );

            return res.status(200).json({
                success: true,
                message: "Thanh toán thành công"
            });

        } else {
            // Trường hợp khách bấm hủy hoặc thẻ không đủ tiền
            return res.status(200).json({
                success: false,
                message: "Giao dịch thất bại hoặc đã bị hủy."
            });
        }
    } catch (error) {
        console.error("Lỗi xác thực VNPay:", error);
        return res.status(500).json({ success: false, message: "Lỗi máy chủ" });
    }
}

module.exports = { createPaymentUrl, vnpayReturn }