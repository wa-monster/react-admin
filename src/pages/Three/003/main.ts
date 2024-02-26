import { Loop } from "@/hooks/3d/system/Loop";
import { Resize } from "@/hooks/3d/system/Resizer";
import { createScene } from "@/hooks/3d/components/scene";
import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";

import { loadGLTF } from "./cameraCube/cube";
import { createCube } from "./cube";
import { createLight2 } from "./light";
import { Color } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export const initMain = async (id: string) => {
  const container = document.querySelector(id);
  const scene = createScene();
  const renderer = createRendererer();
  const camera = createCamera();
  const cube = createCube();
  const cameraCube = await loadGLTF();
  const {
    hemisphereLight,
    ambientLight,
    directionalLight1,
    directionalLight2,
    directionalLight3,
    directionalLight4,
    directionalLight5,
    directionalLight6,
  } = createLight2();
  scene.add(
    cameraCube,
    cube,
    hemisphereLight,
    ambientLight,
    directionalLight1,
    directionalLight2,
    // directionalLight3,
    directionalLight4,
    directionalLight5,
    directionalLight6
  );
  scene.background = new Color("0xfff");
  camera.position.set(3, 3, 3);
  if (container) {
    // 控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      renderer.render(scene, camera);
    });
    // 自适应
    const resize = new Resize(camera, renderer, container);
    resize.onResize = () => {
      renderer.render(scene, camera);
    };
    container.append(renderer.domElement);
    renderer.render(scene, camera);
    return {
      renderer,
    };
  } else {
    throw Error("找不到元素");
  }
};
