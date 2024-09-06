/** 画廊  */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gallery.css";
window.axios = axios;
const context = process.env.PUBLIC_URL;
const GalleryList = (props: { galleryArr: string[] }) => {
  return (
    <>
      {props.galleryArr.map((imgStr) => {
        return (
          <img
            className="gallery-item"
            src={context + "/image/gallery/" + imgStr}
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
    axios
      .get(context + "/image/gallery")
      .then((v) => {
        console.log("11", v.data);
        SetGallery(v.data);
      })
      .catch((err) => {
        const data = [
          "10001 (1).jpg",
          "10001.jpg",
          "10002 (1).jpg",
          "10002.jpg",
          "10003 (1).jpg",
          "10003.jpg",
          "10004 (1).jpg",
          "10004.jpg",
          "10005 (1).jpg",
          "10005.jpg",
          "10006 (1).jpg",
          "10006.jpg",
          "10007 (1).jpg",
          "10007.jpg",
          "10008 (1).jpg",
          "10008.jpg",
          "10009 (1).jpg",
          "10009.jpg",
          "10010 (1).jpg",
          "10010.jpg",
          "10011 (1).jpg",
          "10011.jpg",
          "10012 (1).jpg",
          "10012.jpg",
          "10013 (1).jpg",
          "10013.jpg",
          "10014 (1).jpg",
          "10014.jpg",
          "10015 (1).jpg",
          "10015.jpg",
          "10016 (1).jpg",
          "10016.jpg",
          "10017 (1).jpg",
          "10017.jpg",
          "10018 (1).jpg",
          "10018.jpg",
          "10019 (1).jpg",
          "10019.jpg",
          "10020 (1).jpg",
          "10020.jpg",
          "10021 (1).jpg",
          "10021.jpg",
          "10022 (1).jpg",
          "10022.jpg",
          "10023 (1).jpg",
          "10023.jpg",
          "10024.jpg",
          "10025.jpg",
          "10026.jpg",
          "10027.jpg",
          "10028.jpg",
          "10029.jpg",
        ];
        SetGallery(data);
      });
  }, []);
  return (
    <div className="gallery-box">
      <div className="gallery-content">
        <GalleryList galleryArr={galleryArr}></GalleryList>
      </div>
    </div>
  );
}
export default Gallery;
