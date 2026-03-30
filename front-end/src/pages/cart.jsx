import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import { getCart } from '../services/api.service';
import CartTable from '../components/cart/cart.table';

const CartPage = () => {
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await getCart();
        setCartData(res.data);
    }

    return (
        <div className='mt-40 w-2/3 m-auto text-gray-500'>
            <div className='flex'>
                <Link to="/">Trang chủ | </Link>
                <Link className='ml-1 text-amber-400 font-semibold'>Giỏ hàng</Link>
            </div>
            <Divider className='mt-3!' />
            <p className='font-bold text-black'>GIỎ HÀNG</p>
            <CartTable dataCart={cartData} loadData={fetchData} />
        </div>
    )
}
export default CartPage;