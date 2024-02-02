import { Mesh, BoxGeometry, MeshLambertMaterial } from "three";

const createCube = () => {
  const geometry = new BoxGeometry(100, 100, 20);
  const lamber = new MeshLambertMaterial();
  const cube = new Mesh(geometry, lamber);
  return cube;
};
export { createCube };
