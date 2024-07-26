import { DirectionalLight, HemisphereLight } from "three";
export const createLight = () => {
  // const light1 = new DirectionalLight(0xffddcc, 5);
  // light1.position.set(5, 5, 0);
  // const light2 = new DirectionalLight(0xccccff, 5);
  // light2.position.set(-5, 5, 0);
  const light1 = new DirectionalLight(0xffffff, 1);
  light1.position.set(5, 5, 0);
  const light2 = new DirectionalLight(0xffffff, 1);
  light2.position.set(-5, 5, 0);
  // const hemisphereLight = new HemisphereLight(0xfff, 0xfff, 1);
  return {
    light1,
    light2,
    // hemisphereLight,
  };
};
