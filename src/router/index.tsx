import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Loading from "@/components/Loading";
import Layout from "@/layout";
const Home = lazy(() => import("@/pages/Home"));
const Hex = lazy(() => import("@/pages/Hex"));
const Login = lazy(() => import("@/pages/Login"));
const UserManage = lazy(() => import("@/pages/UserManage"));
const RoleManage = lazy(() => import("@/pages/RoleManage"));
const MenuManage = lazy(() => import("@/pages/MenuManage"));

// Suspense工厂函数
function FactorySuspense({
  ele: Ele,
}: {
  ele: React.LazyExoticComponent<() => JSX.Element>;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Ele />
    </Suspense>
  );
}

const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // 重定向导/home
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/home",
        element: <FactorySuspense ele={Home} />,
        children: [],
      },
      {
        path: "/systemManage/userManage",
        element: <FactorySuspense ele={UserManage} />,
        children: [],
      },
      {
        path: "/systemManage/roleManage",
        element: <FactorySuspense ele={RoleManage} />,
        children: [],
      },
      {
        path: "/systemManage/menuManage",
        element: <FactorySuspense ele={MenuManage} />,
        children: [],
      },
      {
        path: "/technicalStudy/aggregatedHex",
        element: <FactorySuspense ele={Hex} />,
        children: [],
      },
    ],
  },
  {
    path: "/login",
    element: <FactorySuspense ele={Login} />,
  },
];

const router = createBrowserRouter(routers);

export default function RouterApp() {
  return <RouterProvider router={router}></RouterProvider>;
}
