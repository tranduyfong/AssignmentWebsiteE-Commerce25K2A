import {Layout} from "antd";
import { Outlet } from "react-router-dom";
import MenuList from "../../Components/Menu";
import "./layoutdefault.css"
const {Content, Footer} = Layout;
function LayoutDefault() {
    return (
        <>
            <Layout className="layout-default">
                <header className="header">
                    <div className="header-logo">
                        Header
                    </div>
                    <div className="header-nav">
                        <MenuList/>
                    </div>
                </header>
            </Layout>

            <Layout className="layout-main">
                <Content className="content">
                    <Outlet/>
                </Content>
            </Layout>

            <Footer>Footer</Footer>
        </>
    )
}
export default LayoutDefault;