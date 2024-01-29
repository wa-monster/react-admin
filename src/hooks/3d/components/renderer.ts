import { WebGLRenderer } from "three";
export const creatRenderer = () => {
  const instance = new WebGLRenderer({ antialias: true });
  instance.physicallyCorrectLights = true;
  return instance;
};
