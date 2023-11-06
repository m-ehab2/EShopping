import React, { useState } from "react";
import "/home/mehab2/EShopping/src/Styles/Carasoul.css";
import myImage1 from "/home/mehab2/EShopping/src/Assets/Pics/jenny-hill-iP_e0k48g18-unsplash.jpg";
import myImage2 from "/home/mehab2/EShopping/src/Assets/Pics/people-working-out-indoors-together-with-dumbbells.jpg";
import myImage3 from "/home/mehab2/EShopping/src/Assets/Pics/young-couple-doing-yoga-lake.jpg";
import ImgHolder from "./ImgHolder";

export default function Carasoul() {
  const imgArr = [myImage1, myImage2, myImage3];
  const [Index, setIndex] = useState(0);
  const myFunc = () => {
    Index < imgArr.length - 1 ? setIndex(Index + 1) : setIndex(0);
  };
  return (
    <div className="carasoul">
      <ImgHolder url={imgArr[Index]}></ImgHolder>
      <button
        onClick={() => {
          myFunc();
        }}
      >
        \\
      </button>
    </div>
  );
}
