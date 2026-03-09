import { Radio } from "antd";

const PaymentMethod = () => {
    return (
        <div className="p-4 w-full">
            <h2 className="text-xl font-bold mb-3">Thanh toán</h2>

            <Radio.Group className="w-full">
                <div className="border rounded-lg overflow-hidden">
                    <label className="flex items-center justify-between p-4 border-b cursor-pointer">
                        <Radio value="vnpay">
                            Thanh toán ngay - quét mã VNPAY QR
                        </Radio>
                        <img
                            src="https://yt3.googleusercontent.com/JM1m2wng0JQUgSg9ZSEvz7G4Rwo7pYb4QBYip4PAhvGRyf1D_YTbL2DdDjOy0qOXssJPdz2r7Q=s900-c-k-c0x00ffffff-no-rj"
                            className="h-15"
                        />
                    </label>
                    <label className="flex items-center justify-between p-4 border-b cursor-pointer ">
                        <Radio value="cod">
                            Thanh toán khi giao hàng COD tại nhà
                        </Radio>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/026/867/063/non_2x/pile-of-money-free-png.png"
                            className="h-15"
                        />
                    </label>
                </div>
            </Radio.Group>
        </div>
    );
};

export default PaymentMethod;