import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { setModel } from "./setModel";
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
const baseUrl = process.env.PUBLIC_URL;
const loadGLTF = async () => {
  dracoLoader.setDecoderPath(baseUrl + "/draco/");
  gltfLoader.setDRACOLoader(dracoLoader);
  const cameraData = await gltfLoader.loadAsync(
    baseUrl + "/models/camera/camera.glb"
  );
  const camera = setModel(cameraData);
  return camera;
};

export { loadGLTF };
