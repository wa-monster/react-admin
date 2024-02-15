import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {
  TextureLoader,
  MeshPhongMaterial,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Color,
  Texture,
  sRGBEncoding,
} from "three";
const textureLoader = new TextureLoader();
const baseUrl = process.env.PUBLIC_URL;
const setModel = (data: GLTF) => {
  const model = data.scene.children[0];
  console.log("model", model);

  const map: Texture = textureLoader.load(
    baseUrl + "/models/person/Map-COL.jpg"
  );
  const specularMap = textureLoader.load(
    baseUrl + "/models/person/Map-SPEC.jpg"
  );
  const normalMap = textureLoader.load(
    baseUrl + "/models/person/Infinite-Level_02_Tangent_SmoothUV.jpg"
  );

  // map.encoding = sRGBEncoding;
  (model as any).material = new MeshStandardMaterial({
    map: map,
  });
  console.log("map", (model as any).material);

  // (model as any).material = new MeshPhongMaterial({
  //   specular: 0x111111,
  //   map: map,
  //   specularMap: specularMap,
  //   normalMap: normalMap,
  //   shininess: 25,
  // });
  return model;
};
export { setModel };
