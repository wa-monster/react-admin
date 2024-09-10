import React, { useEffect } from "react";
import "./index.less";
import { initMain } from "./main";
const MachineRoom = () => {
  useEffect(() => {
    initMain("#container");
  }, []);
  return (
    <div className="MachineRoom bg-white h-full relative" id="container"></div>
  );
};
export default MachineRoom;
