import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import OverHead from "./components/layout/overhead.jsx";

const App = () => {
  return (
    <>
      <OverHead />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
