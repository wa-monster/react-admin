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
import { t } from "i18next";
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
    getItem(t("dashboard"), "1", <AppstoreOutlined />),
    getItem(t("systemManage"), "2", <ContainerOutlined />, [
      getItem(t("userManage"), "2-1", <DesktopOutlined />),
      getItem(t("roleManage"), "2-2", <MailOutlined />),
      getItem(t("menuManage"), "2-3", <MenuFoldOutlined />),
    ]),
    getItem(t("technicalStudy"), "3", <MenuUnfoldOutlined />, [
      getItem(t("aggregatedHex"), "3-1", <PieChartOutlined />),
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
