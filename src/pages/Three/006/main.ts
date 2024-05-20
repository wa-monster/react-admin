import { Loop } from "@/hooks/3d/system/Loop";
import { Resize } from "@/hooks/3d/system/Resizer";
import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { createCube as creaC1 } from "@/hooks/3d/components/cube";
import { createLight } from "./light";
import { createCube } from "./loaderGLB/cube";
import {
  AxesHelper,
  Color,
  Fog,
  Mesh,
  PlaneGeometry,
  MeshPhongMaterial,
  PCFSoftShadowMap,
  sRGBEncoding,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export const initMain = async (id: string) => {
  // camera
  const camera = createCamera();
  camera.position.set(3, 6, -10);
  camera.lookAt(0, 1, 0);
  // light
  const { huanj, light, hemiLight } = createLight();

  const cube = await creaC1();
  cube.scale.set(0.5, 0.5, 0.5);
  cube.position.set(3, 3, 3);
  cube.castShadow = true;
  const { cube1, cube2, cube3 } = await createCube();
  // scene
  const scene = createScene();
  scene.background = new Color(0xa0a0a0);
  // scene.fog = new Fog(0xa0a0a0, 10, 22);

  const groundMesh = new Mesh(
    new PlaneGeometry(40, 40),
    new MeshPhongMaterial({
      color: 0x999999,
      depthWrite: false,
    })
  );

  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.receiveShadow = true;

  // scene.add(cube, groundMesh, light);
  scene.add(cube1, cube2, cube3, cube, groundMesh, light);
  const container = document.querySelector(id);
  if (container) {
    const renderer = createRendererer();
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = sRGBEncoding;
    renderer.shadowMap.type = PCFSoftShadowMap;
    container.append(renderer.domElement);

    const axesHelper = new AxesHelper(25);
    scene.add(axesHelper);
    const controls = new OrbitControls(camera, renderer.domElement);

    const loop = new Loop(camera, scene, renderer);

    loop.updateAbles.push(cube1, cube2, cube3);

    const resize = new Resize(camera, renderer, container);
    resize.onResize = () => {
      renderer.render(scene, camera);
    };
    renderer.render(scene, camera);
    loop.start();
    return {
      renderer,
      loop,
    };
  } else {
    throw new Error("未查询到元素");
  }
};
