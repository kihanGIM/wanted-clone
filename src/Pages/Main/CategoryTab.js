import React from "react";
import "./CategoryTab.scss";

function CategoryTab({ src, text }) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto"
  };
  return (
    <div className="NavBody_in">
      <div className="NavBody_intext">{text}</div>

      <img src={src} alt="slide-img" style={imgStyles}></img>
    </div>
  );
}

export default CategoryTab;
