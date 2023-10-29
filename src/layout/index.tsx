import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.less";
import YangLogo from "@/components/YangLogo";
import YangIcon from "@/components/YangIcon";
import SideMenu from "./components/SideMenu";
import TopHeader from "./components/TopHeader";
import TopNavbar from "./components/TopNavbar";
import { theme } from "antd";
import type { GlobalToken } from "antd";
import { useStore, observer } from "@/store/index";
import { layoutBoxObjType } from "@/store/modules/layout";
const { useToken } = theme;
interface propsType {
  token: GlobalToken;
}
interface propsType2 {
  layout: layoutBoxObjType;
}
function LayoutLogo(props: propsType) {
  return (
    <div className={styles.logo}>
      <div>
        <YangIcon className={styles.icon} fill={props.token.colorPrimary} />
      </div>
      <YangLogo
        width="200px"
        height="50px"
        styleObj={{ transform: "translateX(30px)" }}
      ></YangLogo>
    </div>
  );
}
function LayoutTop(props: propsType2) {
  return (
    <div
      className={styles.top}
      style={{
        gridColumn: props.layout.logoDisabled ? "auto" : "1 / span 2",
      }}
    >
      <TopHeader></TopHeader>
      <TopNavbar></TopNavbar>
    </div>
  );
}

function LayoutMenu(props: propsType2) {
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
  };
  //
  return (
    <div className={styles.container} style={containerStyleObj}>
      {layout.logoDisabled ? <LayoutLogo token={token}></LayoutLogo> : null}
      {layout.topDisabled ? <LayoutTop layout={layout}></LayoutTop> : null}
      {layout.menuDisabled ? <LayoutMenu layout={layout}></LayoutMenu> : null}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default observer(Layout);
