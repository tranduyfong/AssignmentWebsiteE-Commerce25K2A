import React, { useState, useEffect } from "react";
import InvoiceTable from "../../components/invoice/invoiceTable";
import InvoiceDetail from "../../components/invoice/invoiceDetail";
import { getMyReceipt } from '../../services/api.service';
import { message, Spin } from 'antd';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const res = await getMyReceipt();

      if (res && res.success) {
        console.log(res);

        const formattedData = res.data.map(item => ({
          id: item.orderCode,
          customerName: item.shippingAddress?.fullName || "Khách ẩn danh",
          phoneNumber: item.shippingAddress?.phone || "N/A",

          address: item.shippingAddress?.address,

          date: new Date(item.createdAt).toLocaleDateString('vi-VN'),

          total: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.totalAmount),

          status: getStatusText(item.orderStatus),

          paymentMethod: item.paymentMethod,

          items: item.products.map(prod => ({
            name: prod.nameProduct,
            quantity: prod.quantity,
            price: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(prod.priceAtTime),
            imgSrc: prod.imgSrc
          }))
        }));

        setInvoices(formattedData);
      } else {
        message.error("Không thể tải danh sách đơn hàng.");
      }
    } catch (error) {
      message.error("Lỗi kết nối đến máy chủ.");
    } finally {
      setLoading(false);
    }
  };

  // Hàm phụ: Dịch orderStatus (processing, completed...) ra tiếng Việt
  const getStatusText = (status) => {
    switch (status) {
      case 'processing': return "Chờ xác nhận";
      case 'shipping': return "Đang giao hàng";
      case 'completed': return "Đã thanh toán";
      case 'cancelled': return "Đã hủy";
      default: return "Chờ xác nhận";
    }
  };

  const handleSelectInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedInvoice(null);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><Spin size="large" /></div>;
  }

  return (
    <div className="w-full min-h-screen">
      {!selectedInvoice ? (
        <InvoiceTable invoices={invoices} onSelect={handleSelectInvoice} />
      ) : (
        <InvoiceDetail invoice={selectedInvoice} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default InvoiceList;