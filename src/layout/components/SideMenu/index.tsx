import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { t } from "i18next";
import { useStore } from "@/store/index";
function SideMenu() {
  const navigate = useNavigate();
  const { layout } = useStore();
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
    getItem(t("首页"), "home", <AppstoreOutlined />),
    getItem(t("系统管理"), "systemManage", <ContainerOutlined />, [
      getItem(t("用户管理"), "userManage", <DesktopOutlined />),
      getItem(t("角色管理"), "roleManage", <MailOutlined />),
      getItem(t("菜单管理"), "menuManage", <MenuFoldOutlined />),
    ]),
    getItem(t("技术研究"), "technicalStudy", <MenuUnfoldOutlined />, [
      getItem(t("聚合蜂窝图"), "aggregatedHex", <PieChartOutlined />),
    ]),
  ];
  const selectMenu = ({ keyPath }: { keyPath: string[] }) => {
    const pathUrl = "/" + keyPath.reverse().join("/");
    // console.log(path);

    navigate(pathUrl);
  };
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      mode="inline"
      theme="dark"
      items={items}
      inlineCollapsed={layout.menuJustIcon}
      onSelect={(e) => selectMenu(e)}
    ></Menu>
  );
}
export default SideMenu;
