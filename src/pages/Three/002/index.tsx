import React, { useEffect } from "react";
import { useMain } from "./main";
const ThreeBirds = () => {
  let obj: Record<string, any> = {};
  useEffect(() => {
    const asyncMain = async () => {
      obj = await useMain("#canvas001");
    };
    asyncMain();
    return () => {
      obj?.loop.stop();
    };
  }, []);

  return <div className="bg-white h-full" id="canvas001"></div>;
};

export default ThreeBirds;
