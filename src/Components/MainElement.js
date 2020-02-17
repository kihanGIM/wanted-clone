import React from 'react'
import "./MainElement.scss";


function MainElement(props) {
    return (
        
        <div className="Main_body_in">
        <div className="Main_header">
        <img src={`${props.img}`} alt="img"></img>
        </div>
        <div className="Main_text">
        <span className="Main_text_top">{props.data}</span>
        <span className="Main_text_body">{props.data_A}</span>
        <span className="Main_text_body">{props.data_B}</span>
        <span className="Main_text_end"> {props.data_R}</span>
        </div>
        </div>
       

        // <div className="NavBody_in ">
        //     <div className ="NavBody_intext">
        //       {props.text}
        //     </div>
        // </div>
    )
}

export default MainElement;
