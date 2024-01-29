import { creatRenderer } from "@/hooks/3d/components/renderer";
import { createScene } from "@/hooks/3d/components/scene";
import { createCamera } from "@/hooks/3d/components/camera";
import { createLight } from "@/hooks/3d/components/light";
import { Resize } from "@/hooks/3d/system/Resizer";
import { Loop } from "@/hooks/3d/system/Loop";
import { loadGLTF } from "./birds/cube";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { AxesHelper } from "three";
export const useMain = async (id: string) => {
  const scene = createScene();
  const { Flamingo, Parrot, Stork } = await loadGLTF();
  const hemisphereLight = createLight();
  const camera = createCamera();
  scene.add(Flamingo, Parrot, Stork, hemisphereLight);

  const container = document.querySelector(id);
  if (container) {
    const renderer = creatRenderer();
    container.append(renderer.domElement);
    //更新器
    const loop = new Loop(camera, scene, renderer);
    loop.updateAbles.push(Flamingo, Parrot, Stork);

    // 自适应
    const resize = new Resize(camera, renderer, container);
    resize.onResize = () => {
      renderer.render(scene, camera);
    };
    // 控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      renderer.render(scene, camera);
    });
    // 辅助线
    const axesHelper = new AxesHelper(25);
    scene.add(axesHelper);

    renderer.render(scene, camera);
    loop.start();
  } else {
    throw new Error("未获取到canvas元素");
  }
};
