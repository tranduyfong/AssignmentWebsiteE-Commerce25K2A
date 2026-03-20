import { Button } from 'antd';

const CreateUser = () => {

    const addClick = () => {
        alert("Click")
    }

    return (
        <>
            <div className='flex items-center justify-between p-10'>
                <p className='font-bold'>QUẢN LÝ TÀI KHOẢN</p>
                <Button type='primary' className='w-50!' onClick={addClick}>Thêm tài khoản nhân viên</Button>
            </div>
        </>
    )
}

export default CreateUser;