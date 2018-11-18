import React from "react";

const Profile = (props) => {
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <img src={props.img}/>
        </div>
    )
}

export default Profile


