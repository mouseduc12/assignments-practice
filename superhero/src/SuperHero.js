import React from "react";

const SuperHero = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <img src = {props.src} onClick={() => props.talking(props.name)}></img>
        </div>
    )
}

export default SuperHero;