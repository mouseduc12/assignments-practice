import React from "react"

const Form = (props) =>{
    return(
        <div>
            <form onSubmit ={props.handleSubmit}>
                <input type ="text" value = {props.title} name ="title" placeholder ="title" onChange={props.handleChange}/>
                <input type = "text" value = {props.description} name ="description" placeholder="description" onChange = {props.handleChange}/>
                <input type = "text" value = {props.imgUrl} name ="imgUrl" placeholder="Image" onChange = {props.handleChange}/>
                <input type = "number" value = {props.price} name ="price" placeholder="Price" onChange = {props.handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form 