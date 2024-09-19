import { createRendererer } from "@/hooks/3d/components/renderer";
import { createCamera } from "@/hooks/3d/components/camera";
import { createScene } from "@/hooks/3d/components/scene";
import { Resize } from "@/hooks/3d/system/Resizer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as Three from "three";
const context = process.env.PUBLIC_URL;
const renderer = createRendererer();
const camera = createCamera();
const scene = createScene();
// 模拟数据
const mapsData = new Map();
const getCurCabinetInfo = (name:string)=>{
	if(!mapsData.get(name)){
		const obj = {
			name,
			temperature:Math.floor(Math.random()*50)+50,
			count:Math.floor(Math.random()*10),
			capacity:Math.floor(Math.random()*10)+10,
		};
		mapsData.set(name,obj);
	}
	return mapsData.get(name);
};


type setPlaneType = React.Dispatch<React.SetStateAction<{
	name: string;
	temperature: string;
	count: number;
	capacity: number;
	top: number;
	left: number;
	display: string;
}>>
const maps = new Map();
const raycaster = new Three.Raycaster();
const pointer = new Three.Vector2();
const selectCabinet = (x:number,y:number,planeObj:any)=>{
	// 这一串是为了通过射线取到画面中对应的对象
		const {width,height} = renderer.domElement;
		const canvas = renderer.domElement;
		const rect = canvas.getBoundingClientRect();
		const pos =  {
			x: x - (rect.left * canvas.width) / rect.width,
			y: y - (rect.top * canvas.height) / rect.height,
		};
		pointer.set(
			(pos.x/width)*2-1,
			-(pos.y/height)*2+1
		);
		raycaster.setFromCamera(pointer,camera);
		const intersect = raycaster.intersectObjects(cabinets)[0];
		const intersectObj = intersect?intersect.object:null;
		// 恢复上次被选中的机箱
		if(curCabinet && curCabinet !== intersectObj){
			const material = curCabinet.material as Three.MeshBasicMaterial;
			console.log('cur',curCabinet.name);
			material.setValues({
				map:maps.get('cabinet.jpg')
			});
		}
		/* 
			若当前所选对象不为空：
				触发鼠标在机柜上移动的事件。
				若当前所选对象不等于上一次所选对象：
					更新curCabinet。
					将模型高亮。
					触发鼠标划入机柜事件。
			否则若上一次所选对象存在：
				置空curCabinet。
				触发鼠标划出机柜事件。
 	  */
		if(intersectObj){
			handleMouseMove(planeObj,pos.x,pos.y);
			if(intersectObj !== curCabinet){
				curCabinet = intersectObj;
				const material = curCabinet.material as Three.MeshBasicMaterial;
				material.setValues({
					map:maps.get('cabinet-hover.jpg')
				});
				const obj = getCurCabinetInfo(curCabinet.name);
				handleMouseEnter(planeObj,obj);
			}
		}else if(curCabinet){
			curCabinet = null;
			handleMouseOut(planeObj);
		}
};



// 机柜
const cabinets:any[] = [];
let curCabinet:any;
//  移入机柜
const handleMouseEnter = (planeObj:any,obj:any)=>{
	planeObj.setPlane({
		...planeObj.plane,
		...obj,
		display:'block'
	});
};
//  机柜内移动
const handleMouseMove = (planeObj:any,x:number,y:number)=>{
	planeObj.setPlane({
		...planeObj.plane,
		top:y,
		left:x
	});
};
// 	移出机柜
const handleMouseOut = (planeObj:any)=>{
	planeObj.setPlane({
		...planeObj.plane,
		display:'none'
	});
};
// 强行替换纹理
const crtTexture = (name: string) => {
  let curTexture = maps.get(name);
  if (!curTexture) {
    curTexture = new Three.TextureLoader().load(
      context + "/models/machineRoom/" + name
    );
    curTexture.flipY = false;
    curTexture.wrapS = 1000;
    curTexture.wrapT = 1000;
    maps.set(name, curTexture);
  }
  return curTexture;
};
const initMain = (id: string) => {
	crtTexture("cabinet-hover.jpg");
 
  scene.background = new Three.Color(0x000000);

  const gltfLoader = new GLTFLoader();
  gltfLoader.load(context + "/models/machineRoom/machineRoom.gltf", (gltf) => {
    console.log(gltf.scene);
    const model = gltf.scene;
    model.children.forEach((child) => {
			// 强制加类型
			const obj  = child as Three.Object3D<Three.Event> & { material: any };
      const { map, color } = obj.material;
      if (obj.name.includes("cabinet")) {
        cabinets.push(obj);
				mapsData.set(obj.name,null);

      }
      // 替换纹理贴图和材质
      if (map) {
        obj.material =
          new Three.MeshBasicMaterial({
            map: crtTexture(map.name),
          });
      } else {
        obj.material =
          new Three.MeshBasicMaterial({ color });
      }
    });
    scene.add(...model.children);
  });



  const helper = new Three.AxesHelper(10);
  scene.add(helper);
  const container = document.querySelector(id);
  if (container) {
    const controls = new OrbitControls(camera, renderer.domElement);
    const stats = Stats();
    container.appendChild(renderer.domElement);
    container.appendChild(stats.dom);
    const resize = new Resize(camera, renderer, container);
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      stats.update();
      requestAnimationFrame(animate);
    };
    animate();
  }
};

export { initMain,selectCabinet };
