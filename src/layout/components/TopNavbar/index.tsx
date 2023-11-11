import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { observer, useStore } from "@/store/index";
import { t } from "i18next";

const TagComponent = (props: any) => {
  const { v, pathname } = props;
  const navigate = useNavigate();
  const { tags, theme } = useStore();

  const closeTag = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    v: { pathname: string }
  ) => {
    e.stopPropagation();
    tags.deleteTag(v);
    if (v.pathname === pathname) {
      if (tags.openTags.length !== 0) {
        navigate(tags.openTags[tags.openTags.length - 1].pathname);
      } else {
        navigate("/home");
      }
    }
    console.log("1");
  };
  return (
    <div
      onClick={props.onClick}
      className={`${styles.tag} ${
        v.pathname === pathname ? styles.active : ""
      }`}
      style={{
        backgroundColor: v.pathname === pathname ? theme.colorPrimary : "",
      }}
    >
      <span style={{ whiteSpace: "nowrap" }}>{t(v.handle.name)}</span>
      {v.pathname !== "/home" ? (
        <span className={styles.closeTag} onClick={(e) => closeTag(e, v)}>
          x
        </span>
      ) : null}
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
  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("111111");
  };
  return (
    <div
      onContextMenu={(e) => handleContextMenu(e)}
      className={styles.topNavbar}
    >
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
