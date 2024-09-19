import React, { useEffect } from "react";
import { initMain } from "./main";
const RainWorld = () => {
  useEffect(() => {
    const {obj} = initMain("#container");
    return ()=>{
      obj.gui.domElement.remove();
    };
  }, []);
  return <div className="bg-white h-full" id="container"></div>;
};
export default RainWorld;
