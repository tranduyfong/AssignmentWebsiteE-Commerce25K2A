import { notification } from "antd";
import { redirect } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const requireAuthLoader = () => {
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

const requireAdminLoader = () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
        notification.error({
            message: "Truy cập thất bại!",
            description: "Bạn chưa đăng nhập hoặc phiên đăng nhập hết hạn."
        })
        return redirect("/loginPage");
    }

    try {
        const decoded = jwtDecode(token);
        console.log(decoded);

        if (decoded.role === "user") {
            notification.error({ message: "Bạn không phải Admin hay Nhân viên!" });
            return redirect("/");
        }
    } catch (error) {
        return redirect("/loginPage");
    }

    return null;
};
export { requireAuthLoader, requireAdminLoader }