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
    getItem(t("home"), "home", <AppstoreOutlined />),
    getItem(t("systemManage"), "systemManage", <ContainerOutlined />, [
      getItem(t("userManage"), "userManage", <DesktopOutlined />),
      getItem(t("roleManage"), "roleManage", <MailOutlined />),
      getItem(t("menuManage"), "menuManage", <MenuFoldOutlined />),
    ]),
    getItem(t("technicalStudy"), "technicalStudy", <MenuUnfoldOutlined />, [
      getItem(t("aggregatedHex"), "aggregatedHex", <PieChartOutlined />),
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
