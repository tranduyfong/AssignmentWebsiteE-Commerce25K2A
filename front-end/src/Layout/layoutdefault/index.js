import {Outlet } from "react-router-dom";
import "./layoutdefault.css"
function LayoutDefault() {
    return (
        <>
            <div className="layout-default">
                {/* HEADER */}
                <header className="header">
                    <div className="header-logo">Toni Kroos</div>
                    <div className="menu">
                        <ul>
                            <li>
                                Giới thiệu
                            </li>
                            <li>
                                Sản phẩm
                            </li>
                        </ul>
                    </div>
                </header>
                {/* END-HEADER */}

                {/* MAIN */}
                <main className="layout-main">
                    <Outlet/>
                </main>
                {/* END-MAIN */}

                {/* FOOTER */}
                <footer className="layout-footer">
                    copyright @ by Kien
                </footer>
                {/* END-FOOTER */}
            </div>
        </>
    )
}
export default LayoutDefault