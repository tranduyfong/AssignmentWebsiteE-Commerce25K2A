import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Revenue from "./revenue";
function LayoutDefault() {
    return (
        <>
            <div>
                <div>
                    <Header />
                </div>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
                <div>
                    <Revenue/>
                </div>
            </div>
        </>
    )
}
export default LayoutDefault;