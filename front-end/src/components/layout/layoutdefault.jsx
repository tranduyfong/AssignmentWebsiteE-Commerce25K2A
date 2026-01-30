import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
function LayoutDefault() {
    return (
        <>
            <div>
                <header>
                    <Header/>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;