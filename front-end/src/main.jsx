import React from "react";
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import '../style.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from "./pages/errors.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/auth-user/loginPage.jsx";
import ForgetPassword from "./pages/auth-user/forgetPassword.jsx";
import RegisterPage from "./pages/auth-user/registerPage.jsx";
import Intro from "./pages/introduct/intro.jsx";
import Product from "./pages/products.jsx";
import Contact from "./pages/contact.jsx";
import CheckCart from "./pages/management/checkcart.jsx";
import CartPage from "./pages/cart.jsx";
import PaymentPage from "./pages/payment/payment.jsx";
import ProductDetail from "./pages/detailProduct.jsx";
import SearchPage from "./pages/search/searchPage.jsx";
import WarrantyPolicy from "./pages/warranty.policy.jsx";
import ReturnPolicy from "./pages/return.policy.jsx";
import ShoppingGuide from "./pages/shopping.guide.jsx";
import { requireAdminLoader, requireAuthLoader } from "../utils/auth.js";
import VnpayReturn from "./components/vnpay/return.vnpay.jsx";
import AdminLayout from "./pages/admin/index.jsx";
import AdminChat from "./pages/admin/chat.admin.jsx";
import OrderManagement from "./pages/admin/orderManagement.jsx";
import AdminDashBoard from "./pages/admin/dashBoard.admin.jsx";
import ProductAdmin from "./pages/admin/product.admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", index: true, element: <HomePage />, },
      { path: "/loginPage", element: <LoginPage /> },
      { path: "/forgetPassword", element: <ForgetPassword /> },
      { path: "/registerPage", element: <RegisterPage /> },
      { path: "/intro", element: <Intro /> },
      { path: "/products", element: <Product />, },
      { path: "/contact", element: <Contact /> },
      { path: "/detail/:id", element: <ProductDetail /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/warranty-policy", element: <WarrantyPolicy /> },
      { path: "/return-policy", element: <ReturnPolicy /> },
      { path: "/shopping-guide", element: <ShoppingGuide /> },
      {
        path: "/",
        loader: requireAuthLoader,
        children: [
          { path: "/checkcart", element: <CheckCart /> },
          { path: "/cartPage", element: <CartPage /> },
          { path: "/vnpay-return", element: <VnpayReturn />, },
        ]
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    loader: requireAdminLoader,
    children: [
      { path: "/admin", element: <AdminDashBoard /> },
      { path: "/admin/chat", element: <AdminChat /> },
      { path: "/admin/orders", element: <OrderManagement /> },
      { path: "/admin/products", element: <ProductAdmin /> }
    ]
  },
  {
    path: "/payment",
    element: <PaymentPage />,
    loader: requireAuthLoader
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "'Quicksand', sans-serif",
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
)