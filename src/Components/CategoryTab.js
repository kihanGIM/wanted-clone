import React from "react";
import "./CategoryTab.scss";

// function CategoryTab(props) {
//     return (
//         <div className="NavBody_in ">
//             <div className ="NavBody_intext">
//               {props.text}
//             </div>
//         </div>
//     )
// }

function CategoryTab({ src, text }) {
  // function CategoryTab({ src,text }) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto"
  };
  return (
    <div className="Wrapper">
      <div>{text}</div>
      {/* <div>{text}</div> */}
      <img src={src} alt="slide-img" style={imgStyles}></img>
    </div>
  );
}

export default CategoryTab;
