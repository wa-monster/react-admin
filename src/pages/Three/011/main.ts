import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { Resize } from "@/hooks/3d/system/Resizer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as Three from "three";
const context = process.env.PUBLIC_URL;

const initMain = (id: string) => {
  const renderer = createRendererer();
  const camera = createCamera();
  const scene = createScene();
  const helper = new Three.AxesHelper(10);
  scene.add(helper);
  const container = document.querySelector(id);
  if (container) {
    const controls = new OrbitControls(camera, renderer.domElement);
    container.appendChild(renderer.domElement);
    const resize = new Resize(camera, renderer, container);
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }
};

export { initMain };
