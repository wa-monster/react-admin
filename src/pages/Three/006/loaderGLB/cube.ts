import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import { setModel } from "./setModel";
const gltfLoader = new GLTFLoader();
const baseUrl = process.env.PUBLIC_URL;
export const createCube = async () => {
  const dracoLoader = new DRACOLoader();
  const personData1 = await gltfLoader.loadAsync(
    baseUrl + "/models/soldier/Soldier.glb"
  );

  const { cube1, cube2, cube3 } = setModel(personData1);
  cube1.position.x = 3;
  cube2.position.x = 0;
  cube3.position.x = 1;
  return {
    cube1,
    cube2,
    cube3,
  };
};
