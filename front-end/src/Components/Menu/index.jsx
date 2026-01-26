import { Menu } from "antd";
import { Link } from "react-router-dom";
function MenuList() {
    const items = [
        {
            label: <Link to="/">BECK</Link>,
            key: "/"
        },
        {
            label: <Link to="/">Trang chủ</Link>,
            key: "/"
        },
        {
            label: <Link to="introduct">Giới thiệu</Link>,
            key: "introduct"
        },
        {
            label: <Link to="product">Sản phẩm</Link>,
            key: "product",
            childrent: [
                {
                    label: "Nike",
                    key: "Nike",
                },
                {
                    label: "Adidas",
                    key: "Adidas",
                },
                {
                    label: "Puma",
                    key: "Puma",
                }
            ]
        },
        {
            label: <Link to="contact">Liên hệ</Link>,

            key: "contact"
        },
        {
            label: <Link to="checkcart">Kiểm tra đơn hàng</Link>,

            key: "checkcart"
        },

    ]
    return (
        <>
            <Menu
                mode="horizontal"
                items={items}
                defaultSelectedKeys={["/"]} // mặc định key nào đc active
                defaultOpenKeys={["menu-1"]} // mặc định key nào được mở
                style={{width: "1000px"}}
            />
        </>
    )
}
export default MenuList;