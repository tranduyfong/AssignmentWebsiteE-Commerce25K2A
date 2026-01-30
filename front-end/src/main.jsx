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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
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
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)