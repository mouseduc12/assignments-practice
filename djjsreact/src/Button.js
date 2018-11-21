import React from "react";
import "./Button.css"

const Button = (props) => {

    return (
        <div className="buttons">
            <button onClick={props.clickFirstButton}>Beep</button>
            <button onClick={props.clickFirstSuperButton}>SuperOn</button>
            <button onClick={props.clickSecondButton}>Beep</button>
            <button onClick={props.clickSecondSuperButton}>SuperOn2</button>
            <button onClick={props.clickThirdButton}>Beep</button>
            <button onClick={props.clickThirdSuperButton}>SuperOn3</button>
            <button onClick={props.clickFourthButton}>Beep</button>
            <button onClick={props.clickFourthSuperButton}>SuperOn4</button>
        </div>
    )
}

export default Button; 