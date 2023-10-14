import React from "react";
import Loader from "react-loaders";
export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-blue-400 h-10">
        <Loader type="line-scale" active></Loader>
      </div>
    </div>
  );
}
