import React from "react";
import { Graph } from "@antv/x6";
import { useEffect } from "react";
const data = {
  nodes: [
    {
      id: "node1",
      shape: "rect",
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
      shape: "rect",
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
const AntvX6WorkFlow = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      const graph = new Graph({
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
      graph.fromJSON(data); // 渲染元素
      graph.centerContent();
    }
  }, []);
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="grid grid-rows-[1fr_6fr_3fr] grid-cols-1  gap-3"
    >
      <div
        style={{ boxShadow: "0 0 10px #ccc" }}
        className="bg-white relative z-10"
      >
        11111111
      </div>
      <div style={{ width: "100%", boxShadow: "0 0 10px #ccc" }}>
        <div id="container"></div>
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
