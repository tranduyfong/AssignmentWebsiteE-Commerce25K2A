import { Link, NavLink } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined, HomeOutlined, InfoCircleOutlined, PhoneOutlined, ShopOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import "./css/header.css"
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
            <div className="fixed w-full top-0 z-999">
                <div>
                    <OverHead />
                </div>

                <div className=" flex justify-center items-center inner-menu">
                    <header className="layout-default__header flex gap-10">
                        <div className="menu flex">
                            <ul className="flex gap-20 text-center">
                                <li className="menu-icon">
                                    <HomeOutlined className="icon" />
                                    <NavLink to="/">Trang chủ</NavLink> 
                                </li>
                                <li className="menu-icon">
                                    <ShopOutlined className="icon" />
                                    <NavLink to="/product">Sản Phẩm</NavLink>
                                </li>
                                <li className="menu-icon">
                                    <InfoCircleOutlined className="icon" /> 
                                    <NavLink to="/intro">Giới thiệu</NavLink>
                                </li>
                                <li className="menu-icon">
                                    <PhoneOutlined className="icon" />
                                    <NavLink to="/contact">Liên Hệ</NavLink>
                                </li>
                                <li className="menu-icon">
                                    <ShoppingCartOutlined className ="icon" />
                                    <NavLink to="/checkcart">Kiểm tra đơn hàng</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="cursor-pointer mt-1">
                            <Dropdown menu={{ items }}>
                                <a>
                                    <Space className="manage-income">
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