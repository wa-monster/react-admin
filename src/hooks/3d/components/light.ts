import { HemisphereLight } from "three";

export const createLight = () => {
  const hemisphereLight = new HemisphereLight("white", "blue", 5);
  return hemisphereLight;
};
