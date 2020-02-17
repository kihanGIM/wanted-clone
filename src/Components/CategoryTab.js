
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

export default CategoryTab
