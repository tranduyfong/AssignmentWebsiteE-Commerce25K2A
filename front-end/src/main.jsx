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
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)