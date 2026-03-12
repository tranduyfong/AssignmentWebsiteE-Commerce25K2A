import { Button, Flex, Input, Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ProductTable from '../../components/product/product.table';
import LookingForCreateProduct from '../../components/product/product.create.lookingfor';

const ProductManagement = () => {

    const [typing, setTyping] = useState("");

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <>
            <div className='mt-28'>
                <LookingForCreateProduct />
                <ProductTable dataProduct={data} />
            </div>
        </>
    )
}
export default ProductManagement;
