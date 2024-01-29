import React, { lazy } from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Loading from "@/components/Loading";
import Layout from "@/layout";
import { FactorySuspense, menuRouteArr } from "./menuRoute";

const Login = lazy(() => import("@/pages/Login"));
const Personal = lazy(() => import("@/pages/Personal"));

const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // 重定向导/home
      // {
      //   path: "/",
      //   element: <Navigate to={"/home"} />,
      // },
      {
        path: "/personal",
        element: <FactorySuspense ele={Personal} />,
        children: [],
        handle: {
          name: "个人中心",
        },
      },
      ...menuRouteArr,
    ],
  },
  {
    path: "/login",
    element: <FactorySuspense ele={Login} />,
  },
];

// const router = createBrowserRouter(routers);
const router = createHashRouter(routers);

export default function RouterApp() {
  return <RouterProvider router={router}></RouterProvider>;
}
