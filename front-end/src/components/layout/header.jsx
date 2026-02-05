import { Link, NavLink } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';
import OverHead from "./overhead"
const Header = () => {
    const items = [
        {
            key: '/statistical',
            label: <Link to="statistical">Thống kê</Link>
        },
        {
            key: '/Account-management',
            label: <Link to="accountmanagement">Quản lý tài khoản</Link>,
        },
        {
            key: '/revenue-and-expenditure-management',
            label: <Link to="revenue-expenditure">Quản lý thu chi</Link>,
        },
        {
            key: '/product-management',
            label: <Link to="productmanagement">Quản lý sản phẩm</Link>,
        },
        {
            key: '/receipt-management',
            label: <Link to="receiptmanagement">Quản lý hóa đơn</Link>,
        },
    ];
    return (
        <>
            <div className="fixed w-full">
                <div>
                    <OverHead />
                </div>

                <div className="bg-gray-300 h-10 flex justify-center items-center ">
                    <header className="layout-default__header flex gap-10">
                        <NavLink className="cursor-pointer" to="/">LOGO</NavLink>
                        <div className="menu flex">
                            <ul className="flex gap-10">
                                <li>
                                    <NavLink to="/">Trang chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product">Sản Phẩm</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/intro">Giới thiệu</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Liên Hệ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/checkcart">Kiểm tra đơn hàng</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Dropdown menu={{ items }}>
                                <a>
                                    <Space>
                                        Quản lý & Thống kê
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}

export default Header;