import { NavLink } from "react-router-dom";
import OverHead from "./overhead";
const Header = () => {
    return (
        <>
            <div className="fixed top-0 w-full">
                <OverHead />
                <div className="bg-gray-300 h-10 flex flex-col justify-center items-center">
                    <header className="flex gap-10">
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
                    </header>
                </div>
            </div>
        </>
    );
}

export default Header;