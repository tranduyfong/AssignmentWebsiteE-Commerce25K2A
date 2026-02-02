import { useState} from "react";

const Revenue = () => {
    const [date, setDate] = useState("");

const revenueToday = 1000000;
const revenueMonth = 30000000;
const revenueYear = 360000000;

const handleSelectDate = () => {
    if(!date) {
        alert("Vui lòng chọn ngày");
    } else {
        alert("Doanh thu ngày " + date + " là: 1500000đ");
    }
};

return (
     <div className="p-10">
      <h2 className="text-2xl font-bold mb-10">
        Thống kê doanh thu
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className="bg-white shadow rounded p-5">
          <p className="text-gray-500">Hôm nay</p>
          <p className="text-xl font-bold text-green-600">
            {revenueToday}đ
          </p>
        </div>

        <div className="bg-white shadow rounded p-5">
          <p className="text-gray-500">Tháng này</p>
          <p className="text-xl font-bold text-blue-600">
            {revenueMonth}đ
          </p>
        </div>

        <div className="bg-white shadow rounded p-5">
          <p className="text-gray-500">Năm nay</p>
          <p className="text-xl font-bold text-purple-600">
            {revenueYear}đ
          </p>
        </div>
      </div>

      <div className="bg-white shadow rounded p-10 w-full md:w-1/2">
        <p className="font-semibold mb-5">
          Xem doanh thu theo ngày
        </p>

        <div className="flex gap-5">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded px-3 py-2 flex-1"
          />

          <button
            onClick={handleSelectDate}
            className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
          >
            Xem doanh thu
          </button>
        </div>
      </div>
    </div>
);
}

export default Revenue;

