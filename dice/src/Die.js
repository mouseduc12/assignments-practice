import React from "react";

class Die extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div onClick = {() => this.props.selectDie(this.props.name)}>
                <h1>{this.props.dice}</h1>
            </div>
        )
    }
}

export default Die;