import React from "react";
import { Card, Button, Typography, Tag, Row, Col, Descriptions, Table, Image, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const InvoiceDetail = ({ invoice, onBack }) => {
  let statusColor = "processing";
  if (invoice.status === "Đã thanh toán") statusColor = "success";
  if (invoice.status === "Chờ xác nhận") statusColor = "warning";

  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Ảnh sản phẩm",
      dataIndex: "imgSrc",
      key: "imgSrc",
      render: (src) => (
        <Image
          width={70}
          src={src}
          alt="Ảnh sản phẩm"
          style={{ borderRadius: "6px", border: "1px solid #f0f0f0" }}
          preview={false}
        />
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      render: (qty) => <Text type="secondary">x{qty}</Text>,
    },
    {
      title: "Thành tiền",
      dataIndex: "price",
      key: "price",
      align: "right",
      render: (price) => <Text strong>{price}</Text>,
    },
  ];

  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "16px" }}>
      <Card bordered={false} style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderRadius: "12px" }}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={onBack}
          style={{ marginBottom: "24px", color: "#6b7280", padding: 0 }}
        >
          Quay lại danh sách
        </Button>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
          <div>
            <Title level={2} style={{ margin: 0, fontWeight: 700, color: "#1f2937" }}>
              HÓA ĐƠN
            </Title>
            <Text type="secondary" style={{ fontSize: "15px" }}>Mã đơn: #{invoice.id}</Text>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "12px", color: "#8c8c8c", marginBottom: "4px" }}>Trạng thái</div>
            <Tag color={statusColor} style={{ margin: 0, fontSize: "14px", padding: "4px 12px", borderRadius: "16px" }}>
              {invoice.status}
            </Tag>
          </div>
        </div>

        <Divider style={{ margin: "12px 0 24px 0" }} />

        <Row gutter={[48, 24]} style={{ marginBottom: "32px" }}>
          <Col xs={24} md={12}>
            <Descriptions title={<Text type="secondary" style={{ fontSize: "12px" }}>THÔNG TIN KHÁCH HÀNG</Text>} column={1} size="small">
              <Descriptions.Item label="Họ và tên"><Text strong>{invoice.customerName}</Text></Descriptions.Item>
              <Descriptions.Item label="SĐT">{invoice.phoneNumber}</Descriptions.Item>
              <Descriptions.Item label="Địa chỉ">{invoice.address}</Descriptions.Item>
            </Descriptions>
          </Col>
          <Col xs={24} md={12}>
            <Descriptions title={<Text type="secondary" style={{ fontSize: "12px" }}>CHI TIẾT ĐƠN HÀNG</Text>} column={1} size="small">
              <Descriptions.Item label="Ngày đặt"><Text strong>{invoice.date}</Text></Descriptions.Item>
              <Descriptions.Item label="Phương thức"><Text strong>{invoice.paymentMethod}</Text></Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={invoice.items}
          rowKey={(record, index) => record.name + index}
          pagination={false}
          bordered={false}
          style={{ marginBottom: "32px" }}
        />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ width: "300px" }}>
            <Row justify="space-between" style={{ marginBottom: "8px" }}>
              <Col><Text type="secondary">Tạm tính:</Text></Col>
              <Col><Text strong>{invoice.total}</Text></Col>
            </Row>
            <Row justify="space-between" style={{ marginBottom: "8px" }}>
              <Col><Text type="secondary">Phí vận chuyển:</Text></Col>
              <Col><Text strong>0 đ</Text></Col>
            </Row>

            <Divider style={{ margin: "12px 0" }} dashed />

            <Row justify="space-between" align="middle">
              <Col><Text strong style={{ fontSize: "16px" }}>Tổng cộng:</Text></Col>
              <Col><Text strong style={{ fontSize: "24px", color: "#1677ff" }}>{invoice.total}</Text></Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InvoiceDetail;