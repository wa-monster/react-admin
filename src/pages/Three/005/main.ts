import { Loop } from "@/hooks/3d/system/Loop";
import { Resize } from "@/hooks/3d/system/Resizer";
import { createRendererer } from "@/hooks/3d/components/renderer";
import { createScene } from "@/hooks/3d/components/scene";
import { createCamera } from "@/hooks/3d/components/camera";
import { createCube } from "@/hooks/3d/components/cube";

import { createLight } from "./light";
import { loadPerson } from "./loaderGLB/cube";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Color, MeshStandardMaterial } from "three";
export const initMain = async (id: string) => {
  const renderer = createRendererer();
  const scene = createScene();
  scene.background = new Color(0x000);
  const camera = createCamera();
  const cube = createCube();
  cube.material = new MeshStandardMaterial({
    color: 0xffffff,
  });
  const personCube = await loadPerson();
  const { light1, light2 } = createLight();
  // scene.add(personCube, light1, light2);
  scene.add(personCube, light1, light2);
  const container = document.querySelector(id);
  if (container) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      renderer.render(scene, camera);
    });

    const resizer = new Resize(camera, renderer, container);
    resizer.onResize = () => {
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
