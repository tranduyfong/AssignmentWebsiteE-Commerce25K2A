import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import "./css/header.css";
import useHideOnScroll from "../../hooks/useHideOnScroll";
import OverHead from "./overhead"
import { useEffect } from "react";
import { getMyUser } from "../../services/api.service";
const Header = () => {
    const headerRef = useRef(null);
    useHideOnScroll(headerRef)
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("access_token");
            if (!token) return;
            try {
                const res = await getMyUser();

                if (res?.data) {
                    setRole(res.data.user.role);
                }
            } catch (error) {
                console.log("Chưa đăng nhập hoặc token lỗi" + error);
            }
        };
        fetchUser();
    }, []);

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
                    </header>
                </div>
            </div>
        </>
    );

}

export default Header;