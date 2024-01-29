import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setModel } from "./setModel";
const gltfLoader = new GLTFLoader();
export const loadGLTF = async () => {
  const [FlamingoData, ParrotData, StorkData] = await Promise.all([
    gltfLoader.loadAsync("/models/birds/Flamingo.glb"),
    gltfLoader.loadAsync("/models/birds/Parrot.glb"),
    gltfLoader.loadAsync("/models/birds/Stork.glb"),
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
