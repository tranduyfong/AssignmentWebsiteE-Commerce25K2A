import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Revenue from "./revenue";
function LayoutDefault() {
    return (
        <>
            <div>
                <header>
                    <Header />
                </header>
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