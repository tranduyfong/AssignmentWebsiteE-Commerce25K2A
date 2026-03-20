import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
import "./css/main.css"
import Revenue from "./revenue";
function LayoutDefault() {
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
      </div>
    </>
  );
}
export default LayoutDefault;
