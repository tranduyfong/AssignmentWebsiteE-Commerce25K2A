import React, { useState, useEffect } from 'react';
import { Table, Image, Typography, Tag, Button, notification } from 'antd';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import TotalCart from './cart.total';
import DeleteCart from './cart.delete';
import { updateCartQuantity } from '../../services/api.service';

const { Text } = Typography;

const CartTable = (props) => {
    const { dataCart, loadData } = props;
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const [modalDelete, setModalDelete] = useState(false);
    const [dataLink, setDataLink] = useState("");

    const [loadingId, setLoadingId] = useState(null);

    useEffect(() => {
        const selectedItems = dataCart?.filter(item => selectedRowKeys.includes(item._id)) || [];

        const total = selectedItems.reduce((sum, item) => {
            return sum + (item.productId.priceProduct * item.quantity);
        }, 0);

        setTotalPrice(total);
        setSelectedProducts(selectedItems);
    }, [dataCart, selectedRowKeys]);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const handleUpdateQuantity = async (record, newQuantity) => {
        if (newQuantity < 1) return;

        setLoadingId(record._id);
        try {
            const res = await updateCartQuantity(record._id, newQuantity);
            if (res && res.success) {
                loadData();
            } else {
                notification.error({ message: "Lỗi", description: res.message || "Không thể cập nhật số lượng" });
            }
        } catch (error) {
            notification.error({ message: "Lỗi hệ thống", description: error.message });
        } finally {
            setLoadingId(null);
        }
    };

    const columns = [
        {
            title: 'Hình ảnh',
            dataIndex: ['productId', 'imgSrc'],
            key: 'image',
            render: (imgSrc) => (
                <Image
                    width={80}
                    src={imgSrc?.[0]}
                    fallback="https://placehold.co/80x80"
                />
            ),
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: ['productId', 'nameProduct'],
            key: 'name',
            render: (text) => <Text strong>{text}</Text>,
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
            render: (size) => <Tag color="blue">{size}</Tag>
        },
        {
            title: 'Đơn giá',
            dataIndex: ['productId', 'priceProduct'],
            key: 'price',
            render: (price) => (
                <Text type="danger">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
                </Text>
            ),
        },
        {
            title: 'Số lượng',
            key: 'quantity',
            render: (_, record) => (
                <div className="flex items-center gap-2">
                    <Button
                        icon={<MinusOutlined />}
                        size="small"
                        onClick={() => handleUpdateQuantity(record, record.quantity - 1)}
                        disabled={record.quantity <= 1 || loadingId === record._id}
                        loading={loadingId === record._id} // Xoay vòng vòng khi đợi API
                    />
                    <span className="font-medium w-8 text-center">{record.quantity}</span>
                    <Button
                        icon={<PlusOutlined />}
                        size="small"
                        onClick={() => handleUpdateQuantity(record, record.quantity + 1)}
                        disabled={loadingId === record._id}
                        loading={loadingId === record._id}
                    />
                </div>
            )
        },
        {
            title: 'Thành tiền',
            key: 'total',
            render: (_, record) => (
                <Text strong>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                        record.productId.priceProduct * record.quantity
                    )}
                </Text>
            ),
        },
        {
            title: 'Xóa',
            key: 'delete',
            render: (_, record) => (
                <a className='mr-5' style={{ color: "red" }}>
                    <DeleteOutlined onClick={() => { setModalDelete(true); setDataLink(record) }} />
                </a>
            )
        }
    ];

    return (
        <div>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    selectedRowKeys: selectedRowKeys,
                    onChange: onSelectChange
                }}
                columns={columns}
                dataSource={dataCart}
                rowKey={(record) => record._id}
                pagination={false}
            />
            <TotalCart selectedProducts={selectedProducts} totalPrice={totalPrice} />
            <DeleteCart loadData={loadData} modalDelete={modalDelete} setModalDelete={setModalDelete} dataLink={dataLink} />
        </div>
    );
};

export default CartTable;