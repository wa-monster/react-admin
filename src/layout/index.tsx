import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.less";
import YangLogo from "@/components/YangLogo";
import YangIcon from "@/components/YangIcon";
import SideMenu from "./components/SideMenu";
import TopHeader from "./components/TopHeader";
import TopNavbar from "./components/TopNavbar";
import Setting from "./components/Setting";
import { theme } from "antd";
import type { GlobalToken } from "antd";
import { useStore, observer } from "@/store/index";
const { useToken } = theme;
interface propsType {
  token: GlobalToken;
}

// 左上Logo
function LayoutLogo(props: propsType) {
  return (
    <div className={styles.logo}>
      <div>
        <YangIcon className={styles.icon} fill={props.token.colorPrimary} />
      </div>
      <YangLogo
        width="200px"
        height="80px"
        styleObj={{ transform: "translateX(30px)" }}
      ></YangLogo>
    </div>
  );
}
// 右上Top
function LayoutTop() {
  return (
    <div className={styles.top}>
      <TopHeader></TopHeader>
      <TopNavbar></TopNavbar>
    </div>
  );
}
// 左下Menu
function LayoutMenu() {
  return (
    <div className={styles.menu}>
      <SideMenu></SideMenu>
    </div>
  );
}
function Layout() {
  const { token } = useToken();
  const { layout } = useStore();
  const containerStyleObj = {
    gridTemplateColumns: layout.menuJustIcon ? "80px 1fr" : "200px 1fr",
    gridTemplateAreas: layout.templateAreas,
  };
  //
  return (
    <div className={styles.container} style={containerStyleObj}>
      {layout.logoDisabled ? <LayoutLogo token={token}></LayoutLogo> : null}
      {layout.topDisabled ? <LayoutTop></LayoutTop> : null}
      {layout.menuDisabled ? <LayoutMenu></LayoutMenu> : null}
      <Setting></Setting>
      {/* 右下菜单 */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default observer(Layout);
