import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const setModel = (data: GLTF) => {
  const model = data.scene.children[0];
  console.log("data", data);

  return model;
};

export { setModel };
