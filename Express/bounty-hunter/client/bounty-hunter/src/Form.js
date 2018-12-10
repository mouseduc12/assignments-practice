import React from "react"
import { withState } from "./ProviderState"
const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text"
                    onChange={props.handleChange}
                    name="firstName"
                    value={props.firstName}
                    placeholder="First Name" />

                <input type="text"
                    onChange={props.handleChange}
                    name="lastName"
                    vaue={props.lastName}
                    placeholder="Last Name" />

                Is Living <input type="radio"
                    onChange={props.handleChange}
                    name="isLiving"
                    value="isAlive"
                />

                Not Living <input type="radio"
                    onChange={props.handleChange}
                    name="isLiving"
                    value="isDead" />

                <input type="number"
                    placeholder="Bounty Amount"
                    onChange={props.handleChange}
                    name="bountyAmount" 
                    value = {props.bountyAmount}
                    />

                <select name = "type" onChange = {props.handleChange}>
                    <option value = "Sith">Sith</option>
                    <option value = "Jedi">Jedi</option> 
                </select>

                <button>Submit </button> 
            </form>
        </div>
    )
}

export default withState(Form);