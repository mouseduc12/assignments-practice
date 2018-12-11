import React from "react";
import { withData } from "./ProviderAxios";

const Form = (props) => {
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
                <input type = "text" value = {props.title} name = "title" onChange = {props.handleChange} required placeholder = "Title"></input>
                <input type = "text" value = {props.imgUrl} name = "imgUrl" onChange = {props.handleChange}  required placeholder = "IMG-URL"></input>
                <input type = "text" value = {props.description} name = "description" onChange = {props.handleChange} required placeholder = "description"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default withData(Form)