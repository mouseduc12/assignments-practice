import React from "react";

const Welcome = (props) => {
    return (
        <div>
            <h1>First Name:{props.firstName}</h1>
            <h1>Last Name:{props.lastName}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Phone Number:{props.phoneNumber}</h1>
        </div>
    )
}
export default Welcome;