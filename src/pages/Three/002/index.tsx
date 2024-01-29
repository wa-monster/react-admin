import React, { useEffect } from "react";
import { useMain } from "./main";
const ThreeBirds = () => {
  useEffect(() => {
    useMain("#canvas001");
  }, []);

  return <div className="bg-white h-full p-2 " id="canvas001"></div>;
};

export default ThreeBirds;
