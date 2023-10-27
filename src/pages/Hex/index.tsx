import React from "react";
import { useEffect } from "react";
import { pointInHex, renderHex, initHexData, hexDataOBjType } from "./hex";
import { citiesData } from "./point";
import "@amap/amap-jsapi-types";
import styles from "./index.module.less";
const Hex = () => {
  function calc1(hexDataOBj: hexDataOBjType, map: any) {
    const points = citiesData.map(function (point) {
      const { x, y } = point;
      const lnglat = new AMap.LngLat(Number(x), Number(y));
      const pixel = map.lngLatToContainer(lnglat);
      return {
        ...pixel,
        name: point.name,
      };
    });
    hexDataOBj.pointsArr = points;
  }
  //
  function init() {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    console.log("canvas", canvas);

    const container = document.querySelector("#container") as HTMLCanvasElement;
    canvas.setAttribute("width", "" + container.clientWidth);
    canvas.setAttribute("height", "" + container.clientHeight);
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    // 初始化蜂窝图
    // 地图
    const AMap = window.AMap;
    const map = new AMap.Map("container", {
      viewMode: "2D", // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D'
      zoom: 3, // 初始化地图层级
      center: [116.397428, 39.90923], // 初始化地图中心点
    });
    const hexDataOBj = initHexData(canvas, 20);
    // 点
    calc1(hexDataOBj, map);
    // 渲染
    render(hexDataOBj, canvas, ctx as CanvasRenderingContext2D);
    // 渲染
    function render(
      hexDataOBj: hexDataOBjType,
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D
    ) {
      hexDataOBj.showHexPointsMap = pointInHex(hexDataOBj);
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      renderHex(ctx, hexDataOBj);
    }

    // 缩放
    function mapZoomend() {
      // var zoom = map.getZoom(); //获取当前地图级别
      // console.log('获取当前地图级别',zoom);
      calc1(hexDataOBj, map);
      render(hexDataOBj, canvas, ctx);
    }
    map.on("zoomend", mapZoomend);
    map.on("moveend", mapZoomend);
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div id="container" className={styles.container}></div>
      <canvas id="canvas" className={styles.canvas}></canvas>
    </>
  );
};
export default Hex;
