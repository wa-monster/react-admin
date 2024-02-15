import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { setModel } from "./setModel";
const gltfLoader = new GLTFLoader();
const baseUrl = process.env.PUBLIC_URL;
const loadPerson = async () => {
  const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath(baseUrl + "/draco/");
  // gltfLoader.setDRACOLoader(dracoLoader);
  const personData = await gltfLoader.loadAsync(
    baseUrl + "/models/person/LeePerrySmith.glb"
  );
  console.log("personData", personData);
  const model = setModel(personData);
  return model;
};
export { loadPerson };
