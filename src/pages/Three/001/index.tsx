import React, { useEffect } from "react";
import { use3DMain } from "@/hooks/3d/use3DMain";
const ThreeBirds = () => {
  useEffect(() => {
    use3DMain("#canvas001");
  }, []);

  return <div className="bg-white h-full" id="canvas001"></div>;
};

export default ThreeBirds;
