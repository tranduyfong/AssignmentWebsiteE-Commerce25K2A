import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Select, Popconfirm, message, Space, Tag } from "antd";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Tooltip } from "antd"; 

const { Option } = Select;

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const fetchUsers = async () => {
    setLoading(true);
    try {

    const token = localStorage.getItem("access_token");

    const res = await axios.get("http://localhost:3000/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setUsers(res.data.data || []);   

  } catch (err) {
    console.log(err);
    message.error("Không có quyền truy cập");
  } finally {
    setLoading(false);
  }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = () => {
    setEditingUser(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setEditingUser(record);
    form.setFieldsValue({
      ...record,
      password: "" 
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("access_token");

    await axios.delete(`http://localhost:3000/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    message.success("Xóa tài khoản thành công");
    fetchUsers();
  } catch (err) {
    console.error(err);
    message.error(err.response?.data?.message || "Xóa thất bại");
  }
};

  const handleSubmit = async (values) => {
  try {
    const token = localStorage.getItem("access_token");

    if (editingUser) {
      await axios.put(
        `http://localhost:3000/users/${editingUser._id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      message.success("Cập nhật thông tin thành công");
    } else {
      await axios.post(
        "http://localhost:3000/users",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      message.success("Thêm tài khoản mới thành công");
    }

    setIsModalOpen(false);
    fetchUsers();
  } catch (err) {
    console.error(err);
    message.error(err.response?.data?.message || "Lỗi thao tác API");
  }
};

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      width: 60,
      align: "center",
      render: (text, record, index) => index + 1,
    },
    {
      title: "ID Hệ thống",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      ellipsis: true, // rút gọn nếu id quá dài
      width: 150,
    },
    {
      title: "Tên nhân viên",
      dataIndex: "name",
      key: "name",
      width: 150,
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
      ellipsis: true,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: 120,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: 100,
      render: (role) => (
        <Tag color={role === "admin" ? "volcano" : "blue"}>
          {role === "admin" ? "ADMIN" : "NHÂN VIÊN"}
        </Tag>
      ),
    },
    {
    title: "Action", 
    key: "action",
    width: 80,         
    align: "center",
    render: (_, record) => (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      <Tooltip title="Sửa">
        <Button 
          type="text" 
          size="small"
          style={{ padding: 0 }} 
          icon={<EditOutlined style={{ color: "#1890ff", fontSize: "16px" }} />} 
          onClick={() => handleEdit(record)} 
        />
      </Tooltip>
      <Popconfirm title="Xóa?" onConfirm={() => handleDelete(record._id)}>
        <Tooltip title="Xóa">
          <Button 
            type="text" 
            size="small"
            danger 
            style={{ padding: 0 }}
            icon={<DeleteOutlined style={{ fontSize: "16px" }} />} 
          />
        </Tooltip>
      </Popconfirm>
    </div>
  ),
},
  ];

  return (
    <div style={{ padding: "24px", background: "#fff", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0 }}>Quản lý Admin / Nhân viên</h2>
        <Button type="primary" size="large" onClick={handleAdd}>
          + Thêm tài khoản
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={users}
        rowKey="_id"
        loading={loading}
        bordered
        size="middle"
        scroll={{ x: "max-content" }} 
        pagination={{ pageSize: 8 }}
    />

      <Modal
        title={editingUser ? "Cập nhật tài khoản" : "Tạo tài khoản mới"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        okText={editingUser ? "Cập nhật" : "Tạo mới"}
        cancelText="Hủy"
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ role: "staff" }}
        >
          <Form.Item
            name="name"
            label="Tên khách hàng"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input placeholder="Ví dụ: Nguyễn Văn A" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập Email!" },
              { type: "email", message: "Email không đúng định dạng!" }
            ]}
          >
            <Input placeholder="email@vi-du.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: !editingUser, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder={editingUser ? "Để trống nếu không đổi" : "Nhập mật khẩu ít nhất 6 ký tự"} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              { pattern: /^[0-9]+$/, message: "Chỉ được nhập số!" }
            ]}
          >
            <Input placeholder="09xxxxxxx" />
          </Form.Item>

          <Form.Item
            name="role"
            label="Vai trò (Role)"
            rules={[{ required: true }]}
          >
            <Select placeholder="Chọn vai trò">
              <Option value="admin">Quản trị viên (Admin)</Option>
              <Option value="staff">Nhân viên (Staff)</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminUsers;