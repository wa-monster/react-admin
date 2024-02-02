import React, { useEffect } from "react";
import { initMain } from "./main";
function ThreeCamera() {
  useEffect(() => {
    initMain("#canvas002");
  }, []);
  return <div className="bg-white h-full p-2 " id="canvas002"></div>;
}
export default ThreeCamera;
