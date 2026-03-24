import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined, HomeOutlined, InfoCircleOutlined, PhoneOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import "./css/header.css";
import useHideOnScroll from "../../hooks/useHideOnScroll";
import OverHead from "./overhead"
const Header = () => {
    const headerRef = useRef(null);
    useHideOnScroll(headerRef)
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
            <div ref={headerRef} className="fixed w-full top-0 z-999 header">
                <div>
                    <OverHead />
                </div>

                <div className=" flex justify-center items-center inner-menu">
                    <header className="layout-default__header flex gap-10">
                        <div className="menu flex">
                            <ul className="flex gap-20 text-center">
                                <NavLink to="/">
                                    <li className="menu-icon">
                                        <HomeOutlined className="icon" />
                                        <span >Trang chủ</span>
                                    </li>
                                </NavLink>

                                <NavLink to="/products">
                                    <li className="menu-icon">
                                        <ShopOutlined className="icon" />
                                        <span >Sản Phẩm</span>
                                    </li>
                                </NavLink>

                                <NavLink to="/intro">
                                    <li className="menu-icon">
                                        <InfoCircleOutlined className="icon" />
                                        <span>Giới thiệu</span>
                                    </li>
                                </NavLink>

                                <NavLink to="/contact">
                                    <li className="menu-icon">
                                        <PhoneOutlined className="icon" />
                                        <span >Liên Hệ</span>
                                    </li>
                                </NavLink>

                                <NavLink to="/checkcart">
                                    <li className="menu-icon">
                                        <ShoppingCartOutlined className="icon" />
                                        <span>Kiểm tra đơn hàng</span>
                                    </li>
                                </NavLink>
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