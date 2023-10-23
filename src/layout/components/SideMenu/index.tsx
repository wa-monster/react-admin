import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
function SideMenu() {
  type MenuItem = Required<MenuProps>["items"][number];
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem => {
    return {
      label,
      key,
      type,
      children,
      icon,
    };
  };
  const items = [
    getItem("首页", "1", <AppstoreOutlined />),
    getItem("系统管理", "2", <ContainerOutlined />, [
      getItem("用户管理", "2-1", <DesktopOutlined />),
      getItem("角色管理", "2-2", <MailOutlined />),
      getItem("菜单管理", "2-3", <MenuFoldOutlined />),
    ]),
    getItem("技术研究", "3", <MenuUnfoldOutlined />, [
      getItem("聚合蜂窝图", "3-1", <PieChartOutlined />),
    ]),
  ];
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        items={items}
      ></Menu>
    </div>
  );
}
export default SideMenu;
