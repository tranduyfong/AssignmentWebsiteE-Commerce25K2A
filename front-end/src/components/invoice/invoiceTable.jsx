import React from "react";

const InvoiceTable = ({ invoices, onSelect }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý Hóa đơn</h1>
        <p className="text-sm text-gray-500">
          Danh sách các đơn đặt hàng từ khách hàng
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-bold">
            <tr>
              <th className="p-4 border-b">Mã HĐ</th>
              <th className="p-4 border-b">Khách hàng</th>
              <th className="p-4 border-b">SĐT</th>
              <th className="p-4 border-b">Địa chỉ</th>
              <th className="p-4 border-b">Ngày đặt</th>
              <th className="p-4 border-b">Tổng tiền</th>
              <th className="p-4 border-b">Trạng thái</th>
              <th className="p-4 border-b text-center">Hành động</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {invoices.map((invoice, index) => (
              <tr key={index} className="hover:bg-gray-50 transition border-b last:border-none">
                <td className="p-4 font-medium text-blue-600">{invoice.id}</td>
                <td className="p-4">{invoice.customerName}</td>
                <td className="p-4">{invoice.phoneNumber}</td>
                <td className="p-4">{invoice.adress}</td>
                <td className="p-4">{invoice.date}</td>
                <td className="p-4 font-bold text-red-500">{invoice.total}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold 
                    ${invoice.status === "Đã thanh toán" ? "bg-green-100 text-green-700" : 
                      invoice.status === "Chờ xác nhận" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => onSelect(invoice)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center gap-1 mx-auto transition shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;