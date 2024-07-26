import React from "react";
import { register } from "@antv/x6-react-shape";
import { CustomRect } from "./CustomRect";
import { CustomCircle } from "./CustomCircle";
// 这里会注册所有自己定义好的节点，然后返回出去一个 antvNode 对象

// 注册自定义节点
register({
  shape: "custom-react-node",
  component: CustomRect,
});

// 注册自定义节点
register({
  shape: "custom-circle-node",
  component: CustomCircle,
});

// 所有可以拖拽的节点图形
export const antvNode = {
  rect: {
    shape: "custom-react-node",
    width: 100,
    height: 40,
    label: "矩形",
    attrs: {
      // body 是选择器名称，选中的是 rect 元素
      body: {
        stroke: "#8f8f8f",
        strokeWidth: 1,
      },
    },
  },
  circle: {
    shape: "custom-circle-node",
    width: 40,
    height: 40,
    label: "圆形",
    attrs: {
      // body 是选择器名称，选中的是 rect 元素
      body: {
        stroke: "#8f8f8f",
        strokeWidth: 1,
      },
    },
  },
};
