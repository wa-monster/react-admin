import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { Resize } from "@/hooks/3d/system/Resizer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as Three from "three";
const context = process.env.PUBLIC_URL;

const initMain = (id: string) => {
  const renderer = createRendererer();
  const camera = createCamera();
  const scene = createScene();
  scene.background = new Three.Color(0x000000);

  const geometry = new Three.BoxBufferGeometry(2, 2, 2);
  const material = new Three.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new Three.Mesh(geometry, material);
  scene.add(mesh);

  const gltfLoader = new GLTFLoader();
  gltfLoader.load(context + "/models/machineRoom/machineRoom.gltf", (gltf) => {
    console.log(gltf);
    const model = gltf.scene;
    scene.add(model);
  });

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
      controls.update();
      renderer.render(scene, camera);
      stats.update();
      requestAnimationFrame(animate);
    };
    animate();
  }
};

export { initMain };
