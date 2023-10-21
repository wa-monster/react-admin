import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.less";
import YangLogo from "@/components/YangLogo";
function Layout() {
  console.log("111");

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <YangLogo></YangLogo>
      </div>
      <div className={styles.top}></div>
      <div className={styles.menu}></div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
