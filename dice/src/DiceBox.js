import React from "react";
import Die from "./Die"

class DiceBox extends React.Component{
    constructor(){
        super()
        this.state = {
            rolls: [0, 0, 0, 0 ,0]
        }
    }
    rolling = () =>{
        const mathRandom = []
        for(let i = 0; i < this.state.rolls.length; i++){
            mathRandom.push(Math.floor(Math.random() * 6  + 1));
        }
        this.setState({
            rolls: mathRandom
        })
    }
    render(){
         
        return(
            <div>
                {this.state.rolls.map((each, id) => <Die each={each} key = {id}/>)}
                <button onClick={this.rolling}>roll</button>
            </div>
        )
    }
}

export default DiceBox