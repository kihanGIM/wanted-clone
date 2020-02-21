import React, { useState } from "react";
import "./NavBody.scss";
import CategoryTab from "./CategoryTab";
import i1 from "../../Images/1.jpg";
import i2 from "../../Images/2.jpg";
import i3 from "../../Images/3.jpg";
import i4 from "../../Images/4.jpg";
import i5 from "../../Images/5.jpg";
import i6 from "../../Images/6.jpg";
import i7 from "../../Images/7.jpg";
import i8 from "../../Images/8.jpg";
import i9 from "../../Images/9.jpg";
import i10 from "../../Images/10.jpg";
import i11 from "../../Images/11.jpg";
import i12 from "../../Images/12.jpg";
import i13 from "../../Images/13.jpg";
import i14 from "../../Images/14.jpg";
import i15 from "../../Images/15.jpg";
import i16 from "../../Images/16.jpg";
import i17 from "../../Images/17.jpg";
import i18 from "../../Images/18.jpg";

function NavBody() {
  const namesArr = [
    { id: 1, text: "F&B", src: i1 },
    { id: 2, text: "개발", src: i2 },
    { id: 3, text: "건설, 시설", src: i3 },
    { id: 4, text: "게임, 제작", src: i4 },
    { id: 5, text: "경영, 비지니스", src: i5 },
    { id: 6, text: "고객서비스, 리테일", src: i6 },
    { id: 7, text: "디자인", src: i7 },
    { id: 8, text: "마케팅, 광고", src: i8 },
    { id: 9, text: "물류, 무역", src: i9 },
    { id: 10, text: "미디어", src: i10 },
    { id: 11, text: "법률, 법집행기관", src: i11 },
    { id: 12, text: "엔지니어링, 설계", src: i12 },
    { id: 13, text: "영업", src: i13 },
    { id: 14, text: "의료, 제약, 바이오", src: i14 },
    { id: 15, text: "인사, 교육", src: i15 },
    { id: 16, text: "정부, 비영리", src: i16 },
    { id: 17, text: "제조, 생산", src: i17 },
    { id: 18, text: "투자, 분석, 부동산", src: i18 }
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    console.log(x);
    x === 0 ? setX(-100 * (namesArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (namesArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {namesArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            <CategoryTab src={item.src} text={item.text} />
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default NavBody;
