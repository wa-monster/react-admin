/** 画廊  */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gallery.css";
window.axios = axios;
const GalleryList = (props: { galleryArr: string[] }) => {
  return (
    <>
      {props.galleryArr.map((imgStr) => {
        return (
          <img
            className="gallery-item"
            src={"/image/gallery/" + imgStr}
            key={imgStr}
            alt=""
          />
        );
      })}
    </>
  );
};

function Gallery() {
  const [galleryArr, SetGallery] = useState<string[]>([]);

  useEffect(() => {
    axios.get("/image/gallery").then((v) => {
      console.log("11", v.data);
      SetGallery(v.data);
    });
  }, []);
  return (
    <div className="gallery-box">
      <GalleryList galleryArr={galleryArr}></GalleryList>
    </div>
  );
}
export default Gallery;
