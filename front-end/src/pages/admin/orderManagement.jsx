import React, { useState, useEffect } from "react";
import {
  Table,
  Tag,
  Select,
  DatePicker,
  Typography,
  Card,
  message,
} from "antd";
import dayjs from "dayjs";
import { getAllReceipts } from "../../services/api.service";

const { Title } = Typography;
const { RangePicker } = DatePicker;

const OrderManagement = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [statusFilter, setStatusFilter] = useState("All");
  const [dateRange, setDateRange] = useState(null);

  const fetchOrders = async () => {
    setLoading(true); 
    try {
      const response = await getAllReceipts(); 
      
      const result = response.data ? response.data : response; 
      
      const ordersData = Array.isArray(result) ? result : (result.data || []); 
      
      setData(ordersData);
      setFilteredData(ordersData);
    } catch (error) {
      console.error("Lỗi fetch đơn hàng:", error);
      message.error("Không thể tải danh sách đơn hàng!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    let result = [...data];

    if (statusFilter !== "All") {
      result = result.filter((item) => {
        const isPaid = item.paymentStatus !== "Pending";
        if (statusFilter === "Đã thanh toán") return isPaid;
        if (statusFilter === "Chưa thanh toán") return !isPaid;
        return true;
      });
    }

    if (dateRange && dateRange.length === 2) {
      const startDate = dateRange[0].startOf("day");
      const endDate = dateRange[1].endOf("day");

      result = result.filter((item) => {
        const itemDate = dayjs(item.createdAt);
        return (
          (itemDate.isAfter(startDate) || itemDate.isSame(startDate)) &&
          (itemDate.isBefore(endDate) || itemDate.isSame(endDate))
        );
      });
    }

    setFilteredData(result);
  }, [statusFilter, dateRange, data]);

  const columns = [
    {
      title: "MÃ HĐ",
      dataIndex: "orderCode",
      key: "orderCode",
      render: (text) => (
        <span className="font-medium text-blue-500">{text}</span>
      ),
    },
    {
      title: "KHÁCH HÀNG",
      dataIndex: ["shippingAddress", "fullName"],
      key: "customerName",
    },
    {
      title: "SĐT",
      dataIndex: ["shippingAddress", "phone"],
      key: "phone",
    },
    {
      title: "ĐỊA CHỈ",
      dataIndex: ["shippingAddress", "address"],
      key: "address",
      render: (text) => {
        if (!text) return "";
        return (
          <span className="text-sm">
            {text.replace(/(\n|\s+-\s+)/g, " ").trim()}
          </span>
        );
      },
    },
    {
      title: "NGÀY ĐẶT",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (text ? dayjs(text).format("DD/MM/YYYY") : "N/A"),
    },
    {
      title: "TỔNG TIỀN",
      dataIndex: "totalAmount",
      key: "totalAmount",
      width: 150,
      render: (price) => (
        <span className="font-bold text-red-500">
          {price ? price.toLocaleString("vi-VN") : 0} đ
        </span>
      ),
    },
    {
      title: "THANH TOÁN",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (status) => {
        const isPaid = status !== "Pending";
        const color = isPaid ? "green" : "volcano";
        const textDisplay = isPaid ? "Đã thanh toán" : "Chưa thanh toán";
        return <Tag color={color}>{textDisplay}</Tag>;
      },
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6">
      <Card className="shadow-sm rounded-lg border-gray-200">
        <Title level={3} className="mb-6 text-gray-800">
          Quản lý Đơn hàng
        </Title>

        <div className="filter-wrapper flex flex-wrap items-end gap-4 mb-6 bg-white p-4 rounded border border-gray-100 shadow-sm">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1 font-medium">
              Trạng thái thanh toán
            </span>
            <Select
              size="large"
              defaultValue="All"
              style={{ width: 200 }}
              onChange={(value) => setStatusFilter(value)}
              options={[
                { value: "All", label: "Tất cả trạng thái" },
                { value: "Đã thanh toán", label: "Đã thanh toán" },
                { value: "Chưa thanh toán", label: "Chưa thanh toán" },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1 font-medium">
              Lọc theo ngày đặt
            </span>
            <RangePicker
              size="large"
              style={{ width: 300 }}
              format="DD/MM/YYYY"
              onChange={(dates) => setDateRange(dates)}
              placeholder={["Từ ngày", "Đến ngày"]}
            />
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="_id"
          bordered
          loading={loading}
          scroll={{ x: 1000 }}
          pagination={{
            pageSize: 8,
            itemRender: (_, type, originalElement) => {
              if (type === "prev") {
                return (
                  <a className="px-2 font-medium text-gray-500 hover:text-blue-500">
                    Trước
                  </a>
                );
              }
              if (type === "next") {
                return (
                  <a className="px-2 font-medium text-gray-500 hover:text-blue-500">
                    Sau
                  </a>
                );
              }
              return originalElement;
            },
          }}
        />
      </Card>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .filter-wrapper .ant-select-selector,
        .filter-wrapper .ant-picker {
          height: 40px !important;
          min-height: 40px !important;
          display: flex !important;
          align-items: center !important;
        }
      `,
        }}
      />
    </div>
  );
};

export default OrderManagement;
