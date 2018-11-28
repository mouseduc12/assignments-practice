import React from "react";
import Die from "./Die"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            roll1: "",
            roll2: "",
            roll3: "",
            roll4: "",
            roll5: "",
            roll6: "",
            selected1: false,
            selected2: false,
            selected3: false,
            selected4: false,
            selected5: false,
            selected6: false,
            count: 0,
        }
    }
    rolling = () => {
        if (this.state.count >= 3) {
            this.setState({
                roll1: "",
                roll2: "",
                roll3: "",
                roll4: "",
                roll5: "",
                roll6: "",
                count: 0,
            })
        } else {
            this.setState(prevState => {
                return {
                    roll1: this.state.selected1 ? prevState.roll1 : Math.floor(Math.random() * 6 + 1),
                    roll2: this.state.selected2 ? prevState.roll2 : Math.floor(Math.random() * 6 + 1),
                    roll3: this.state.selected3 ? prevState.roll3 : Math.floor(Math.random() * 6 + 1),
                    roll4: this.state.selected4 ? prevState.roll4 : Math.floor(Math.random() * 6 + 1),
                    roll5: this.state.selected5 ? prevState.roll5 : Math.floor(Math.random() * 6 + 1),
                    roll6: this.state.selected6 ? prevState.roll6 : Math.floor(Math.random() * 6 + 1),
                    count: this.state.count + 1
                }
            })
        }
    }

    handleClick = (e) => {
        if (e === "roll1") {
            this.setState({
                selected1: true
            })
        } else if (e === "roll2") {
            this.setState({
                selected2: true
            })
        } else if (e === "roll3") {
            this.setState({
                selected3: true
            })
        } else if (e === "roll4") {
            this.setState({
                selected4: true
            })
        } else if (e === "roll5") {
            this.setState({
                selected5: true
            })
        } else if (e === "roll6") {
            this.setState({
                selected6: true
            })
        }
    }
    render() {
        return (
            <div>
                <Die dice={this.state.roll1} selectDie={this.handleClick} name="roll1" />
                <Die dice={this.state.roll2} selectDie={this.handleClick} name="roll2" />
                <Die dice={this.state.roll3} selectDie={this.handleClick} name="roll3" />
                <Die dice={this.state.roll4} selectDie={this.handleClick} name="roll4" />
                <Die dice={this.state.roll5} selectDie={this.handleClick} name="roll5" />
                <Die dice={this.state.roll6} selectDie={this.handleClick} name="roll6" />
                <button onClick={this.rolling}>roll</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default DiceBox