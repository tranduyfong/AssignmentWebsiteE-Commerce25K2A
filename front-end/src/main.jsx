import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import '../style.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from "./pages/errors.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/loginPage.jsx";
import ForgetPassword from "./pages/forgetPassword.jsx";
import RegisterPage from "./pages/registerPage.jsx";
import Intro from "./pages/intro.jsx";
import Product from "./pages/products.jsx";
import Contact from "./pages/contact.jsx";
import CheckCart from "./pages/checkcart.jsx";
import ManagerIncome from "./pages/managerIncome.jsx";
import ViewDetail from "./pages/viewDetail.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />
      },
      {
        path: "/loginPage",
        element: <LoginPage />
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />
      },
      {
        path: "/registerPage",
        element: <RegisterPage />
      },
      {
        path: "/intro",
        element: <Intro />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "checkcart",
        element: <CheckCart />
      },
      {
        path: "managerIncome",
        element: <ManagerIncome />
      },
      {
        path: "viewDetail",
        element: <ViewDetail />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)