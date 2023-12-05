import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { Breadcrumb, Badge, Popover, MenuProps, Dropdown, Tabs } from "antd";
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
import type { TabsProps } from "antd";
import UserJPG from "@/assets/img/user.jpg";
const UserIcon = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <img
        src={UserJPG}
        alt=""
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "10px",
          marginRight: "10px",
        }}
      />
      <span>{t("用户")}</span>
    </div>
  );
};
const TopHeaderMessageContent = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "未读",
      children: (
        <div className="flex items-center justify-around">
          <UserIcon></UserIcon>
          <div>今天的任务完成了吗？</div>
        </div>
      ),
    },
    {
      key: "2",
      label: "已读",
      children: "",
    },
    {
      key: "3",
      label: "全部",
      children: "",
    },
  ];
  return (
    <div style={{ width: "25%", minWidth: "250px" }}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
const TopHeaderMessage = () => {
  const [open, setOpen] = useState(false);

  const handleHoverChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={<TopHeaderMessageContent />}
      trigger="click"
      onOpenChange={handleHoverChange}
      open={open}
    >
      <Badge count={1} size="small" offset={[5, 0]} overflowCount={99}>
        <BellOutlined
          style={{
            fontSize: "20px",
            cursor: "pointer",
          }}
        />
      </Badge>
    </Popover>
  );
};

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
    localStorage.removeItem("token");
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
    <div className={styles.topHeader} style={{ userSelect: "none" }}>
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
          <TopHeaderMessage></TopHeaderMessage>
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
            <div>
              <UserIcon />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
