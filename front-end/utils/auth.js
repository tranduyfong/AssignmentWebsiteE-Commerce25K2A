import { notification } from "antd";
import { redirect } from "react-router-dom";

export const requireAuthLoader = () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
        notification.error({
            message: "Truy cập thất bại!",
            description: "Bạn chưa đăng nhập hoặc phiên đăng nhập hết hạn."
        })
        return redirect("/loginPage");
    }
    return null;
};