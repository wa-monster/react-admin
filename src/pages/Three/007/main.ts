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
  renderer.outputEncoding = three.sRGBEncoding;
  const context = process.env.PUBLIC_URL;
  const textureLoader = new three.TextureLoader();

  // 地球
  const earthLoader = textureLoader.load(context + "/image/3d/earth/earth.jpg");
  const geometry = new three.SphereGeometry(2, 20, 20);
  const material = new three.MeshPhongMaterial({
    map: earthLoader,
    side: three.DoubleSide,
  });
  const earthMesh = new three.Mesh(geometry, material);
  earthMesh.position.set(0, 0, 0);
  scene.add(earthMesh);

  // 宇宙
  const starBgLoader = textureLoader.load(context + "/image/3d/earth/star.jpg");
  const geometryUniverse = new three.SphereGeometry(100, 20, 20);
  const materialUniverse = new three.MeshPhongMaterial({
    map: starBgLoader,
    side: three.DoubleSide,
  });
  const universeMesh = new three.Mesh(geometryUniverse, materialUniverse);
  universeMesh.position.set(0, 0, 0);
  scene.add(universeMesh);

  // 太远
  const sunBgLoader = textureLoader.load(context + "/image/3d/earth/sun.jpg");
  const geometrySun = new three.CircleGeometry(1, 20);
  const materialSun = new three.MeshBasicMaterial({
    map: sunBgLoader,
    side: three.DoubleSide,
  });
  const sunMesh = new three.Mesh(geometrySun, materialSun);
  sunMesh.rotation.y = three.MathUtils.degToRad(90);
  sunMesh.position.set(15, 5, 5);
  scene.add(sunMesh);
  // 光
  const light = new three.DirectionalLight(0xffffff, 1);
  light.position.set(15, 5, 5);
  scene.add(light);
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
