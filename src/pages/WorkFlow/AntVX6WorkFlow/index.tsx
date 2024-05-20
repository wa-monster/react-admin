import React from "react";
import { Graph } from "@antv/x6";
import { useEffect } from "react";
import { register } from "@antv/x6-react-shape";
import { Dropdown } from "antd";
import { Snapline } from "@antv/x6-plugin-snapline";
import PanelItem from "./components/PanelItem";
import Styles from "./index.module.less";

// 自定义的元素节点
const CustomComponent = ({ node }: { node: any }) => {
  const label = node.prop("label");
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "copy",
            label: "复制",
          },
          {
            key: "delete",
            label: "删除",
          },
        ],
      }}
      trigger={["contextMenu"]}
    >
      <div className={Styles.customReactNode}>{label}</div>
    </Dropdown>
  );
};
register({
  shape: "custom-react-node",
  width: 100,
  height: 40,
  component: CustomComponent,
});
const data = {
  nodes: [
    {
      id: "node1",
      shape: "custom-react-node",
      x: 240,
      y: 240,
      width: 100,
      height: 40,
      label: "hello",
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
          fill: "#fff",
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: "node2",
      shape: "custom-react-node",
      x: 360,
      y: 380,
      width: 100,
      height: 40,
      label: "world",
      attrs: {
        body: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
          fill: "#fff",
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: "edge",
      source: "node1",
      target: "node2",
      label: "x6",
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
        },
      },
    },
  ],
};
let graph: Graph | undefined;
const AntvX6WorkFlow = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      graph = new Graph({
        container: container,
        autoResize: true,
        width: 800,
        height: 800,
        background: {
          color: "#F2F7FA",
        },
        grid: {
          visible: true,
          type: "doubleMesh",
          args: [
            {
              color: "#eee", // 主网格线颜色
              thickness: 1, // 主网格线宽度
            },
            {
              color: "#ddd", // 次网格线颜色
              thickness: 1, // 次网格线宽度
              factor: 4, // 主次网格线间隔
            },
          ],
        },
        panning: true,
        mousewheel: true,
      });
      graph.use(new Snapline({ enabled: true }));
      graph.fromJSON(data); // 渲染元素
      graph.centerContent();
    }
  }, []);

  const createRectNode = (e: any) => {
    console.log("111111");

    data.nodes.push({
      id: "node1",
      shape: "custom-react-node",
      x: 250,
      y: 250,
      width: 100,
      height: 40,
      label: "hello222",
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
          fill: "#fff",
          rx: 6,
          ry: 6,
        },
      },
    });
    graph?.fromJSON(data); // 渲染元素
  };

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="grid grid-rows-[6rem_1fr_12rem] grid-cols-1  gap-3"
    >
      <div
        style={{ boxShadow: "0 0 10px #ccc" }}
        className="bg-white relative z-10 p-2"
      >
        <div className="h-8 flex items-center">节点</div>
        <div className="h-12 flex gap-2">
          <PanelItem
            onClick={(e) => {
              console.log("createRectNode", createRectNode);

              createRectNode(e);
            }}
          >
            <div className={Styles.rectPanelItem}>节点</div>
          </PanelItem>
          <PanelItem></PanelItem>
          <PanelItem></PanelItem>
          <PanelItem></PanelItem>
          <PanelItem></PanelItem>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          overflow: "hidden",
          boxShadow: "0 0 10px #ccc",
        }}
      >
        <div className="w-full h-full relative">
          <div id="container"></div>
        </div>
      </div>

      <div
        style={{ boxShadow: "0 0 10px #ccc" }}
        className="bg-white relative z-10"
      >
        22222222222
      </div>
    </div>
  );
};

export default AntvX6WorkFlow;
