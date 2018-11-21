import React from "react";

const Heroes = (props) => {
    return(
        <div>
            <ul>
                <li>{props.id} {props.name} {props.alignment}</li>
            </ul>
        </div>
    )
}
export default Heroes