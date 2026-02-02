import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import OverHead from "./components/layout/overhead.jsx";
import LayoutDefault from "./components/layout/layoutdefault";


const App = () => {
  return (
    <>
      <OverHead />
      <LayoutDefault />
    </>
  );
}

export default App;
