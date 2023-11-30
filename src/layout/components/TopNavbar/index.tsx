import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { observer, useStore } from "@/store/index";
import { t } from "i18next";
import {
  RedoOutlined,
  ScissorOutlined,
  CloseOutlined,
} from "@ant-design/icons";
const TagComponent = (props: any) => {
  const { v, pathname, onContextMenu } = props;
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
      onContextMenu={onContextMenu}
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
  const { tags, layout, theme } = useStore();
  useEffect(() => {
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
  const [isShowContextMenu, setShow] = useState(false);
  const [topLeft, setTopLeft] = useState([0, 0]);
  const [currentContextMenuTag, setCMTag] = useState<
    { pathname: string } & Record<string, any>
  >();
  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tag: { pathname: string } & Record<string, any>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    setCMTag(tag);
    setTopLeft([e.clientX, e.clientY]);
    setShow(true);
  };
  useEffect(() => {
    const clickMenu = () => {
      setShow(false);
    };
    document.addEventListener("click", clickMenu, false);
    document.addEventListener("contextmenu", clickMenu);
    return () => {
      document.removeEventListener("click", clickMenu);
      document.removeEventListener("contextmenu", clickMenu);
    };
  }, []);

  const reloadPage = () => {
    layout.setContentDisabled(false);
    setTimeout(() => {
      layout.setContentDisabled(true);
    }, 0);
  };
  const deleteSelf = () => {
    if (currentContextMenuTag) {
      tags.deleteTag(currentContextMenuTag);
      if (tags.openTags.length !== 0) {
        navigate(tags.openTags[tags.openTags.length - 1].pathname);
      } else {
        navigate("/home");
      }
    }
  };
  const deleteOther = () => {
    if (currentContextMenuTag) {
      tags.deleteOther(currentContextMenuTag);
      navigate(currentContextMenuTag.pathname);
    }
  };
  const deleteAll = () => {
    tags.deleteAll();
    navigate("/");
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
            onContextMenu={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              handleContextMenu(e, v)
            }
            onClick={() => clickToNavigate(v.pathname)}
            v={v}
            pathname={location.pathname}
            key={v.id}
          ></TagComponent>
        );
      })}
      {isShowContextMenu ? (
        <div
          className={styles.contextMenu}
          style={{
            left: topLeft[0] + "px",
            top: topLeft[1] + "px",
            backgroundColor: theme.colorPrimary,
          }}
        >
          <div onClick={() => reloadPage()} className={styles.contextMenuItem}>
            <span>
              <RedoOutlined />
            </span>
            <span> {t("刷新页面")}</span>
          </div>
          <div onClick={() => deleteSelf()} className={styles.contextMenuItem}>
            <span>
              <ScissorOutlined />
            </span>
            <span>{t("关闭当前")}</span>
          </div>
          <div onClick={() => deleteOther()} className={styles.contextMenuItem}>
            <span>
              <ScissorOutlined />
            </span>
            <span>{t("关闭其他")}</span>
          </div>
          <div onClick={() => deleteAll()} className={styles.contextMenuItem}>
            <span>
              <CloseOutlined />
            </span>
            <span>{t("全部关闭")}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default observer(TopNavbar);
