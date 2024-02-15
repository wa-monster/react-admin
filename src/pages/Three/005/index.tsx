import React, { useEffect } from "react";
import { initMain } from "./main";
const ThreePerson = () => {
  useEffect(() => {
    initMain("#container");
  }, []);
  return <div className="bg-white h-full p-2 " id="container"></div>;
};
export default ThreePerson;
