import { useState } from 'react';
import UserTable from '../../components/user/user.table';
import CreateUser from '../../components/user/user.create';

const AccountManagement = () => {

    const lookingForClick = () => {
        alert(`You typed: ${typing}`);
    }

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
                <CreateUser />
                <UserTable dataUser={data} />
            </div>
        </>
    )
}
export default AccountManagement;
