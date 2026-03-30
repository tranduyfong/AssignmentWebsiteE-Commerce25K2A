import React, { useState } from 'react';
import { Table, Image, Typography, Tag, } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import TotalCart from './cart.total';
import DeleteCart from './cart.delete';

const { Text } = Typography

const CartTable = (props) => {
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
            dataIndex: 'quantity',
            key: 'quantity',
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
                <a className='mr-5' style={{ color: "red" }}><DeleteOutlined onClick={() => { setModalDelete(true); setDataLink(record) }} /></a>
            )
        }
    ];

    const { dataCart, loadData } = props;
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [modalDelete, setModalDelete] = useState(false);
    const [dataLink, setDataLink] = useState("");

    const onSelectChange = (selectedRowKeys, selectedRows) => {
        const total = selectedRows.reduce((sum, item) => {
            return sum + (item.productId.priceProduct * item.quantity);
        }, 0);

        setTotalPrice(total);
        setSelectedProducts(selectedRows);
    };

    return (
        <div>
            <Table
                rowSelection={{
                    type: 'checkbox',
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