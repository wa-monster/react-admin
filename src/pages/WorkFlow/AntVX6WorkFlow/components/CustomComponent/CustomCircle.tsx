import React from "react";
import { Dropdown } from "antd";
import Styles from "./index.module.less";
// 自定义的元素节点
export const CustomCircle = ({ node }: { node: any }) => {
  const label = node.prop("label");
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "delete",
            label: "删除",
          },
        ],
      }}
      trigger={["contextMenu"]}
    >
      <div className={Styles.customCircleNode}>{label}</div>
    </Dropdown>
  );
};
