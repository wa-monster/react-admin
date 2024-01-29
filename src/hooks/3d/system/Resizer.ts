import { render } from "@testing-library/react";
import { PerspectiveCamera, WebGLRenderer } from "three";
function setSize(
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  container: Element
) {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
}

export class Resize {
  constructor(
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
    container: Element
  ) {
    setSize(camera, renderer, container);
    window.addEventListener("resize", () => {
      setSize(camera, renderer, container);
      this.onResize();
    });
  }
  onResize() {}
}
