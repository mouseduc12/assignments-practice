import React from "react";

const ColoredInfo = ({backgroundColor, title, subtitle, information}) => {
    return(
        <div style={{backgroundColor: backgroundColor}}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{information}</p>
        </div>
    )
}
export default ColoredInfo