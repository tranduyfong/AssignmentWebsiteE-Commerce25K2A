import { useState } from "react";

const RevenueAndExpenditure = () => {
    const [type, setType] = useState("thu");
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [list, setList] = useState([]);

    const handleAdd = () => {
        if(!amount){
            alert("Nhập số tiền");
            return;
        }
         const newItem = {
            id: Date.now(),
            type,
            amount: Number(amount),
            note
        };
        setList([...list, newItem]);
        setAmount("");
        setNote("");
    };
    const totalThu = list
    .filter(item => item.type === "thu")
    .reduce((sum, item) => sum + item.amount, 0);

    const totalChi = list
    .filter(item => item.type === "chi")
    .reduce((sum, item) => sum + item.amount, 0);

    const balance = totalThu - totalChi;
    return (
        <div className="max-w-4xl mx-auto py-10 mt-30">
            <h1 className="text-3xl font-bold text-center text-black-500 mb-8">
                Quản lý thu chi
            </h1>

            <div className="border rounded-lg p-6 mb-8 space-y-4">
                <select
                className="border p-2 w-full"
                value={type}
                onChange={(e)=>setType(e.target.value)}>
                    <option value="thu">Thu</option>
                    <option value="chi">Chi</option>
                </select>

                <input
                type="number"
                placeholder="Số tiền"
                className="border p-2 w-full"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}/>

                <input
                type="text"
                placeholder="Ghi chú"
                className="border p-2 w-full"
                value={note}
                onChange={(e)=>setNote(e.target.value)}/>

                <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ">
                    Thêm
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="border p-4 text-center">
                    <p className="font-bold">Tổng thu</p>
                    <p className="text-green-600">{totalThu} VND</p>
                </div>

                <div className="border p-4 text-center">
                    <p className="font-bold">Tổng chi</p>
                    <p className="text-red-600">{totalChi} VND</p>
                </div>

                <div className="border p-4 text-center">
                    <p className="font-bold">Số dư</p>
                    <p className="text-blue-600">{balance} VND</p>
                </div>
            </div>

            <div className="border rounded-lg p-6">
                <h2 className="font-bold mb-4">Danh sách giao dịch</h2>
                <table className="w-full border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2">Loại</th>
                            <th className="border p-2">Số tiền</th>
                            <th className="border p-2">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(item => (
                            <tr key={item.id}>
                                <td className="border p-2 text-center">
                                {item.type === "thu" ? "Thu" : "Chi"}
                                </td>

                                <td className="border p-2 text-center">
                                {item.amount}
                                </td>

                                <td className="border p-2">
                                {item.note}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RevenueAndExpenditure;