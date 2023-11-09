import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { observer, useStore } from "@/store/index";
import { t } from "i18next";
const TagComponent = (props: any) => {
  const { v, pathname } = props;
  const avc = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    console.log("1");
  };
  return (
    <div
      onClick={props.onClick}
      className={`${styles.tag} ${
        v.pathname === pathname ? styles.active : ""
      }`}
    >
      <span>{t(v.handle.name)}</span>
      <span onClick={(e) => avc(e)}>xxxxxxxxxxxxxx</span>
    </div>
  );
};
const TopNavbar = () => {
  const location = useLocation();
  const matches = useMatches();
  const navigate = useNavigate();
  const { tags } = useStore();

  useEffect(() => {
    console.log("matches", matches);
    const current = matches[matches.length - 1];
    if (current.pathname !== "/" && current.pathname !== "/home") {
      tags.setTags(current);
      return;
    }
    // if (location.pathname !== current.pathname) {
    //   navigate(current.pathname);
    // }
  }, [matches]);
  const clickToNavigate = (pathname: string) => {
    if (location.pathname !== pathname) {
      navigate(pathname);
    }
  };
  return (
    <div className={styles.topNavbar}>
      <TagComponent
        onClick={() => clickToNavigate("/home")}
        v={{
          pathname: "/home",
          handle: { name: "首页" },
        }}
        pathname={location.pathname}
        key="00-00"
      ></TagComponent>
      {tags.openTags.map((v) => {
        return (
          <TagComponent
            onClick={() => clickToNavigate(v.pathname)}
            v={v}
            pathname={location.pathname}
            key={v.id}
          ></TagComponent>
        );
      })}
    </div>
  );
};
export default observer(TopNavbar);
