import { DirectionalLight, AmbientLight, HemisphereLight } from "three";
export const createLight = () => {
  const dirLight = new DirectionalLight(0xffffff);
  dirLight.position.set(-3, 10, -10);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 10;
  dirLight.shadow.camera.bottom = -10;
  dirLight.shadow.camera.left = -10;
  dirLight.shadow.camera.right = 10;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 40;
  const huanj = new AmbientLight(0xffffff, 3);
  const hemiLight = new HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, 4, 0);

  return {
    huanj,
    light: dirLight,
    hemiLight,
  };
};
