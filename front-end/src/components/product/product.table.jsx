import { Button, Flex, Input, Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const ProductTable = (props) => {
    const { dataProduct } = props;

    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Ảnh',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Giá',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <Flex gap="small" align="center" wrap>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </Flex>
            ),
        },
        {
            title: 'Kích cỡ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Miêu tả',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Chức năng',
            key: 'action',
            render: (_, record) => (
                <>
                    <div className='flex gap-5'>
                        <a><EditOutlined /></a>
                        <a className='text-red-500!'><DeleteOutlined /></a>
                    </div>
                </>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={dataProduct} />;
        </>
    );
}

export default ProductTable;