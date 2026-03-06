import { useState } from "react";

const Contact = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const changeValue = (value) => {
        console.log(value);
        setCurrentIndex(value)
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-bold mb-6">
          BECK CÓ 2 SHOWROOM TRÊN CẢ NƯỚC
        </h1>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          

        <div className="border p-4 h-[500px] overflow-y-auto space-y-4 rounded-md">
            <div className="border p-4 rounded-md cursor-pointer" onClick={() => {changeValue(1)}}>
                <h2 className="font-bold uppercase mb-2">
                    BECK KIM NGƯU( CƠ SỞ CHÍNH)
                </h2>
                <div className="flex items-start gap-2">
                    <img
                    src="https://bizweb.dktcdn.net/100/527/490/themes/965194/assets/add2.png?1730177962231"
                    alt="Địa chỉ"
                    className="w-4 h-4 mt-4"/>
                    <p className="text-sm text-gray-700">
                    639 Kim Ngưu, P. Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội (mặt đường lớn)
                    </p>
                </div>

                <div className="flex items-start gap-2">
                    <img
                    src="https://bizweb.dktcdn.net/100/527/490/themes/965194/assets/time2.png?1730177974482"
                    alt="Giờ làm việc"
                    className="w-4 h-4 mt-4"/>
                    <p className="text-sm text-gray-700">
                    Giờ hoạt động từ 9h00 - 22h00 cả chủ nhật và ngày lễ
                    </p>
                </div>
                <div className="flex items-start gap-2">
                    <img 
                    src="https://bizweb.dktcdn.net/100/527/490/themes/965194/assets/hot2.png?1730177966280" 
                    alt="Hotline"
                    className="w-4 h-4 mt-3"/>
                    <p className="text-sm text-gray-700">0963. 51. 41. 31</p>
                </div>
            </div>

           

            <div className="border p-4 rounded-md cursor-pointer" onClick={() => {changeValue(2)}}>
                <h2 className="font-bold uppercase mb-2">
                    BECK THÁNG 6
                </h2>
                <div className="flex items-start gap-2">
                    <img
                    src="https://bizweb.dktcdn.net/100/527/490/themes/965194/assets/add2.png?1730177962231"
                    alt="Địa chỉ"
                    className="w-4 h-4 mt-4"/>
                    <p className="text-sm text-gray-700">
                    20 Ng. 59 P. Lê Văn Hiến, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam
                    </p>
                </div>

                <div className="flex items-start gap-2">
                    <img
                    src="https://bizweb.dktcdn.net/100/527/490/themes/965194/assets/time2.png?1730177974482"
                    alt="Giờ làm việc"
                    className="w-4 h-4 mt-4"/>
                    <p className="text-sm text-gray-700">
                    Giờ hoạt động thứ 2 đến thứ 6 Từ 10h00 - 22h00; Thứ 7, chủ nhật và ngày lễ: 09h00 - 22h00
                    </p>
                </div>
                <div className="flex items-start gap-2">
                    <img 
                    src="https://bizweb.dktcdn.net/100/527/490/themes/965194/assets/hot2.png?1730177966280" 
                    alt="Hotline"
                    className="w-4 h-4 mt-3"/>
                    <p className="text-sm text-gray-700">0931. 51. 41. 31</p>
                </div>
            </div>
          </div>

          <div className="w-full h-[500px]">
             { currentIndex === 1 ? (
                <iframe
                title="Beck Kim Ngưu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8823541320808!2d105.85988177584075!3d20.99735248885556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76769abbe1%3A0xe5ccf8f57ca856a3!2zU09DQ0VSIEJFQ0sgLSBHScOAWSBCw5NORyDEkMOB!5e0!3m2!1svi!2s!4v1770361607693!5m2!1svi!2s" 
                className="w-full h-full border rounded-md"
                loading="lazy"
                />
            ) : (
                <iframe
                title="Beck Tháng 6"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.8523374736894!2d105.7737031043412!3d21.07295572688281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455d33971b723%3A0xe119432909a72217!2sTh%C3%A1ng%206%20Cafe!5e0!3m2!1svi!2s!4v1770360924286!5m2!1svi!2s" 
                className="w-full h-full border rounded-md"
                loading="lazy"
                />
            )}    
          </div>
        </div>
      </div>
    </div>
    )
}
export default Contact;