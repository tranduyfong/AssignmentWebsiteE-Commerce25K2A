import { Input } from 'antd';

const LookingForCreateProduct = (props) => {
    const { values, setValues } = props;

    return (
        <>
            <div className='flex items-center justify-around'>
                <div className='flex'>
                    <Input className='w-200!' placeholder='Nhập tên sản phẩm...' value={values} onChange={(event) => setValues(event.target.value)} />
                </div>
            </div>
        </>
    )
}

export default LookingForCreateProduct;