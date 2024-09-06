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
const ThreePerson = lazy(() => import("@/pages/Three/005"));
const WalkPerson = lazy(() => import("@/pages/Three/006"));
const EarthGl = lazy(() => import("@/pages/Three/007"));
const SeniorEarth = lazy(() => import("@/pages/Three/008"));
const Video360 = lazy(() => import("@/pages/Three/009"));
const LookHouse = lazy(() => import("@/pages/Three/010"));
const AntVX6WorkFlow = lazy(
  () => import("@/pages/WorkFlow/AntVX6WorkFlow/index")
);
const AntVX6Example = lazy(
  () => import("@/pages/WorkFlow/AntVX6Example/index")
);

const Gallery = lazy(() => import("@/pages/Beauty/Gallery/index"));
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
      {
        path: "AntVX6Example",
        element: <FactorySuspense ele={AntVX6Example} />,
        handle: {
          name: "AntVX6例子",
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
          name: "004房子",
          icon: <PieChartOutlined />,
        },
      },
      {
        path: "005",
        element: <FactorySuspense ele={ThreePerson} />,
        handle: {
          name: "005人",
          icon: <PieChartOutlined />,
        },
      },
      {
        path: "006",
        element: <FactorySuspense ele={WalkPerson} />,
        handle: {
          name: "006行走的人",
          icon: <PieChartOutlined />,
        },
      },
      {
        path: "007",
        element: <FactorySuspense ele={EarthGl} />,
        handle: {
          name: "007地球",
          icon: <PieChartOutlined />,
        },
      },

      {
        path: "008",
        element: <FactorySuspense ele={SeniorEarth} />,
        handle: {
          name: "008高级地球",
          icon: <PieChartOutlined />,
        },
      },
      {
        path: "009",
        element: <FactorySuspense ele={Video360} />,
        handle: {
          name: "009全景视频",
          icon: <PieChartOutlined />,
        },
      },
      {
        path: "010",
        element: <FactorySuspense ele={LookHouse} />,
        handle: {
          name: "010全景看房",
          icon: <PieChartOutlined />,
        },
      },
    ],
  },
  // 好看的
  {
    path: "/beauty",
    handle: {
      name: "好看的页面",
      icon: <MenuUnfoldOutlined />,
    },
    children: [
      {
        path: "gallery",
        element: <FactorySuspense ele={Gallery} />,
        handle: {
          name: "画廊",
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
