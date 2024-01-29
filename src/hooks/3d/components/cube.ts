import { Mesh, BoxGeometry, MeshStandardMaterial } from "three";

export const createCube = () => {
  const geometry = new BoxGeometry(5, 5, 5);
  const material = new MeshStandardMaterial({
    color: "0xf00",
  });
  const mesh = new Mesh(geometry, material);
  return mesh;
};
