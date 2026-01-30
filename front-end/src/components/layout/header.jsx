import { NavLink} from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="bg-gray-300 h-10 flex justify-center items-center sticky top-0 w-screen">
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
                   
                </header>
            </div>
        </>
    );
}

export default Header;