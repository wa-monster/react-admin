import { WebGLRenderer } from "three";
export const createRendererer = () => {
  const instance = new WebGLRenderer({ antialias: true });
  instance.physicallyCorrectLights = true;
  return instance;
};
