import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.less";
import YangLogo from "@/components/YangLogo";
import YangIcon from "@/components/YangIcon";
import SideMenu from "./components/SideMenu";
import TopHeader from "./components/TopHeader";
import TopNavbar from "./components/TopNavbar";
import { theme } from "antd";
const { useToken } = theme;
function Layout() {
  const { token } = useToken();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div>
          <YangIcon className={styles.icon} fill={token.colorPrimary} />
        </div>
        <YangLogo
          width="200px"
          height="50px"
          styleObj={{ transform: "translateX(30px)" }}
        ></YangLogo>
      </div>
      <div className={styles.top}>
        <TopHeader></TopHeader>
        <TopNavbar></TopNavbar>
      </div>
      <div className={styles.menu}>
        <SideMenu></SideMenu>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
