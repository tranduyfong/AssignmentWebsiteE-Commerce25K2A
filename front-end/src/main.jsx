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
import Intro from "./pages/intro.jsx";
import Product from "./pages/products.jsx";
import Contact from "./pages/contact.jsx";
import CheckCart from "./pages/checkcart.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />
      },
      {
        path:"/intro",
        element: <Intro/>
      },
      {
        path: "/product",
        element: <Product/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "checkcart",
        element: <CheckCart/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)