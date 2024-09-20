import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { Resize } from "@/hooks/3d/system/Resizer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as Three from "three";
const context = process.env.PUBLIC_URL;
const renderer = createRendererer();

renderer.outputEncoding = Three.sRGBEncoding;
const camera = createCamera();
camera.position.set(0, 5, 10);

const createLight = (scene: Three.Scene) => {
  const light = new Three.AmbientLight(0x404040, 10);
  scene.add(light);
  const light2 = new Three.DirectionalLight(0xffffff, 1);
  light.position.set(0, 10, 5);
  scene.add(light2);
  const light3 = new Three.DirectionalLight(0xffffff, 1);
  light.position.set(0, -10, -5);
  scene.add(light3);
};
const createGameScene = () => {
  const scene = createScene();
  const textureLoader = new Three.TextureLoader();
  const bg = textureLoader.load(
    context + "/models/hurdlesGame/bg.jpeg",
    function (texture) {
      scene.background = texture;
    }
  );
  return scene;
};
const initMain = (id: string) => {
  const scene = createGameScene();
  createLight(scene);

  // 创建全局模型对象，用于储存全部模型
  const global = {
    characterGroup: new Three.Group(), // 人物组，用于控制人物朝向和位置
    hurdleGroup: new Three.Group(), //  跨栏组，用于控制跨栏位置
    hurdleArr: [] as Three.Group[], //跨栏数组
    trackGroup: new Three.Group(), // 跑道组，用于控制跑道位置
    trackArr: [] as Three.Group[], //跑道数组
    actions: {}, //人物动作合集idle: 待机、running: 跑步、jump: 跳跃、death: 死亡
    currentAction: null, //当前动作，
    previousAction: null, //上一次动作
  };
  const gltfLoader = new GLTFLoader();
  gltfLoader.load(context + "/models/hurdlesGame/group.glb", (gltf) => {
    const children = [...gltf.scene.children];
    console.log("children", children);
    // 初始化角色
    global.characterGroup.add(children[0]);
    global.characterGroup.rotation.set(0, Math.PI / 2, 0);
    scene.add(global.characterGroup);
    console.log("children2", children);
    // 初始化跨栏
    global.hurdleGroup.add(children[2]);
    global.hurdleGroup.rotation.set(0, Math.PI / 2, 0);
    global.hurdleGroup.position.set(3, 0, 0);
    global.hurdleArr.push(global.hurdleGroup);
    scene.add(global.hurdleGroup);
    // 初始化跑道
    global.trackGroup.add(children[1]);
    global.trackGroup.rotation.set(0, Math.PI / 2, 0);
    scene.add(global.trackGroup);
    console.log("children3", children);
  });

  // const helper = new Three.AxesHelper(10);
  // scene.add(helper);
  const container = document.querySelector(id);
  if (container) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;
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
