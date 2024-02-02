import React, { lazy, Suspense, useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { t } from "i18next";
import Loading from "@/components/Loading";
const Home = lazy(() => import("@/pages/Home"));
const Hex = lazy(() => import("@/pages/Study/Hex"));
const UserManage = lazy(() => import("@/pages/System/UserManage"));
const RoleManage = lazy(() => import("@/pages/System/RoleManage"));
const MenuManage = lazy(() => import("@/pages/System/MenuManage"));
const ThreeBase = lazy(() => import("@/pages/Three/001"));
const ThreeBirds = lazy(() => import("@/pages/Three/002"));
const ThreeCamera = lazy(() => import("@/pages/Three/003"));
const ThreeHouse = lazy(() => import("@/pages/Three/004"));
const AntVX6WorkFlow = lazy(
  () => import("@/pages/WorkFlow/AntVX6WorkFlow/index")
);
// Suspense工厂函数
export function FactorySuspense({
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
// 侧边栏菜单路由
export const menuRouteArr = [
  {
    path: "/home",
    element: <FactorySuspense ele={Home} />,
    handle: {
      name: "首页",
      icon: <AppstoreOutlined />,
    },
    children: [],
  },
  // 系统管理
  {
    path: "/systemManage",
    handle: {
      name: "系统管理",
      icon: <ContainerOutlined />,
    },
    children: [
      {
        path: "userManage",
        element: <FactorySuspense ele={UserManage} />,

        handle: {
          name: "用户管理",
          icon: <DesktopOutlined />,
        },
      },
      {
        path: "roleManage",
        element: <FactorySuspense ele={RoleManage} />,
        handle: {
          name: "角色管理",
          icon: <MailOutlined />,
        },
      },
      {
        path: "menuManage",
        element: <FactorySuspense ele={MenuManage} />,
        handle: {
          name: "菜单管理",
          icon: <MenuFoldOutlined />,
        },
      },
    ],
  },
  // 技术研究
  {
    path: "/technicalStudy",
    element: <FactorySuspense ele={Hex} />,
    handle: {
      name: "技术研究",
      icon: <MenuUnfoldOutlined />,
    },
    children: [
      {
        path: "aggregatedHex",
        element: <FactorySuspense ele={Hex} />,
        handle: {
          name: "聚合蜂窝图",
          icon: <PieChartOutlined />,
        },
      },
    ],
  },
  // 流程图
  {
    path: "/workflow",
    handle: {
      name: "流程图",
      icon: <MenuUnfoldOutlined />,
    },
    children: [
      {
        path: "AntVX6",
        element: <FactorySuspense ele={AntVX6WorkFlow} />,
        handle: {
          name: "AntVX6版本",
          icon: <PieChartOutlined />,
        },
      },
    ],
  },
  // 三维
  {
    path: "/three",
    handle: {
      name: "三维",
      icon: <MenuUnfoldOutlined />,
    },
    children: [
      {
        path: "001",
        element: <FactorySuspense ele={ThreeBase} />,
        handle: {
          name: "001基础",
          icon: <PieChartOutlined />,
        },
      },
      {
        path: "002",
        element: <FactorySuspense ele={ThreeBirds} />,
        handle: {
          name: "002鸟",
          icon: <PieChartOutlined />,
        },
      },
      {
        path: "003",
        element: <FactorySuspense ele={ThreeCamera} />,
        handle: {
          name: "003相机",
          icon: <PieChartOutlined />,
        },
      },
      {
        path: "004",
        element: <FactorySuspense ele={ThreeHouse} />,
        handle: {
          name: "003房子",
          icon: <PieChartOutlined />,
        },
      },
    ],
  },
];

const initLangMenuTag = (arr: any[]): Record<string, string> => {
  let menuObj: Record<string, string> = {};
  arr.map((v) => {
    if (v.children && v.children.length > 0) {
      const newArr = initLangMenuTag(v.children);
      menuObj = { ...menuObj, ...newArr };
    }
    menuObj[v.path.replace("/", "")] = v.handle.name;
  });
  return menuObj;
};
export const langMenu = initLangMenuTag(menuRouteArr);

const initSideMenuItemsArr = (arr: any[], cb: (obj: any) => void) => {
  const menuArr: any[] = [];
  arr.map((v) => {
    const obj: Record<string, any> = {
      label: v.handle.name,
      key: v.path.replace("/", ""),
      icon: v.handle.icon,
    };
    if (v.children && v.children.length > 0) {
      const newArr = initSideMenuItemsArr(v.children, cb);
      obj.children = newArr;
    }

    cb(obj);
    menuArr.push(obj);
  });
  return menuArr;
};
export const initItems = (cb: (obj: any) => void): any[] => {
  const arr = initSideMenuItemsArr(menuRouteArr, cb);
  return arr;
};
