import React, { useEffect } from "react";
import { initMain } from "./main";
function ThreeCamera() {
  let obj: Record<string, any> = {};
  useEffect(() => {
    const asyncMain = async () => {
      obj = await initMain("#canvas002");
    };
    asyncMain();
    return () => {};
  }, []);
  return <div className="bg-white h-full" id="canvas002"></div>;
}
export default ThreeCamera;
