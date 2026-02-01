import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import OverHead from "./overhead.jsx";
import LayoutDefault from "./components/layout/layoutdefault";

const App = () => {
  return (
    <>
      <OverHead />
      <Header />
      <Outlet />
      <Footer />
      <LayoutDefault/>
    </>
  );
}

export default App;
