import { AnimationClip, AnimationMixer } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export const setModel = (data: GLTF) => {
  const model = data.scene.children[0];
  // 拿到动画剪辑
  const clip = data.animations[0];
  // 模型转为动态
  const mixer = new AnimationMixer(model);
  // 为动态模型加动画剪辑
  const action = mixer.clipAction(clip);
  (model as any).tick = (delta: number) => {
    mixer.update(delta);
  };
  action.play();
  return model;
};
