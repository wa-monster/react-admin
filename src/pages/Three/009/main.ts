import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { Resize } from "@/hooks/3d/system/Resizer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as Three from "three";
const context = process.env.PUBLIC_URL;
let videoEl: undefined | HTMLVideoElement;
const initMain = (id: string) => {
  const renderer = createRendererer();
  const camera = createCamera();
  camera.position.set(1, 0, 0);
  camera.lookAt(0, 0, -10);
  const scene = createScene();

  videoEl = document.createElement("video");
  videoEl.preload = "auto";
  videoEl.src = context + "/image/3d/video360/video.mp4";

  const geometry = new Three.SphereGeometry(50, 100, 100);
  const texture = new Three.VideoTexture(videoEl);
  // const material = new Three.MeshBasicMaterial({
  //   color: new Three.Color(0xff0000),
  // });
  const material = new Three.MeshBasicMaterial({
    map: texture,
    side: Three.DoubleSide,
  });
  const mesh = new Three.Mesh(geometry, material);
  scene.add(mesh);

  // const helper = new Three.AxesHelper(100);
  // scene.add(helper);
  const container = document.querySelector(id);
  if (container) {
    const resize = new Resize(camera, renderer, container);
    container.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }
};
const toggleVideo = (status: boolean) => {
  if (videoEl) {
    if (status) {
      videoEl.play();
    } else {
      videoEl.pause();
    }
  }
};
export { initMain, toggleVideo };
