import { PerspectiveCamera } from "three";
export const createCamera = () => {
  const fov = 75;
  const aspect = 1;
  const near = 0.1;
  const far = 100;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(5, 5, 20);
  camera.lookAt(0, 0, 0);
  return camera;
};
