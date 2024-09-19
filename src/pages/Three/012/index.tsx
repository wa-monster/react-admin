import React, { useEffect, useState } from "react";
import "./index.less";
import { initMain,selectCabinet } from "./main";
const MachineRoom = () => {
	const [plane,setPlane] = useState({
		name:'Loading',
		temperature:"0",
		count:0,
		capacity:1,
		top:0,
		left:0,
		display:'none'
	});
	type setPlaneType = React.Dispatch<React.SetStateAction<{
    name: string;
    temperature: string;
    count: number;
    capacity: number;
    top: number;
    left: number;
    display: string;
  }>>
  useEffect(() => {
    initMain("#container");
  }, []);
	const mouseMove = (e:React.MouseEvent<HTMLDivElement, MouseEvent>,setPlane:setPlaneType)=>{
		const planeObj = {
			plane,
			setPlane
		};
		selectCabinet(e.clientX,e.clientY,planeObj);
	};
  return (
    <>
			<div className="MachineRoom bg-white h-full relative" id="container" onMouseMove={(e)=>mouseMove(e,setPlane)}>
				<div className="plane" style={{top:plane.top,left:plane.left,display:plane.display}}>
					<p>机柜名称：{plane.name}</p>
					<p>机柜温度：{plane.temperature}°</p>
					<p>使用情况：{plane.count}/{plane.capacity}</p>
				</div>
			</div>
		</>
  );
};
export default MachineRoom;
