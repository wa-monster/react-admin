import { Loop } from "@/hooks/3d/system/Loop";
import { Resize } from "@/hooks/3d/system/Resizer";
import { createScene } from "@/hooks/3d/components/scene";
import { creatRenderer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";

import { loadGLTF } from "./loaderGLB/cube";
import { createLight2 } from "./light";
import { Color } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { degToRad } from "three/src/math/MathUtils";
export const initMain = async (id: string) => {
  const container = document.querySelector(id);
  const scene = createScene();
  const renderer = creatRenderer();
  const camera = createCamera();
  const houseCube = await loadGLTF();
  houseCube.scale.set(0.1, 0.1, 0.1);
  const {
    hemisphereLight,
    directionalLight1,
    directionalLight2,
    directionalLight3,
    directionalLight4,
    directionalLight5,
    directionalLight6,
  } = createLight2();
  scene.add(
    houseCube,
    hemisphereLight,
    directionalLight1,
    directionalLight2,
    // directionalLight3,
    directionalLight4,
    directionalLight5,
    directionalLight6
  );
  scene.background = new Color(0xbfe3dd);
  camera.position.set(50, 50, 50);
  if (container) {
    // 动画更新器
    const loop = new Loop(camera, scene, renderer);
    loop.updateAbles.push(houseCube);
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

    loop.start();
    // renderer.render(scene, camera);
  } else {
    throw Error("找不到元素");
  }
};
