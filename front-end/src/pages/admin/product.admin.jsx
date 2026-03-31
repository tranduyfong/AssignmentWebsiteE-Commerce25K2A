import { useEffect, useMemo, useState } from "react"
import { getAllProducts } from "../../services/api.service"
import ProductTable from "../../components/product/product.table";
import ProductCreate from "../../components/product/product.create";

const ProductAdmin = () => {
    const [dataProduct, setDataProduct] = useState([]);
    const [values, setValues] = useState("");


    const loadProduct = async () => {
        const res = await getAllProducts();
        setDataProduct(res.data);
    }

    const filteredProducts = useMemo(() => {
        return dataProduct.filter(p =>
            p.nameProduct?.toLowerCase().includes(values.toLowerCase())
        );
    }, [values, dataProduct]);

    useEffect(() => {
        loadProduct();
    }, []);

    return (
        <>
            <ProductCreate loadProduct={loadProduct} values={values} setValues={setValues} />
            <ProductTable dataProduct={filteredProducts} loadProduct={loadProduct} />
        </>
    );
}

export default ProductAdmin;