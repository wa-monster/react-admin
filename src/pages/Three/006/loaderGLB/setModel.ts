import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  Object3D,
} from "three";
// import * as THREE from 'three';
// @ts-expect-error: ts类型错误，不得不取消类型验证
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
export const setModel = (data: GLTF) => {
  console.log("data.scene", data.scene);
  const model1 = data.scene.children[0];
  const model2 = clone(data.scene.children[0]);
  const model3 = clone(data.scene.children[0]);
  // model3.scale.set(0.01, 0.01, 0.01);
  console.log("model2", model2);
  console.log("model3", model3);

  data.scene.traverse((obj) => {
    obj.castShadow = true;
  });
  model2.traverse((obj: any) => {
    obj.castShadow = true;
  });
  model3.traverse((obj: any) => {
    obj.castShadow = true;
  });

  const clip1 = data.animations[0];
  const clip2 = data.animations[1];
  const clip3 = data.animations[3];

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
