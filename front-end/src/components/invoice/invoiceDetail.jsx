import React from "react";

const InvoiceDetail = ({ invoice, onBack }) => {
  return (
    <div className="w-full pt-[240px] pb-[200px] px-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-4xl mx-auto">
        
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-gray-500 hover:text-blue-600 transition text-sm font-medium w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Quay lại danh sách
        </button>

        <div className="flex justify-between items-start border-b pb-8 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">HÓA ĐƠN</h2>
            <p className="text-gray-500 mt-1">Mã đơn: #{invoice.id}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Trạng thái</div>
            <span className={`px-3 py-1 rounded-full text-sm font-bold border 
              ${invoice.status === "Đã thanh toán" ? "bg-green-50 text-green-600 border-green-200" : 
                invoice.status === "Chờ xác nhận" ? "bg-yellow-50 text-yellow-600 border-yellow-200" : "bg-blue-50 text-blue-600 border-blue-200"}`}>
              {invoice.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-gray-500 text-xs font-bold uppercase mb-2">Thông tin khách hàng</h3>
            <p className="text-lg font-bold text-gray-800">{invoice.customerName}</p>
            <p className="text-gray-600 text-sm mt-1">SĐT: {invoice.phoneNumber}</p>
            <p className="text-gray-600 text-sm">Địa chỉ: {invoice.adress}</p>
          </div>
          <div className="text-right">
            <h3 className="text-gray-500 text-xs font-bold uppercase mb-2">Chi tiết đơn hàng</h3>
            <p className="text-gray-600 text-sm">Ngày đặt: <span className="font-medium text-black">{invoice.date}</span></p>
            <p className="text-gray-600 text-sm mt-1">Phương thức: <span className="font-medium text-black">{invoice.paymentMethod}</span></p>
          </div>
        </div>

        <div className="mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm border-y border-gray-200">
                <th className="py-3 pl-4">Sản phẩm</th>
                <th className="py-3 text-center">Số lượng</th>
                <th className="py-3 text-right pr-4">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-4 pl-4 font-medium text-gray-800">{item.name}</td>
                  <td className="py-4 text-center text-gray-600">x{item.quantity}</td>
                  <td className="py-4 text-right pr-4 font-bold text-gray-800">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-end border-t pt-4">
          <div className="w-64">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500 text-sm">Tạm tính:</span>
              <span className="font-medium">{invoice.total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500 text-sm">Phí vận chuyển:</span>
              <span className="font-medium">0 đ</span>
            </div>
            <div className="flex justify-between border-t border-dashed border-gray-300 pt-2 mt-2">
              <span className="text-lg font-bold text-gray-800">Tổng cộng:</span>
              <span className="text-2xl font-bold text-blue-600">{invoice.total}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvoiceDetail;