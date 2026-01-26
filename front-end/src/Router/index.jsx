import LayoutDefault from "../Layout/LayoutDefault";
import CheckCart from "../Pages/CheckCart";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Introduct from "../Pages/Introduct";
import Product from "../Pages/Product";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/introduct",
                element: <Introduct />
            },
            {
                path: "/product",
                element: <Product />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/checkcart",
                element: <CheckCart />
            },

        ]
    }
]