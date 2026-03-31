import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Result, Button, Spin } from "antd";
import { mailBuyProduct, verifyVnpay } from "../../services/api.service";

const VnpayReturn = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const checkPaymentStatus = async () => {
            const queryString = searchParams.toString();

            try {
                const res = await verifyVnpay(queryString);

                if (res && res.success) {
                    setStatus("success");
                    const pendingEmailString = localStorage.getItem("pendingEmailData");

                    if (pendingEmailString) {
                        const emailData = JSON.parse(pendingEmailString);
                        mailBuyProduct(emailData).catch(err => console.log("Lỗi gửi mail:", err));
                        localStorage.removeItem("pendingEmailData");
                    }
                } else {
                    setStatus("error");
                }
            } catch (error) {
                setStatus("error");
            }
        };
        checkPaymentStatus();
    }, [searchParams]);

    // Giao diện lúc đang chờ Backend xử lý
    if (status === "loading") {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" tip="Đang xác thực giao dịch..." />
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto mt-45 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            {status === "success" ? (
                <Result
                    status="success"
                    title="Thanh toán đơn hàng thành công!"
                    subTitle="Cảm ơn bạn đã mua sắm tại Soccer Beck. Chúng tôi sẽ sớm giao hàng cho bạn."
                    extra={[
                        <div className="flex justify-around">
                            <Button type="primary" key="order" onClick={() => navigate('/checkcart')}>
                                Xem đơn hàng
                            </Button>
                            <Button key="home" onClick={() => navigate('/')}>
                                Tiếp tục mua sắm
                            </Button>
                        </div>
                    ]}
                />
            ) : (
                <Result
                    status="error"
                    title="Giao dịch không thành công!"
                    subTitle="Đã có lỗi xảy ra hoặc bạn đã hủy quá trình thanh toán."
                    extra={[
                        <Button key="home" onClick={() => navigate('/')}>
                            Về trang chủ
                        </Button>
                    ]}
                />
            )}
        </div>
    );
};

export default VnpayReturn;