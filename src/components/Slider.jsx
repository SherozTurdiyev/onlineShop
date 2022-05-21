import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Slider() {
  const [images, setimages] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);
  useEffect(() => {
    Axios.get("http://myjson.dit.upm.es/api/bins/dohr")
      .then((res) => {
        console.log(res.data);
        setimages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (images.length === 0) {
    console.log(images.length);
  } else {
    setInterval(() => {
      let i = 0;
      if (i > images.length) {
        setCurrentImage(images[i]);
      } else {
        i = 0;
      }
      i= i+1
      
    }, 2000);
  }

  return <div className="container my-4">
{
  (currentImage.length ===0)?
  <>kutib turing</>
  :
  <><img src={currentImage.img_src} alt="" /></>
}


  </div>;
}
