import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
import "./css/main.css";
import { getMyUser } from "../../services/api.service";
import { useEffect, useState } from "react";
import ChatWidget from "../chat/chat.widget";
function LayoutDefault() {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) return;
      try {
        const res = await getMyUser();
        if (res?.data) {
          setUserId(res.data.user.id); // Lấy ID (hoặc _id tùy database của bạn)
        }
      } catch (error) {
        console.log("Lỗi lấy thông tin user cho Chat", error);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <main className="outlet-main">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
        {userId && <ChatWidget userId={userId} />}
      </div>
    </>
  );
}
export default LayoutDefault;
