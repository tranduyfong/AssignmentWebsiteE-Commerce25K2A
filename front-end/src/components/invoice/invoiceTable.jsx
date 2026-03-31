import React from "react";
import { Table, Typography, Tag, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const InvoiceTable = ({ invoices, onSelect }) => {
  const columns = [
    {
      title: "Mã HĐ",
      dataIndex: "id",
      key: "id",
      render: (text) => <Text style={{ color: '#1677ff', fontWeight: 500 }}>{text}</Text>,
    },
    {
      title: "Khách hàng",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Ngày đặt",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
      render: (text) => <Text style={{ color: '#ff4d4f', fontWeight: 'bold' }}>{text}</Text>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "processing";
        if (status === "Đã thanh toán") color = "success";
        if (status === "Chờ xác nhận") color = "warning";

        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Thanh toán",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (paymentStatus) => {
        const statusText = paymentStatus || "Chưa thanh toán";
        const color = statusText === "Đã thanh toán" ? "success" : "error";

        return <Tag color={color}>{statusText}</Tag>;
      },
    },
    {
      title: "Hành động",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Button
          type="primary"
          icon={<EyeOutlined />}
          onClick={() => onSelect(record)}
          size="middle"
        />
      ),
    },
  ];

  return (
    <div style={{ margin: '0 auto', padding: '50px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Title level={3} style={{ margin: 0, color: '#1f2937' }}>Kiểm tra đơn hàng</Title>
        <Text type="secondary">Danh sách đơn hàng của bạn</Text>
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
        <Table
          columns={columns}
          dataSource={invoices}
          rowKey={(record, index) => record.id || index.toString()}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 'max-content' }}
          bordered={false}
        />
      </div>
    </div>
  );
};

export default InvoiceTable;