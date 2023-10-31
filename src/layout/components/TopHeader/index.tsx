import React, { useState } from "react";
import styles from "./index.module.less";
import { Breadcrumb, Badge, Space, MenuProps, Dropdown } from "antd";
import { useStore } from "@/store/index";
import {
  MenuFoldOutlined,
  BellOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
const TopHeader = () => {
  const { layout } = useStore();
  const [rotate, setRotate] = useState(180);
  const toogleRotate = () => {
    layout.setMenuJustIcon(!layout.menuJustIcon);
    setRotate(rotate === 180 ? 0 : 180);
  };
  const [bread, setBread] = useState([
    {
      title: "Home",
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: "An Application",
    },
  ]);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
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
            fontSize: "16px",
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
                fontSize: "16px",
                cursor: "pointer",
              }}
            />
          </Badge>
        </div>
        <div>
          <QuestionCircleOutlined
            style={{
              fontSize: "16px",
              cursor: "pointer",
            }}
          />
        </div>
        <div>
          <Dropdown menu={{ items }} placement="bottomLeft">
            <div className="flex items-center">
              <img
                src="https://th.bing.com/th/id/OIP.QXb0mLjpcyRvJERASa9QOQHaHa?pid=ImgDet&rs=1"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
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
