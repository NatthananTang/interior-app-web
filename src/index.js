import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Dashboard from "./component/Contact/Dashboard";
import Layout from "./component/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Contact/Dashboard",
    element: <Dashboard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
    <RouterProvider router={router} />
  </React.StrictMode>
);
