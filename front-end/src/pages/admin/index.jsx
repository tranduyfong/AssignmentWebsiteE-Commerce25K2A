import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, Package, Users, ShoppingCart, LogOut, } from "lucide-react";

const AdminLayout = () => {
  const menuItems = [
    { path: "/admin", name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/admin/products", name: "Quản lý sản phẩm", icon: <Package size={20} /> },
    { path: "/admin/users", name: "Quản lý user", icon: <Users size={20} /> },
    { path: "/admin/orders", name: "Đơn hàng", icon: <ShoppingCart size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans text-gray-900">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen">
        <div className="p-6 flex items-center gap-3">
          <div className="w-20 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
            Admin
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-800">Beck</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? "bg-indigo-50 text-indigo-700 font-semibold" 
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-gray-800">Hệ thống quản trị</h2>
        </header>

        {/* CONTENT AREA */}
        <main className="p-8 max-w-7xl mx-auto w-full">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;