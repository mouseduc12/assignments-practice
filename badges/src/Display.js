import React from "react"
import "./Form.css"

const Display = (props) => {
    return (
        <div className="box">
            <div className="form" style={{backgroundColor: props.color}}>
                <p className="input">{props.firstName}</p>
                <p className="input">{props.lasttName}</p>
                <p className="input">{props.email}</p>
                <p className="input">{props.phone}</p>
                <p className="input">{props.placeOfBirth}</p>
                <p className="input">{props.favoriteFood}</p>
                <p className="textarea">{props.aboutYou}</p>
            </div>
        </div>
    )
}

export default Display