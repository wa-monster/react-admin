// @ts-nocheck
import React, { useEffect } from "react";
import { initMain } from "./main";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const baseUrl = process.env.PUBLIC_URL;
const SkeletonUtils = {
  clone,
};
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
