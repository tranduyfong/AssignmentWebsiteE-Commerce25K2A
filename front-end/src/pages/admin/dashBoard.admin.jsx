import React, { useState, useEffect, useMemo } from "react";
import { Card, Col, Row, Statistic, Table, Typography, message, Tag, DatePicker, Button, Avatar } from "antd";
import { ShoppingCartOutlined, DollarCircleOutlined, CreditCardOutlined, CarOutlined, ReloadOutlined, FireOutlined } from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState(null);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:3000/receipt", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error("Unauthorized");
      const result = await response.json();
      const ordersData = result.data || result;
      setData(Array.isArray(ordersData) ? ordersData : []);
    } catch (error) {
      message.error("Lỗi tải dữ liệu Dashboard!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDashboardData(); }, []);

  const filteredData = useMemo(() => {
    if (!dateRange || dateRange.length !== 2) return data;
    const start = dateRange[0].startOf("day");
    const end = dateRange[1].endOf("day");
    return data.filter(item => {
      const d = dayjs(item.createdAt);
      return (d.isAfter(start) || d.isSame(start)) && (d.isBefore(end) || d.isSame(end));
    });
  }, [data, dateRange]);

  const chartData = useMemo(() => {
    const map = {};
    filteredData.forEach(item => {
      const dateLabel = dayjs(item.createdAt).format("DD/MM");
      if (!map[dateLabel]) map[dateLabel] = { date: dateLabel, VNPAY: 0, COD: 0 };
      const amount = item.totalAmount || 0;
      if (item.paymentMethod === "VNPAY" || item.paymentStatus === "Paid") {
        map[dateLabel].VNPAY += amount;
      } else {
        map[dateLabel].COD += amount;
      }
    });
    return Object.values(map).sort((a, b) => dayjs(a.date, "DD/MM").isAfter(dayjs(b.date, "DD/MM")) ? 1 : -1);
  }, [filteredData]);

  const yAxisTicks = useMemo(() => {
    if (chartData.length === 0) return [0];

    const maxVal = Math.max(...chartData.map(d => Math.max(d.VNPAY, d.COD)), 0);
    const step = 10000000;
    const ticks = [];

    for (let i = 0; i <= maxVal + step; i += step) {
      ticks.push(i);
    }
    return ticks;
  }, [chartData]);

  const topProducts = useMemo(() => {
    const productMap = {};
    filteredData.forEach(order => {
      order.products?.forEach(p => {
        if (productMap[p.nameProduct]) {
          productMap[p.nameProduct].qty += p.quantity;
          productMap[p.nameProduct].revenue += p.priceAtTime * p.quantity;
        } else {
          productMap[p.nameProduct] = {
            key: p.nameProduct,
            name: p.nameProduct,
            qty: p.quantity,
            revenue: p.priceAtTime * p.quantity,
            img: p.imgSrc
          };
        }
      });
    });
    return Object.values(productMap).sort((a, b) => b.qty - a.qty).slice(0, 5);
  }, [filteredData]);

  const formatCurrency = (value) => new Intl.NumberFormat('vi-VN').format(value);

  const topProductColumns = [
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
      render: (img) => <Avatar src={img} shape="square" size={64} />
    },
    { title: "Tên sản phẩm", dataIndex: "name", key: "name", render: (t) => <Text strong>{t}</Text> },
    { title: "Số lượng", dataIndex: "qty", key: "qty", render: (q) => <Tag color="blue">{q} chiếc</Tag> },
    { title: "Doanh thu", dataIndex: "revenue", key: "revenue", render: (v) => <Text style={{ color: "green" }} strong>{formatCurrency(v)} đ</Text> }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <Title level={3} style={{ margin: 0 }}>Doanh thu bán hàng</Title>
        <div className="flex gap-3">
          <RangePicker format="DD/MM/YYYY" onChange={(dates) => setDateRange(dates)} placeholder={["Từ ngày", "Đến ngày"]} />
        </div>
      </div>

      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={8}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Tổng doanh thu"
              value={filteredData.reduce((s, i) => s + (i.totalAmount || 0), 0)}
              formatter={(val) => `${formatCurrency(val)} đ`}
              prefix={<DollarCircleOutlined style={{ color: '#52c41a' }} />}
            />
          </Card>
        </Col>
        <Col xs={12} sm={8}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Doanh thu VNPAY"
              value={filteredData.filter(i => i.paymentMethod === "VNPAY").reduce((s, i) => s + (i.totalAmount || 0), 0)}
              formatter={(val) => `${formatCurrency(val)} đ`}
              prefix={<CreditCardOutlined style={{ color: '#1890ff' }} />}
            />
          </Card>
        </Col>
        <Col xs={12} sm={8}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Doanh thu COD"
              value={filteredData.filter(i => i.paymentMethod !== "VNPAY").reduce((s, i) => s + (i.totalAmount || 0), 0)}
              formatter={(val) => `${formatCurrency(val)} đ`}
              prefix={<CarOutlined style={{ color: '#faad14' }} />}
            />
          </Card>
        </Col>
      </Row>

      <Row className="mb-6">
        <Col span={24}>
          <Card title={<span><DollarCircleOutlined /> Biểu đồ Doanh thu </span>} bordered={false} className="shadow-sm">
            <div style={{ width: '100%', height: 450 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 80, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis
                    ticks={yAxisTicks}
                    tickFormatter={(value) => formatCurrency(value)}
                    width={120}
                    domain={[0, 'auto']}
                  />
                  <Tooltip
                    formatter={(value) => [`${formatCurrency(value)} đ`, ""]}
                    cursor={{ fill: '#f5f5f5' }}
                  />
                  <Legend verticalAlign="top" height={40} />
                  <Bar dataKey="VNPAY" fill="#1890ff" radius={[4, 4, 0, 0]} name="VNPAY" />
                  <Bar dataKey="COD" fill="#faad14" radius={[4, 4, 0, 0]} name="COD" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card title={<span><FireOutlined style={{ color: '#ff4d4f' }} /> Top 5 sản phẩm bán chạy nhất</span>} bordered={false} className="shadow-sm">
            <Table
              dataSource={topProducts}
              columns={topProductColumns}
              pagination={false}
              loading={loading}
              size="large"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;