import React, { useState } from "react";
import './Events.css'


function Events(){
    const [headingText,setHeadingText] = useState("Hello");
    const [isMouseover,setMouseover] = useState(false);
    

    function handelClick (){
        setHeadingText("submitted");
    }

function handelMouseOver(){
    setMouseover(true);

}

function handelMouseOut(){
    setMouseover(false)
}
    return(
        <div className="container " style={{textAlign:'center'}}>

            <h1 >{headingText}</h1>
            <input type="text" placeholder="what is your name?"/>
            <div>
            <button className="btn " style={{backgroundColor: isMouseover ? "black" : "white"  , color:'gray'  }} 
            onClick={handelClick}
            onMouseOver={handelMouseOver}
            onMouseOut={handelMouseOut}
            >
             Submitted 
            </button>
            </div>
        </div>
    )
}
export default Events;