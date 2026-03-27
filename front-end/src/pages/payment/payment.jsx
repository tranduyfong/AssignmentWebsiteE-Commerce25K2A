import { useEffect, useState } from "react";
import PaymentForm from "../../components/payment/payment.form";
import PaymentDetails from "../../components/payment/patment.details";
import PaymentMethod from "../../components/payment/payment.methods";
import OrderSummary from "../../components/payment/payment.list";
import { useLocation } from "react-router-dom";
import { getProvince, getDistrict, getVillage, getMyUser, buyProduct } from '../../services/api.service';
import { Form, notification } from "antd";

const PaymentPage = () => {
    const location = useLocation();
    const data = location.state;

    const [form] = Form.useForm();
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [village, setVillages] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [id, setId] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("access_token");
            if (!token) return;
            try {
                const res = await getMyUser();

                if (res?.data) {
                    setId(res.data.user.id);
                }
            } catch (error) {
                console.log("Chưa đăng nhập hoặc token lỗi" + error);
            }
        };
        fetchUser();
    }, []);

    const handleProvinceChange = async (option) => {
        const provinceId = option.value;

        const res = await getDistrict(provinceId);
        if (res) {
            setDistricts(res.districts);
            setVillages([]);
        }
    };

    const handleDistrictChange = async (option) => {
        const districtId = option.value;

        const res = await getVillage(districtId);
        if (res) {
            setVillages(res.wards);
        }
    };

    useEffect(() => {
        fetchProvince();
    }, []);

    const fetchProvince = async () => {
        const res = await getProvince();

        if (res) setProvinces(res);
    };

    const handleSubmit = async (values) => {

        // Khởi tạo các biến mapping data
        const customer = values?.customerInfo;
        const paymentMethod = values?.paymentMethod;
        const products = values?.products;
        const total = values?.totalPrice;

        // Tạo mã đơn hàng, sử dụng mã theo hàm lấy giờ
        const generateOrderCode = () => 'ORD' + Date.now().toString().slice(-6);

        const receiptPayload = {
            userId: id,
            orderCode: generateOrderCode(),

            // Thông tin sản phẩm đặt hàng
            products: products?.map(item => {
                const prod = item.productId || item.current;
                return {
                    productId: prod?._id,
                    nameProduct: prod?.nameProduct,
                    imgSrc: (prod?.imgSrc && prod.imgSrc.length > 0) ? prod.imgSrc[0] : "",
                    priceAtTime: prod?.priceProduct,
                    size: item.size || item.selectedSize,
                    quantity: item.quantity
                };
            }),

            // Thông tin tổng giá tiền
            totalAmount: total,

            // Phương thức thanh toán
            paymentMethod: paymentMethod,

            // Thông tin địa chỉ giao hàng
            shippingAddress: {
                fullName: customer.name,
                phone: customer.numberphone,
                address: `${customer.more ? customer.more + ", " : ""}
                ${customer.ward.label} 
                - ${customer.district.label} 
                - ${customer.province.label}`
            }
        }

        if (paymentMethod === "COD") {
            // Tiến hành kiểm tra tồn kho thực và trừ số lượng trong kho
            try {
                const res = await buyProduct(receiptPayload);
                console.log("Kết quả từ Backend:", res);

                if (res && res.success === true) {
                    notification.success({
                        message: "Mua hàng thành công!",
                        description: "Cảm ơn bạn đã mua hàng!"
                    });
                    window.location.href = "/checkcart";
                }
                else if (res && res.success === false) {
                    notification.error({
                        message: "Mua hàng thất bại",
                        description: res.message
                    });
                }
                else {
                    notification.error({
                        message: "Mua hàng thất bại",
                        description: "Không thể xác định trạng thái đơn hàng."
                    });
                }

            } catch (err) {
                const errorMessage = err.response?.data?.message || err.message || "Lỗi kết nối đến máy chủ!";

                notification.error({
                    message: "Lỗi hệ thống",
                    description: errorMessage
                });
            }
        } else {
            console.log(receiptPayload);

        }

    };

    return (
        <div className="flex w-[70%] h-screen m-auto p-10 gap-10">
            <div className="w-[60%]">
                <h1 className="text-4xl font-bold">SOCCER BECK - GIÀY BÓNG ĐÁ</h1>
                <div className="flex justify-around">
                    <PaymentForm
                        form={form}
                        provinces={provinces}
                        districts={districts}
                        village={village}
                        handleDistrictChange={handleDistrictChange}
                        handleProvinceChange={handleProvinceChange}
                        onFinish={handleSubmit}
                    />
                    <PaymentMethod
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                    />
                </div>
                <PaymentDetails />
            </div>
            <OrderSummary
                data={data}
                form={form}
                provinces={provinces}
                districts={districts}
                village={village}
                paymentMethod={paymentMethod}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default PaymentPage;