import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "@/components/Loading";
import Layout from "@/layout";
const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));

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
      {
        path: "/",
        element: <FactorySuspense ele={Home} />,
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
