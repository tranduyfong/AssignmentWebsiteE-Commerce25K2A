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
    const initUserId = async () => {
      let storedId = localStorage.getItem("chat_user_id");

      try {
        const token = localStorage.getItem("access_token");

        // Nếu đã login → lấy ID thật
        if (token) {
          const res = await getMyUser();
          if (res?.data?.user?._id || res?.data?.user?.id) {
            storedId = res.data.user._id || res.data.user.id;
            localStorage.setItem("chat_user_id", storedId);
          }
        }
      } catch (error) {
        console.log("Lỗi lấy user:", error);
      }

      // Nếu chưa có ID → tạo ID tạm
      if (!storedId) {
        storedId = Math.random().toString(36).substring(2, 10);
        localStorage.setItem("chat_user_id", storedId);
      }

      setUserId(storedId);
    };

    initUserId();
  }, []);

  return (
    <div>
      <Header />
      <main className="outlet-main">
        <Outlet />
      </main>
      <Footer />
      {userId && <ChatWidget userId={userId} />}
    </div>
  );
}

export default LayoutDefault;