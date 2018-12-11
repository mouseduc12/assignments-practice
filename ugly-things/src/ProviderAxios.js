import React from "react";
import axios from "axios"
export const { Provider, Consumer } = React.createContext()

class ProviderAxios extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            imgUrl: "",
            description: "",
            data: []
        }
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/duc/todo").then(res => {
            console.log(res.data)
            this.setState({
                data: res.data
            })
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/duc/todo/${id}`).then(res => {
            alert(res.data.msg);
            this.setState(prevState => {
                return {
                    data: prevState.data.filter(each => each._id !== id)
                }
            })
        })
    }

    handleEdit = (id, newObj) => {
        axios.put(`https://api.vschool.io/duc/todo/${id}`, newObj).then(res => {
            this.setState(prevState => {
                return {
                    data: prevState.data.map(each => each._id === id ? res.data : each)
                }
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }
        axios.post("https://api.vschool.io/duc/todo", newData).then(res => {
            console.log(res)
            this.setState(prevState => {
                return {
                    data: [...prevState.data, res.data]
                }
            })
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <Provider value={{
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleDelete: this.handleDelete,
                data: this.state.data,
                handleEdit: this.handleEdit
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withData = (C) => props => (
    <Consumer>
        {
            value => <C {...value} {...props} />
        }
    </Consumer>
)

export default ProviderAxios