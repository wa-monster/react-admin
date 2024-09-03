import React, { useEffect } from "react";
import initMain from "./main";
const EarthGl = () => {
  useEffect(() => {
    initMain("#container");
  }, []);
  return <div className="bg-white h-full" id="container"></div>;
};
export default EarthGl;