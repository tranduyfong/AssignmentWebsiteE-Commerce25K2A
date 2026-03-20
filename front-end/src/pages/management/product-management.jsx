import { useEffect, useState } from 'react';
import ProductTable from '../../components/product/product.table';
import { getAllProducts } from '../../services/api.service';
import ProductCreate from '../../components/product/product.create';

const ProductManagement = () => {

    const [dataProduct, setDataProduct] = useState([]);
    const loadProduct = async () => {
        const res = await getAllProducts();
        console.log(res.data)
        setDataProduct(res.data);
    };

    useEffect(() => {
        const loadData = async () => {
            const res = await getAllProducts();
            setDataProduct(res.data);
        }
        loadData();
    }, []);
    return (
        <>
            <div className='mt-28'>
                <ProductCreate loadProduct={loadProduct} />
                <ProductTable loadProduct={loadProduct} dataProduct={dataProduct} />
            </div>
        </>
    )
}
export default ProductManagement;
