import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setModel } from "./setModel";
const gltfLoader = new GLTFLoader();
const baseUrl = process.env.PUBLIC_URL;
console.log("baseUrl", baseUrl);

export const loadGLTF = async () => {
  const [FlamingoData, ParrotData, StorkData] = await Promise.all([
    gltfLoader.loadAsync(baseUrl + "/models/birds/Flamingo.glb"),
    gltfLoader.loadAsync(baseUrl + "/models/birds/Parrot.glb"),
    gltfLoader.loadAsync(baseUrl + "/models/birds/Stork.glb"),
  ]);
  const Flamingo = setModel(FlamingoData);
  Flamingo.position.set(5, 5, 0);
  const Parrot = setModel(ParrotData);
  Parrot.position.set(-5, 5, 0);
  const Stork = setModel(StorkData);
  Stork.position.set(0, 0, 0);
  return {
    Flamingo,
    Parrot,
    Stork,
  };
};
