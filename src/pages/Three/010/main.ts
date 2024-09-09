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
  camera.position.set(1, 0, 0);
  const scene = createScene();
  const geometry = new Three.BoxGeometry(10, 10, 10);
  const imgArr = ["left", "right", "top", "bottom", "front", "back"];

  const boxGeometry = new Three.BoxGeometry(10, 10, 10);
  const boxMaterials: any[] = [];
  imgArr.forEach((item) => {
    const texture = new Three.TextureLoader().load(
      context + `/image/3d/home360/${item}.png`
    );
    boxMaterials.push(new Three.MeshBasicMaterial({ map: texture }));
  });
  const box = new Three.Mesh(boxGeometry, boxMaterials);
  box.geometry.scale(1, 1, -1);
  scene.add(box);

  const texture = new Three.TextureLoader().load(
    context + `/image/3d/home360/scene-bg.jpg`
  );
  texture.mapping = Three.EquirectangularReflectionMapping;
  // texture.colorSpace = Three.SRGBColorSpace;
  // texture.colorSpace = Three.SRGBColorSpace;
  scene.background = texture;

  // const helper = new Three.AxesHelper(10);
  // scene.add(helper);

  const container = document.querySelector(id);
  if (container) {
    const resize = new Resize(camera, renderer, container);
    const controls = new OrbitControls(camera, renderer.domElement);
    container.appendChild(renderer.domElement);
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }
};

export { initMain };
