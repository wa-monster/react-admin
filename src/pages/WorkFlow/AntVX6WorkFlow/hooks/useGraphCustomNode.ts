import { Graph } from "@antv/x6";

export const useGraphCustomNode = () => {
  // 注册节点
  Graph.registerNode("custom-node", {});
};
