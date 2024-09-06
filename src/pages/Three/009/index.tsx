import React, { useEffect, useState } from "react";
import { initMain, toggleVideo } from "./main";
const context = process.env.PUBLIC_URL;
const Video360 = () => {
  useEffect(() => {
    console.log("22222222");
    initMain("#container");
  }, []);
  const [videoPlay, setVideoPlay] = useState(false);
  const playVideo = () => {
    console.log("11111111111");
    setVideoPlay(true);
    toggleVideo(true);
  };
  const stopVideo = () => {
    setVideoPlay(false);
    toggleVideo(false);
  };
  return (
    <div className="bg-white h-full relative" id="container">
      <div className="mask absolute top-0 left-0 w-16 h-16 bg-black">
        {videoPlay ? (
          <img
            className=" absolute cursor-pointer top-2/4 left-2/4 w-16 h-16 translate-x-[-50%] translate-y-[-50%]"
            src={context + "/image/3d/video360/pause.png"}
            alt="暂停"
            onClick={() => stopVideo()}
          />
        ) : (
          <img
            className=" absolute cursor-pointer top-2/4 left-2/4 w-16 h-16 translate-x-[-50%] translate-y-[-50%]"
            src={context + "/image/3d/video360/play.png"}
            alt="播放"
            onClick={() => playVideo()}
          />
        )}
      </div>
    </div>
  );
};
export default Video360;
