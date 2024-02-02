import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { setModel } from "./setModel";
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
const baseUrl = process.env.PUBLIC_URL;
const loadGLTF = async () => {
  dracoLoader.setDecoderPath("/draco/");
  gltfLoader.setDRACOLoader(dracoLoader);
  const houseData = await gltfLoader.loadAsync(
    baseUrl + "/models/house/LittlestTokyo.glb"
  );
  const house = setModel(houseData);
  house.position.set(0, 20, 0);
  return house;
};

export { loadGLTF };
