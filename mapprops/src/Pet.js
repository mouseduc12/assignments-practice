import React from "react";

const Pet = (props) => {
    const {name, breed } = props
    return (
        <div>
            <h1>Pet Name: {name}</h1>
            <h1>Pet breed: {breed}</h1>
        </div>
    )
}

export default Pet;