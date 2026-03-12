import { useEffect, useState } from "react";
import PaymentForm from "../../components/payment/payment.form";
import { getProvince } from "../../services/api.service";
import PaymentDetails from "../../components/payment/patment.details";
import PaymentMethod from "../../components/payment/payment.methods";
import OrderSummary from "../../components/payment/payment.list";

const PaymentPage = () => {
    const [provinces, setProvinces] = useState([]);
    useEffect(() => {
        fetchProvince();
    }, []);

    const fetchProvince = async () => {
        const res = await getProvince();
        console.log(res)
        if (res) setProvinces(res);
    };

    return (
        <div className="flex w-[70%] h-screen m-auto p-10 gap-10">
            <div className="w-[60%]">
                <h1 className="text-4xl font-bold">SOCCER BECK - GIÀY BÓNG ĐÁ</h1>
                <div className="flex justify-around">
                    <PaymentForm provinces={provinces} />
                    <PaymentMethod />
                </div>
                <PaymentDetails />
            </div>
            <OrderSummary />
        </div>
    );
}

export default PaymentPage;