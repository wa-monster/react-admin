import React from "react";
import { Graph } from "@antv/x6";
import { useEffect } from "react";
import { register } from "@antv/x6-react-shape";
import { Dropdown } from "antd";
import { Snapline } from "@antv/x6-plugin-snapline";
import PanelItem from "./components/PanelItem";
import Styles from "./index.module.less";
import { Dnd } from "@antv/x6-plugin-dnd";
// 自定义的元素节点
const CustomComponent = ({ node }: { node: any }) => {
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
      <div className={Styles.customReactNode}>{label}</div>
    </Dropdown>
  );
};
// 注册自定义节点
register({
  shape: "custom-react-node",
  width: 100,
  height: 40,
  component: CustomComponent,
});
// 所有节点图形
const antvNode = {
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
};

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
let dnd: Dnd | undefined;
const AntvX6WorkFlow = () => {
  // 页面挂载完成
  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      graph = new Graph({
        container: container,
        autoResize: true,
        // width: 1400,
        // height: 400,
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

      // graph.zoomToFit({ maxScale: 1 });
      // Dnd 拖拽插件
      dnd = new Dnd({
        target: graph,
      });
      setTimeout(() => {
        graph?.centerContent(); // 将画布中元素居中展示
      }, 100);
    }
  }, []);

  // 拖拽生成节点
  const createRectNode = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    nodeType: keyof typeof antvNode
  ) => {
    if (graph) {
      // 创建节点
      const node = graph.createNode(antvNode[nodeType]);
      // 启动拖拽
      dnd?.start(node, e.nativeEvent);
    }
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
        <div className="h-8 flex items-center">流程节点</div>
        <div className="h-12 flex gap-2">
          <PanelItem
            onMouseDown={(e) => {
              createRectNode(e, "rect");
            }}
          >
            <div className={Styles.rectPanelItem}>矩形</div>
          </PanelItem>
          <PanelItem>
            <div className={Styles.circlePanelItem}>圆形</div>
          </PanelItem>
          {/* <PanelItem></PanelItem>
          <PanelItem></PanelItem>
          <PanelItem></PanelItem> */}
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
