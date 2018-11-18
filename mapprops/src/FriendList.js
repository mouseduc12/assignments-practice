import React from "react";

const FriendList = (props) =>{
    const { name, age } = props
    return(
        <div>
            <h1>Name: {name}</h1>
            <h3>Age: {age}</h3>
        </div>
    )
}
export default FriendList;