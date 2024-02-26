import React, { useEffect } from "react";
import { initMain } from "./main";
const WalkPerson = () => {
  let obj: Record<string, any> = {};
  useEffect(() => {
    const asyncMain = async () => {
      obj = await initMain("#container");
    };
    asyncMain();
    return () => {};
  });
  return <div className="bg-white h-full" id="container"></div>;
};

export default WalkPerson;
