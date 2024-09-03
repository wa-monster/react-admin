import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { Resize } from "@/hooks/3d/system/Resizer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as three from "three";
const initMain = (id: string) => {
  const scene = createScene();
  const camera = createCamera();
  camera.position.set(0, 0, 10);
  const renderer = createRendererer();

  const context = process.env.PUBLIC_URL;
  const textureLoader = new three.TextureLoader();
  const earthLoader = textureLoader.load(context + "/image/3d/earth.jpg");
  const starBgLoader = textureLoader.load(context + "/image/3d/star-bg.jpg");
  scene.background = starBgLoader;

  // const geometry = new three.BoxBufferGeometry(50, 12, 12);
  const geometry = new three.SphereGeometry(2, 20, 20);
  const material = new three.MeshBasicMaterial({
    // color: 0xff0000,
    map: earthLoader,
  });

  const mesh = new three.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  // const light = new three.DirectionalLight(10);

  // light.position.set(5, 5, 5);
  // scene.add(light);
  const container = document.querySelector(id);
  // const axesHelper = new three.AxesHelper(50);
  // scene.add(axesHelper);
  if (container) {
    const resize = new Resize(camera, renderer, container);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.addEventListener("change", () => {
    //   renderer.render(scene, camera);
    // });

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  } else {
    throw new Error("未查询到元素");
  }
};

export default initMain;
