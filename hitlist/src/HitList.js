import React from "react"
import "./HitList.css"

const HitList = (props) =>{
    return(
        <div>
            <h1>{props.name}</h1>
            <div style ={{backgroundImage: `url(${props.image})`}} className ="black-list"></div>
        </div>
    )
}
export default HitList;