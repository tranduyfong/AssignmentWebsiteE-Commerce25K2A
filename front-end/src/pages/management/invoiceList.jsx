import React, { useState } from "react";
import InvoiceTable from "../../components/invoice/invoiceTable";
import InvoiceDetail from "../../components/invoice/invoiceDetail";

const InvoiceList = () => {
  const fakeInvoices = [
    {
      id: "HD001", customerName: "Nguyễn Văn A", phoneNumber: "09881xxxxx", adress: "Hà Nội, Việt Nam",
      date: "30/01/2026", total: "2.500.000 VNĐ", status: "Đã thanh toán", paymentMethod: "COD",
      items: [{ name: "Giày Nike Air Force 1", quantity: 1, price: "2.500.000 VNĐ" }],
    },
    {
      id: "HD002", customerName: "Trần Thị B", phoneNumber: "09776xxxxx", adress: "Hồ Chí Minh, Việt Nam",
      date: "15/01/2026", total: "5.200.000 VNĐ", status: "Chờ xác nhận", paymentMethod: "COD",
      items: [
        { name: "Adidas Ultra Boost", quantity: 1, price: "3.200.000 VNĐ" },
        { name: "Puma Suede Classic", quantity: 1, price: "2.000.000 VNĐ" },
      ],
    },
    {
      id: "HD003", customerName: "Lê Hoàng C", phoneNumber: "09661xxxxx", adress: "Đà Nẵng, Việt Nam",
      date: "02/02/2026", total: "1.800.000 VNĐ", status: "Đang giao hàng", paymentMethod: "COD",
      items: [{ name: "Biti's Hunter X", quantity: 2, price: "900.000 VNĐ" }],
    },
  ];

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleSelectInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedInvoice(null);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pt-45 pb-30 px-6">
      {!selectedInvoice ? (
        <InvoiceTable invoices={fakeInvoices} onSelect={handleSelectInvoice} />
      ) : (
        <InvoiceDetail invoice={selectedInvoice} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default InvoiceList;