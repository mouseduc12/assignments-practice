import React from "react";
// import Button from "./Button"
import "./App.css"
import Button from "./Button";


export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            color: "navy",
            secondColor: "teal",
            thirdColor: "peachPuff",
            fourthColor: "fuchsia",
            play: false, 
        }
        this.url = ["../sounds/2s.mp3", "../sounds/3s", "../sounds/4s", "../sounds/6s", "../sounds/djaif", "../sounds/kick", "../sounds/second6s", "../sounds/slap2s"];
        this.audio = new Audio(this.url[1]);
    }
    togglePlay = (e) =>{
        e.preventDefault();
        this.setState({play: !this.state.play});
        console.log(this.audio);
        this.state.play ? this.audio.play() : this.audio.pause();
    }
    turnButtonOn = (e) => {
        e.preventDefault();
        this.setState({color: this.state.color === "maroon" ? "black" : "maroon" })
    }
    turnButtonSuperOn = (e) =>{
        e.preventDefault();
        this.setState({color: this.state.color !== "green" ? "green" : "maroon"})
    }
    turnSecondButtonOn = (e) => {
        e.preventDefault();
        this.setState({secondColor: this.state.secondColor === "yellow" ? "purple" : "yellow" })
    }
    turnSecondSuperButtonOn = (e) => {
        e.preventDefault();
        this.setState({secondColor: this.state.secondColor !== "hotPink" ? "hotPink" : "purple" })
    }
    turnThirdButtonOn = (e) => {
        e.preventDefault();
        this.setState({thirdColor: this.state.thirdColor === "peachPuff" ? "blue" : "peachPuff" })
    }
    turnThirdButtonSuperOn = (e) =>{
        e.preventDefault();
        this.setState({thirdColor: this.state.thirdColor !== "aqua" ? "aqua" : "peachPuff"})
    }
    turnFourthButtonOn = (e) => {
        e.preventDefault();
        this.setState({fourthColor: this.state.fourthColor === "orange" ? "olive" : "orange" })
    }
    turnFourthButtonSuperOn = (e) => {
        e.preventDefault();
        this.setState({fourthColor: this.state.fourthColor !== "gray" ? "gray" : "orange" })
    }

    render(){
        return(
            <div>
                <div className="box-container">
                    <div className="box" style={{backgroundColor: this.state.color}}></div>
                    <div className="box" style={{backgroundColor: this.state.secondColor}}></div>
                    <div className="box" style={{backgroundColor: this.state.thirdColor}}></div>
                    <div className="box" style={{backgroundColor: this.state.fourthColor}}></div>
                </div>
                <div>
                    <Button 
                    clickFirstButton={this.turnButtonOn} 
                    clickFirstSuperButton={this.turnButtonSuperOn}
                    clickSecondButton={this.turnSecondButtonOn}
                    clickSecondSuperButton={this.turnSecondSuperButtonOn}
                    clickThirdButton={this.turnThirdButtonOn}
                    clickThirdSuperButton={this.turnThirdButtonSuperOn}
                    clickFourthButton={this.turnFourthButtonOn}
                    clickFourthSuperButton={this.turnFourthButtonSuperOn}/>  
                </div>
            </div>
        )
    }
}

