import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home/index";
import Login from "@/pages/Login/index";
const routers = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createBrowserRouter(routers);

export default function RouterApp() {
  return <RouterProvider router={router}></RouterProvider>;
}
