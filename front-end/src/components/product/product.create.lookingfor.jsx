import { Button, Input } from 'antd';
import { useState } from 'react';
import ProductCreate from './product.create';

const LookingForCreateProduct = () => {

    const [typing, setTyping] = useState("");

    const lookingForClick = () => {
        alert(`You typed: ${typing}`);
    }

    const addClick = () => {
        alert("Click")
    }
    return (
        <>
            <div className='flex items-center justify-around mt-30'>
                <p className='p-10 font-bold'>QUẢN LÝ SẢN PHẨM</p>
                <div className='flex'>
                    <Input className='w-200!' placeholder='Nhập tên sản phẩm...' value={typing} onChange={(event) => { setTyping(event.target.value) }} />
                    <Button type='primary' className='w-20! ml-2!' onClick={lookingForClick}>Tìm</Button>
                </div>
                <ProductCreate />
            </div>
        </>
    )
}

export default LookingForCreateProduct;