import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {
  AnimationAction,
  AnimationMixer,
  AnimationClip,
  Object3D,
} from "three";
const setModel = (data: GLTF) => {
  const model = data.scene.children[0];
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);

  const action = mixer.clipAction(clip);
  (model as Object3D<Event> & { tick: (a: any) => void }).tick = (delta) => {
    console.log("data", data);
    mixer.update(delta);
  };

  action.play();
  return model;
};

export { setModel };
