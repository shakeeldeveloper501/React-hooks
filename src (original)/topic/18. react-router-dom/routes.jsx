import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import Products from "./components/Products";
import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },

  {
    path: "/help",
    element: <Navigate to={"/"} replace />,
  },
  {
    path: "/product/:id",
    element: <Products />,
  },
]);

