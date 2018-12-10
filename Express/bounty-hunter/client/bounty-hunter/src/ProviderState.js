import React, { Component } from "react"
import axios from "axios"

const { Provider, Consumer } = React.createContext()

class ProviderState extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isLiving: "",
            bountyAmount: "",
            type: "",
            data: []
        }
    }
    handleChange = (e) => {
        const value = e.target.type === 'radio' ? e.target.value === "isAlive" ? true : false : e.target.value;
        const { name } = e.target
        this.setState({
            [name]: value
        })
    }

    getData = () => {
        axios.get("/bounty").then(res => {
            const data = res.data
            this.setState({
                data
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isLiving: this.state.isLiving,
            bountyAmount: this.state.bountyAmount,
            type: this.state.type,
        }
        axios.post("/bounty", newData).then(res => {
            console.log(res)
            this.setState(prevState => {
                return {
                    data: [...prevState.data, res.data],
                    firstName: "",
                    lastName: "",
                    isLiving: "",
                    bountyAmount: "",
                    type: "",
                }
            })
        })
    }

    handleEditRequest = (id, newObj) =>{
        axios.put(`/bounty/${id}`, newObj).then(res =>{
            console.log(res)
            this.setState({

            })
        })
      }
    

    deleteData = (id) =>{
        axios.delete(`/bounty/${id}`).then(res=>{
            this.setState({
              data: this.state.data.filter(each => each.id !== id)
            })
        })
    }
    

    render() {
        return (
            <div>
                <Provider value={{
                    ...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    getData: this.getData,
                    deleteData: this.deleteData,
                    handleEditRequest: this.handleEditRequest

                }}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export const withState = C => props => (
    <Consumer>
        {
            value => <C {...props} {...value} />
        }
    </Consumer>
)

export default ProviderState;