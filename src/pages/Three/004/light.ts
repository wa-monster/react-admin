import {
  HemisphereLight,
  PointLight,
  AmbientLight,
  DirectionalLight,
} from "three";

export const createLight2 = () => {
  const hemisphereLight = new HemisphereLight("white", "blue", 15);
  // const pointLight = new PointLight("white", 15);
  // const pointLight2 = new PointLight("white", 15);
  // const ambientLight = new AmbientLight("0x274d3d", 50);
  const directionalLight1 = new DirectionalLight("0xfff", 10);
  const directionalLight2 = new DirectionalLight("0xfff", 1);
  const directionalLight3 = new DirectionalLight("0xfff", 1);
  const directionalLight4 = new DirectionalLight("0xfff", 1);
  const directionalLight5 = new DirectionalLight("0xfff", 1);
  const directionalLight6 = new DirectionalLight("0xfff", 1);
  // pointLight.position.set(0, 5, 0);
  // pointLight2.position.set(0, -5, 0);
  directionalLight1.position.set(0, 15, 0);
  directionalLight2.position.set(15, 0, 0);
  directionalLight3.position.set(0, -15, 0);
  directionalLight4.position.set(-15, 0, 0);
  directionalLight5.position.set(0, 0, 15);
  directionalLight6.position.set(0, 0, -15);
  return {
    hemisphereLight,
    // pointLight,
    // pointLight2,
    // ambientLight,
    directionalLight1,
    directionalLight2,
    directionalLight3,
    directionalLight4,
    directionalLight5,
    directionalLight6,
  };
};
