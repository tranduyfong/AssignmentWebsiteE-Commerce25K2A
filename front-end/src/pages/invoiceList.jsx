import React, { useState } from 'react';

const InvoiceList = () => {
  const fakeInvoices = [
    {
      id: "HD001",
      customerName: "Nguyễn Văn A",
      phoneNumber: "09881xxxxx",
      adress: "Hà Nội, Việt Nam",
      date: "30/01/2026",
      total: "2.500.000 VNĐ",
      status: "Đã thanh toán",
      paymentMethod: "COD",
      items: [
        { name: "Giày Nike Air Force 1", quantity: 1, price: "2.500.000 VNĐ" }
      ]
    },
    {
      id: "HD002",
      customerName: "Trần Thị B",
      phoneNumber: "09776xxxxx",
      adress: "Hồ Chí Minh, Việt Nam",
      date: "15/01/2026",
      total: "5.200.000 VNĐ",
      status: "Chờ xác nhận",
      paymentMethod: "COD",
      items: [
        { name: "Adidas Ultra Boost", quantity: 1, price: "3.200.000 VNĐ" },
        { name: "Puma Suede Classic", quantity: 1, price: "2.000.000 VNĐ" }
      ]
    },
    {
      id: "HD003",
      customerName: "Lê Hoàng C",
      phoneNumber: "09661xxxxx",
      adress: "Đà Nẵng, Việt Nam",
      date: "02/02/2026",
      total: "1.800.000 VNĐ",
      status: "Đang giao hàng",
      paymentMethod: "COD",
      items: [
        { name: "Biti's Hunter X", quantity: 2, price: "900.000 VNĐ" }
      ]
    },
  ];

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">



      {!selectedInvoice ? (

        <>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Quản lý Hóa đơn</h1>
            <p className="text-sm text-gray-500">Danh sách các đơn đặt hàng từ khách hàng</p>
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
                {fakeInvoices.map((invoice, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition border-b last:border-none">
                    <td className="p-4 font-medium text-blue-600">{invoice.id}</td>
                    <td className="p-4">{invoice.customerName}</td>
                    <td className="p-4">{invoice.phoneNumber}</td>
                    <td className="p-4">{invoice.adress}</td>
                    <td className="p-4">{invoice.date}</td>
                    <td className="p-4 font-bold text-red-500">{invoice.total}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold 
                        ${invoice.status === 'Đã thanh toán' ? 'bg-green-100 text-green-700' :
                          invoice.status === 'Chờ xác nhận' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => setSelectedInvoice(invoice)}
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
        </>

      ) : (

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-4xl mx-auto pt-50 pb-20">

          <button
            onClick={() => setSelectedInvoice(null)}
            className="mb-6 flex items-center text-gray-500 hover:text-blue-600 transition text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Quay lại danh sách
          </button>

          <div className="flex justify-between items-start border-b pb-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">HÓA ĐƠN</h2>
              <p className="text-gray-500 mt-1">Mã đơn: #{selectedInvoice.id}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Trạng thái</div>
              <span className={`px-3 py-1 rounded-full text-sm font-bold border 
                ${selectedInvoice.status === 'Đã thanh toán' ? 'bg-green-50 text-green-600 border-green-200' :
                  selectedInvoice.status === 'Chờ xác nhận' ? 'bg-yellow-50 text-yellow-600 border-yellow-200' : 'bg-blue-50 text-blue-600 border-blue-200'}`}>
                {selectedInvoice.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-8">
            <div>
              <h3 className="text-gray-500 text-xs font-bold uppercase mb-2">Thông tin khách hàng</h3>
              <p className="text-lg font-bold text-gray-800">{selectedInvoice.customerName}</p>
              <p className="text-gray-600 text-sm mt-1">SĐT: {selectedInvoice.phoneNumber}</p>
              <p className="text-gray-600 text-sm">Địa chỉ: {selectedInvoice.adress}</p>
            </div>
            <div className="text-right">
              <h3 className="text-gray-500 text-xs font-bold uppercase mb-2">Chi tiết đơn hàng</h3>
              <p className="text-gray-600 text-sm">Ngày đặt: <span className="font-medium text-black">{selectedInvoice.date}</span></p>
              <p className="text-gray-600 text-sm mt-1">Phương thức: <span className="font-medium text-black">{selectedInvoice.paymentMethod}</span></p>
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
                {selectedInvoice.items.map((item, idx) => (
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
                <span className="font-medium">{selectedInvoice.total}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500 text-sm">Phí vận chuyển:</span>
                <span className="font-medium">0 đ</span>
              </div>
              <div className="flex justify-between border-t border-dashed border-gray-300 pt-2 mt-2">
                <span className="text-lg font-bold text-gray-800">Tổng cộng:</span>
                <span className="text-2xl font-bold text-blue-600">{selectedInvoice.total}</span>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default InvoiceList;