import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
const clock = new Clock();
export class Loop {
  updateAbles: any[];
  renderer;
  scene;
  camera;
  constructor(
    camera: PerspectiveCamera,
    scene: Scene,
    renderer: WebGLRenderer
  ) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updateAbles = [];
  }
  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }
  stop() {
    this.renderer.setAnimationLoop(null);
  }
  tick() {
    const delta = clock.getDelta();
    for (const cube of this.updateAbles) {
      cube.tick(delta);
    }
  }
}
