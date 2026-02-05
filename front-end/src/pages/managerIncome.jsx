import React from 'react';
import { Card, Flex, Space, Table, Tag, DatePicker, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Column } = Table;
const { RangePicker } = DatePicker;
const { Title } = Typography;
const data = [
    {
        id: '1',
        date: '01/01/2025',
        nameProduct: 'Giày thể thao Adidas',
        type: ['Thu'],
        method: 'Chuyển khoản',
        money: '+3.500.000',
    },
    {
        id: '2',
        date: '02/01/2025',
        nameProduct: 'Giày Lacoste Ag-LT23 Ultra xanh',
        type: ['Thu'],
        method: 'Tiền mặt',
        money: '+2.500.000',
    },
    {
        id: '3',
        date: '03/01/2025',
        nameProduct: 'Giày Nike aford',
        type: ['Chi'],
        method: 'Tiền mặt',
        money: '-1.200.000',
    },
];
const ManagerIncome = () => {
    return (
        <>
            <Card>
                <Title>Quản lý Thu - Chi</Title>

                <Space size={12} style={{ marginBottom: 20, display: 'flex' }}>
                    <Flex gap="small" align="center">
                        <span>Lọc theo ngày: </span>
                        <RangePicker />
                    </Flex>
                </Space>
                <Table dataSource={data}>

                    <Column title="Id" dataIndex="id" key="id" />
                    <Column title="Ngày" dataIndex="date" key="date" />
                    <Column title="Tên sản phẩm" dataIndex="nameProduct" key="nameProduct" />
                    <Column
                        title="Loại"
                        dataIndex="type"
                        key="type"
                        render={tags => (
                            <Flex gap="small" align="center" wrap>
                                {tags.map(tag => {
                                    const color = tag === 'Thu' ? 'green' : 'red';
                                    return (
                                        <Tag color={color} key={tag}>
                                            {tag.toUpperCase()}
                                        </Tag>
                                    );
                                })}
                            </Flex>
                        )}
                    />
                    <Column title="Phương thức" dataIndex="method" key="method" />
                    <Column title="Số tiền" dataIndex="money" key="money" />
                    <Column
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <Link
                                    to="/viewDetail"
                                    className="text-blue-500 hover:underline"
                                >
                                    Xem chi tiết
                                </Link>
                            </Space>
                        )}
                    />
                </Table>
            </Card>
        </>
    )
};
export default ManagerIncome;