import React from "react";
import Loader from "react-loaders";

export default function Home() {
  return (
    <div>
      Home
      <div className="h-10">
        <Loader type="line-scale" active></Loader>
      </div>
    </div>
  );
}
