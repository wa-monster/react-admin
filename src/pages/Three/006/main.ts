import { Loop } from "@/hooks/3d/system/Loop";
import { Resize } from "@/hooks/3d/system/Resizer";
import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
// import { createCube } from "@/hooks/3d/components/cube";
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
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export const initMain = async (id: string) => {
  const camera = createCamera();
  camera.position.set(1, 2, -4);
  camera.lookAt(0, 0, 0);
  const { cube1, cube2, cube3 } = await createCube();
  const scene = createScene();
  scene.background = new Color(0xa0a0a0);
  scene.fog = new Fog(0xa0a0a0, 10, 22);
  const { huanj, light, hemiLight } = createLight();

  const groundMesh = new Mesh(
    new PlaneGeometry(40, 40),
    new MeshPhongMaterial({
      color: 0x999999,
      depthWrite: false,
    })
  );

  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.receiveShadow = true;

  scene.add(cube1, cube2, cube3, groundMesh, light);
  const container = document.querySelector(id);
  if (container) {
    const renderer = createRendererer();
    renderer.shadowMap.enabled = true;
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
    };
  } else {
    throw new Error("未查询到元素");
  }
};
