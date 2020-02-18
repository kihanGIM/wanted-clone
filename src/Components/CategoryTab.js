
import React from 'react'
import "./CategoryTab.scss";

function CategoryTab(props) {
    return (

        
        <div className="NavBody_in ">
            <div className ="NavBody_intext">
              {props.text}
            </div>
        </div>
    )
}

// function CategoryTab({ src }) {
//     let imgStyles={
//         width:100+"%",
//         height:"auto"
//     };
//     return <img src = {src} alt = "slide-img" style={imgStyles} ></img>;
// }

export default CategoryTab
