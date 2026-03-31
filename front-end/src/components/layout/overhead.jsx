import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCart, getMyUser } from "../../services/api.service";
import { SearchOutlined } from '@ant-design/icons';
import { Dropdown } from "antd";

const OverHead = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const [name, setName] = useState(null);
  const [role, setRole] = useState(null);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getCart();
    setCartData(res?.data || []);
  }

  const xuLyBamTimKiem = () => {
    if (!text.trim()) return;
    navigate(`/search?keyword=${text}`);
  };

  const EnterTimKiem = (e) => {
    if (e.key === 'Enter') {
      xuLyBamTimKiem();
    };
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) return;
      try {
        const res = await getMyUser();
        if (res?.data) {
          setName(res.data.user.name);
          setRole(res.data.user.role);
        }
      } catch (error) {
        console.log("Chưa đăng nhập hoặc token lỗi", error);
      }
    };
    fetchUser();
  }, []);

  const logOutUser = () => {
    localStorage.removeItem("access_token");
    setName(null);
    setRole(null);
    window.location.href = "/";
  }

  const userMenuItems = !name ? [
    { key: 'login', label: <Link to="/loginPage">Đăng nhập</Link> },
    { key: 'register', label: <Link to="/registerPage">Đăng ký</Link> }
  ] : [
    {
      key: 'hello',
      label: <span className="text-gray-500 cursor-default pointer-events-none">Xin chào, <b className="text-black">{name}</b></span>
    },
    { type: 'divider' },
    ...(role !== "user" ? [
      { key: 'admin', label: <Link to="/admin">Quản lý & Thống kê</Link> }
    ] : []),
    {
      key: 'logout',
      label: <div onClick={logOutUser} className="text-red-500 hover:text-red-600 font-bold w-full">Đăng xuất</div>
    }
  ];

  return (
    <div className="w-full bg-white py-3 border-b border-gray-100 relative z-50 rounded-t-xl">
      <div className="w-full flex items-center px-6 md:px-10 justify-around">
        <div className="text-3xl md:text-4xl font-black italic tracking-tighter cursor-pointer shrink-0">
          <Link to="/">beck.</Link>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 ml-15">
          <nav className="flex items-center gap-10 text-[14px] text-gray-800 font-semibold" style={{ fontSize: "17px" }}>
            <Link to="/" className="hover:text-[#febb0a] duration-300 transition-colors">TRANG CHỦ</Link>
            <Link to="/products" className="hover:text-[#febb0a] duration-300 transition-colors">SẢN PHẨM</Link>
            <Link to="/intro" className="hover:text-[#febb0a] duration-300 transition-colors">GIỚI THIỆU</Link>
            <Link to="/contact" className="hover:text-[#febb0a] duration-300 transition-colors">LIÊN HỆ</Link>
            <Link to="/checkcart" className="hover:text-[#febb0a] duration-300 transition-colors">KIỂM TRA ĐƠN HÀNG</Link>
          </nav>
        </div>

        <div className="flex items-center gap-5 shrink-0">
          <div className="relative w-48 md:w-60 mt-4">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full bg-gray-100 text-gray-800 py-2 px-4 pr-10 rounded-full outline-none text-sm placeholder-gray-500 transition-all"
              value={text}
              onChange={(p) => setText(p.target.value)}
              onKeyDown={EnterTimKiem}
            />
            <SearchOutlined
              onClick={xuLyBamTimKiem}
              className="absolute right-3 top-1/2 -translate-y-3/4 text-gray-500 cursor-pointer hover:text-black text-lg transition-colors"
            />
          </div>
          <NavLink to="/cartPage" className="relative flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="absolute -top-1 -right-2 bg-[#ffcc00] text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
              {cartData?.length || 0}
            </span>
          </NavLink>
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
            <div className="flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-gray-100 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default OverHead;