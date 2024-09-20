import React, { useEffect, useState } from "react";
import { initMain } from "./main";
const MachineRoom = () => {
  useEffect(() => {
    initMain("#container");
    return () => {
      document.querySelector("#container")?.querySelector("canvas")?.remove();
    };
  }, []);

  return (
    <>
      <div
        className="MachineRoom bg-white h-full relative"
        id="container"
      ></div>
    </>
  );
};
export default MachineRoom;
