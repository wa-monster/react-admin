import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { Resize } from "@/hooks/3d/system/Resizer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import * as Three from "three";
import dat from "dat.gui";
import { count } from "console";
const context = process.env.PUBLIC_URL;
let pointMesh: ReturnType<typeof createRain>;
const createRain = (
  count: number,
  size: number,
  transparent: boolean,
  opacity: number,
  sizeAttenuation: boolean
) => {
  const position: Float32Array = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    position[i] = (Math.random() - 0.5) * 500;
  }
  const geometry = new Three.BufferGeometry();
  geometry.setAttribute("position", new Three.BufferAttribute(position, 3));
  const rainPng = new Three.TextureLoader().load(
    context + "/image/3d/rain/rain.png"
  );
  const pointMaterial = new Three.PointsMaterial({
    map: rainPng,
    alphaMap: rainPng,
    size: size,
    transparent: transparent,
    opacity: opacity,
    vertexColors: false, // 顶点着色
    sizeAttenuation: sizeAttenuation, // 指定点的大小是否因相机深度而衰减
    color: 0xededed, // 颜色
    depthTest: true, // 渲染此材质时启用深度测试
    depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响
    blending: Three.AdditiveBlending, // 材质混合模式
  });

  const pointMesh1 = new Three.Points(geometry, pointMaterial);
  return pointMesh1;
};
// 创建gui
const createGui = (scene: Three.Scene) => {
  const gui = new dat.GUI();
  const guiConfig = {
    count: 260,
    size: 10,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
  };

  const reDraw = () => {
    if (pointMesh) {
      scene.remove(pointMesh);
    }
    pointMesh = createRain(
      guiConfig.count,
      guiConfig.size,
      guiConfig.transparent,
      guiConfig.opacity,
      guiConfig.sizeAttenuation
    );
    scene.add(pointMesh);
  };
  gui.add(guiConfig, "count", 10, 1000).onChange(() => reDraw());
  gui.add(guiConfig, "size", 1, 20).onChange(() => reDraw());
  gui.add(guiConfig, "transparent").onChange(() => reDraw());
  gui.add(guiConfig, "opacity", 0.1, 1).onChange(() => reDraw());
  gui.add(guiConfig, "sizeAttenuation").onChange(() => reDraw());
  reDraw();

  gui.domElement.style.cssText = "position:absolute;top:100px;right:20px";
  return () => {
    return {
      pointMesh,
      gui,
      guiConfig,
    };
  };
};

const initMain = (id: string) => {
  const renderer = createRendererer();
  const camera = createCamera();
  const scene = createScene();
  scene.background = new Three.Color(0x000000);

  const getMesh = createGui(scene);
  const obj = getMesh();

  const helper = new Three.AxesHelper(10);
  scene.add(helper);
  const container = document.querySelector(id);
  if (container) {
    const controls = new OrbitControls(camera, renderer.domElement);
    const stats = Stats();

    container.appendChild(renderer.domElement);
    container.appendChild(stats.dom);

    const resize = new Resize(camera, renderer, container);
    const animate = () => {
      // reDraw();
      const positionArr = (pointMesh.geometry.getAttribute("position") as any)
        .array;
      for (let i = 0; i < obj.guiConfig.count * 3; i += 3) {
        positionArr[i + 1] = positionArr[i + 1] - (Math.random() * 0.5 + 1);
        if (positionArr[i + 1] < -240) {
          positionArr[i + 1] = 240;
        }
      }
      pointMesh.geometry.getAttribute("position").needsUpdate = true;

      controls.update();
      renderer.render(scene, camera);
      stats.update();
      requestAnimationFrame(animate);
    };
    animate();
  }
};

export { initMain };
