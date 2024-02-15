import { createRendererer } from "./components/renderer";
import { createScene } from "./components/scene";
import { createCamera } from "./components/camera";
import { createLight } from "./components/light";
import { createCube } from "./components/cube";

import { Resize } from "./system/Resizer";
import { Color } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export const use3DMain = (id: string) => {
  const scene = createScene();
  scene.background = new Color("red");
  const cube = createCube();
  const hemisphereLight = createLight();
  const camera = createCamera();
  scene.add(cube, hemisphereLight);

  const container = document.querySelector(id);
  if (container) {
    const renderer = createRendererer();
    container.append(renderer.domElement);
    const resize = new Resize(camera, renderer, container);
    resize.onResize = () => {
      renderer.render(scene, camera);
    };
    // 控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      renderer.render(scene, camera);
    });
    renderer.render(scene, camera);
  } else {
    throw new Error("未获取到canvas元素");
  }
};
