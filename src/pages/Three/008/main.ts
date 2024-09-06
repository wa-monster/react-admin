import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { Resize } from "@/hooks/3d/system/Resizer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as Three from "three";
const context = process.env.PUBLIC_URL;
const manager = new Three.LoadingManager();
const textureLoader = new Three.TextureLoader(manager);
// 创建星空背景
const createStar = (count: number) => {
  const geometry = new Three.BufferGeometry();
  const starVector = new Float32Array(count * 3);
  const starColor = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // 随机位置
    const x = (Math.random() - 0.5) * 1000;
    const y = (Math.random() - 0.5) * 1000;
    const z = (Math.random() - 0.5) * 1000;
    starVector[i * 3 + 0] = x;
    starVector[i * 3 + 1] = y;
    starVector[i * 3 + 2] = z;

    // 随机颜色
    const color = new Three.Color();
    // setHSL(‘色调', '亮度', ‘饱和‘) 三个参数皆在[0, 1]之间
    color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55);
    starColor[i * 3 + 0] = color.r;
    starColor[i * 3 + 1] = color.g;
    starColor[i * 3 + 2] = color.b;
  }
  // 把位置和颜色填入BufferGeometry
  geometry.setAttribute("position", new Three.BufferAttribute(starVector, 3));
  geometry.setAttribute("color", new Three.BufferAttribute(starColor, 3));

  const starTexture = textureLoader.load(
    context + "/image/3d/earth3d/star.png"
  );
  const material = new Three.PointsMaterial({
    map: starTexture,
    size: 2, //点大小
    transparent: true, //材质透明
    opacity: 1, //透明度
    vertexColors: true, //顶点着色
    depthTest: true, //是否再渲染此材质时启用深度测试
    depthWrite: false, //渲染此材质时对缓冲有任何影响
    blending: Three.AdditiveBlending, //材质混合
    sizeAttenuation: true, //点的大小是否随相机深度而衰减
  });
  const start = new Three.Points(geometry, material);
  return start;
};
// 创建地球
const createEarth = () => {
  const earthGroup = new Three.Group();
  // 地球
  const geometry = new Three.SphereGeometry(5, 32, 32);
  const textureLoader = new Three.TextureLoader();
  const earthTexture = textureLoader.load(
    context + "/image/3d/earth3d/earth.png"
  );
  const earthBumpTexture = textureLoader.load(
    context + "/image/3d/earth3d/earth_bump.png"
  );
  const earthSpecTexture = textureLoader.load(
    context + "/image/3d/earth3d/earth_spec.png"
  );
  const material = new Three.MeshPhongMaterial({
    map: earthTexture,
    bumpMap: earthBumpTexture, // 凹凸贴图纹理
    bumpScale: 0.15, // 凹凸贴图纹理影响程度 0-1
    specularMap: earthSpecTexture, //镜面反射贴图
    specular: new Three.Color("#909090"), //材质的高光颜色
    shininess: 5, //高亮的程度
    transparent: true, //材质透明
    side: Three.DoubleSide,
  });
  const earthMesh = new Three.Mesh(geometry, material);
  earthGroup.add(earthMesh);
  // 大气层
  const geometryCloud = new Three.SphereGeometry(5.1, 40, 40);
  const cloudTexture = textureLoader.load(
    context + "/image/3d/earth3d/earth_cloud.png"
  );
  const cloudMaterial = new Three.MeshPhongMaterial({
    map: cloudTexture,
    side: Three.DoubleSide,
    transparent: true,
    // blending: THREE.AdditiveBlending,
    opacity: 1,
  });
  const cloudMesh = new Three.Mesh(geometryCloud, cloudMaterial);
  earthGroup.add(cloudMesh);
  earthGroup.rotation.set(0.4, Math.PI + 1, 0);
  return earthGroup;
};
// 创建星轨环
const createStarOrbit = () => {
  const geometry = new Three.TorusGeometry(8, 0.2, 2, 200);
  const material = new Three.MeshBasicMaterial({
    color: new Three.Color("rgb(147, 181, 207)"),
    opacity: 0.4,
    // transparent: true,
  });
  const starOrbit = new Three.Mesh(geometry, material);
  starOrbit.rotation.set(Math.PI / 2, 0, 0);

  // 效果合成器，是Three.js中的一个后期处理效果库。EffectComposer允许您将多个RenderPass组合在一起，以创建复杂的后期处理效果

  return starOrbit;
};
const initMain = (id: string) => {
  const renderer = createRendererer();
  const camera = createCamera();
  const scene = createScene();
  scene.background = new Three.Color(0x000000);

  const stars = createStar(900);
  scene.add(stars);

  const earth = createEarth();
  scene.add(earth);

  const starOrbit = createStarOrbit();
  scene.add(starOrbit);
  // 光
  const light = new Three.DirectionalLight(0xffffff, 1);
  light.position.set(150, 50, 50);
  scene.add(light);

  const helper = new Three.AxesHelper(100);
  scene.add(helper);
  const container = document.querySelector(id);
  if (container) {
    const resize = new Resize(camera, renderer, container);
    container.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }
};

export { initMain };
