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
const Personal = lazy(() => import("@/pages/Personal"));

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
export const langMenu = {
  home: "首页",
  personal: "个人中心",
  systemManage: "系统管理",
  userManage: "用户管理",
  roleManage: "角色管理",
  menuManage: "菜单管理",
  technicalStudy: "技术研究",
  aggregatedHex: "聚合蜂窝图",
};
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
        handle: {
          name: "wwwwww",
        },
      },
      {
        path: "/personal",
        element: <FactorySuspense ele={Personal} />,
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
