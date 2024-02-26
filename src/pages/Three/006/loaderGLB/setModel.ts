import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  Object3D,
} from "three";
export const setModel = (data: GLTF, data2: GLTF, data3: GLTF) => {
  const model1 = data.scene.children[0];
  const model2 = data2.scene.children[0];
  const model3 = data3.scene.children[0];
  console.log(" data.animations", data);

  const clip1 = data.animations[0];
  const clip2 = data2.animations[1];
  const clip3 = data3.animations[3];

  const mixer1 = new AnimationMixer(model1);
  const mixer2 = new AnimationMixer(model2);
  const mixer3 = new AnimationMixer(model3);

  const action1 = mixer1.clipAction(clip1);
  const action2 = mixer2.clipAction(clip2);
  const action3 = mixer3.clipAction(clip3);
  (model1 as Object3D<Event> & { tick: (a: any) => void }).tick = (delta) => {
    mixer1.update(delta);
  };
  (model2 as Object3D<Event> & { tick: (a: any) => void }).tick = (delta) => {
    mixer2.update(delta);
  };
  (model3 as Object3D<Event> & { tick: (a: any) => void }).tick = (delta) => {
    // console.log("data", data);
    mixer3.update(delta);
  };

  action1.play();
  action2.play();
  action3.play();
  return {
    cube1: model1,
    cube2: model2,
    cube3: model3,
  };
};
