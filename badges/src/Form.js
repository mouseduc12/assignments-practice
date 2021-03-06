import React from "react";
import "./Form.css";

const Form = (props) => {
    return (
        <div className="box">
                <form onSubmit={props.handleSubmit} className="form">
                    <input type="text" name="firstName" value={props.firstName} placeholder="First Name" onChange={props.handleChange} className="input"/>
                    <input type="text" name="lastName" value={props.lastName} placeholder="Last Name" onChange={props.handleChange} className="input"/>
                    <input type="email" name="email" value={props.email} placeholder="Email" onChange={props.handleChange} className="input"/>
                    <input type="number" name="phone" value={props.phone} placeholder="Phone" onChange={props.handleChange} className="input"/>
                    <input type="text" name="placeOfBirth" value={props.placeOfBirth} placeholder="Place Of Birth" onChange={props.handleChange} className="input"/>
                    <input type="text" name="favoriteFood" value={props.favoriteFood} placeholder="Favorite Food" onChange={props.handleChange} className="input"/>
                    <textarea type="text" name="aboutYou" value={props.aboutYou} placeholder="Tell us about yourself" onChange={props.handleChange} className="textarea">
                    </textarea>
                    <button>Submit</button>
                </form>
        </div>
    )
}
export default Form