import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { Breadcrumb, Badge, Space, MenuProps, Dropdown } from "antd";
import { t } from "i18next";
import { useStore } from "@/store/index";
import {
  MenuFoldOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  GithubOutlined,
  UserOutlined,
  LogoutOutlined,
  TranslationOutlined,
  FontColorsOutlined,
  ItalicOutlined,
} from "@ant-design/icons";
import { langMenu } from "@/router/index";
import { useAntdI18n } from "@/i18n/antd";
const TopHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, layout } = useStore();
  const { locale } = useAntdI18n();
  const [rotate, setRotate] = useState(180);
  const toogleRotate = () => {
    layout.setMenuJustIcon(!layout.menuJustIcon);
    setRotate(rotate === 180 ? 0 : 180);
  };

  const [bread, setBread] = useState<any[]>();
  const getBread = () => {
    const arr = location.pathname.split("/");

    setBread(
      arr
        .filter((v) => {
          return v !== "home";
        })
        .map((v: string, i: number) => {
          if (i === 0) {
            return {
              title: t("首页"),
            };
          }
          return {
            title: t(langMenu[v as keyof typeof langMenu]),
          };
        })
    );
  };
  useEffect(() => {
    getBread();
  }, [location, locale]);
  const outLogin = () => {
    navigate("/login", { replace: true });
  };

  const changeLang = (lan: string) => {
    i18n.setLocal(lan);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <NavLink to="/personal">
          <UserOutlined />
          个人中心
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/wa-monster/yang-admin"
        >
          <GithubOutlined /> GitHub
        </a>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: (
        <span onClick={outLogin}>
          <LogoutOutlined /> 退出登录
        </span>
      ),
    },
  ];
  const langItems: MenuProps["items"] = [
    {
      key: "lang1",
      label: (
        <span onClick={() => changeLang("zh_CN")}>
          <ItalicOutlined />
          {t("切换中文")}
        </span>
      ),
    },
    {
      key: "lang2",
      label: (
        <span onClick={() => changeLang("en_US")}>
          <FontColorsOutlined />
          {t("切换英文")}
        </span>
      ),
    },
  ];
  return (
    <div className={styles.topHeader}>
      <div className="flex justify-center items-center">
        <MenuFoldOutlined
          className={styles.headerIcon}
          onClick={toogleRotate}
          rotate={rotate}
          style={{
            fontSize: "20px",
          }}
        />
      </div>
      <div className="flex justify-start items-center">
        <Breadcrumb items={bread}></Breadcrumb>
      </div>
      <div className="flex justify-end items-center pr-10 gap-8">
        <div>
          <Badge count={10} size="small" offset={[10, 0]} overflowCount={99}>
            <BellOutlined
              style={{
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
          </Badge>
        </div>
        <div>
          <QuestionCircleOutlined
            style={{
              fontSize: "20px",
              cursor: "pointer",
            }}
          />
        </div>
        <div>
          <Dropdown
            arrow={{ pointAtCenter: true }}
            menu={{ items: langItems }}
            placement="bottomLeft"
            trigger={["click"]}
          >
            <TranslationOutlined
              style={{
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
          </Dropdown>
        </div>
        <div>
          <Dropdown
            arrow={{ pointAtCenter: true }}
            menu={{ items }}
            trigger={["click"]}
            placement="bottom"
          >
            <div className="flex items-center cursor-pointer">
              <img
                src="https://th.bing.com/th/id/OIP.QXb0mLjpcyRvJERASa9QOQHaHa?pid=ImgDet&rs=1"
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              />
              <span>用户</span>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
