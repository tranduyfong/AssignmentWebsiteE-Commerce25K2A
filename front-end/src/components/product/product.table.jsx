import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import DeleteProduct from './product.delete';
import UpdateProduct from './product.update';
const ProductTable = (props) => {
    const { dataProduct, loadProduct } = props;

    const [modalDelete, setModalDelete] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [dataLink, setDataLink] = useState("");

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Image',
            dataIndex: 'imgSrc',
            render: (_, record) => {
                return (
                    <div className='flex gap-2'>
                        <img src={record.imgSrc[0]} style={{ width: 80 }} />
                    </div>
                )
            }
        },
        {
            title: 'Name',
            dataIndex: 'nameProduct',
        },
        {
            title: 'Price',
            dataIndex: 'priceProduct',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <a className='mr-5' style={{ color: "red" }}><DeleteOutlined onClick={() => {
                        setModalDelete(true);
                        setDataLink(record);
                    }} /></a>
                    <a ><EditOutlined onClick={() => {
                        setModalUpdate(true);
                        setDataLink(record);
                    }} /></a>
                </>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={dataProduct} rowKey={"_id"} />
            <DeleteProduct modalDelete={modalDelete} setModalDelete={setModalDelete} dataLink={dataLink} loadProduct={loadProduct} />
            <UpdateProduct modalUpdate={modalUpdate} setModalUpdate={setModalUpdate} loadProduct={loadProduct} dataLink={dataLink} setDataLink={setDataLink} />
        </>
    );
}

export default ProductTable;