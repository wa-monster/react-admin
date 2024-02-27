import { PerspectiveCamera } from "three";
export const createCamera = () => {
  const fov = 45;
  const aspect = 1;
  const near = 1;
  const far = 100000000;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(5, 5, 20);
  camera.lookAt(0, 0, 0);
  return camera;
};
