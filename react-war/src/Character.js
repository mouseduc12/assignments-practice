import React from "react"
import axios from "axios"

class Character extends React.Component {
    constructor(props){
        console.log(props)
        super(props)
        this.state = {
            newData: {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        const forwarder = "https://vschool-cors.herokuapp.com?url="
        const url = `https://swapi.co/api/people/${id}`
        axios.get(forwarder + url).then(res =>{
            const newData = res.data 
            this.setState({
                newData
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.newData.name}</h1>
                <h2>{this.state.newData.gender}</h2>
                <h3>{this.state.newData.birth_year}</h3>
            </div>
        )
    }
}

export default Character;