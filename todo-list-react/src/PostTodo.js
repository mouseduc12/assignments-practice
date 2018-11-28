import React from "react"
import Form from "./Form"
import axios from "axios";
import Todo from "./Todo"

class PostTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            imgUrl: "",
            price: "",
            completed: "",
            data: [],
        }
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/duc/todo").then(res => {
            const data = res.data
            this.setState({
                data
            })
        })
    }

    handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/duc/todo/${id}`).then(res=>{
            alert(res.data.msg)
            this.setState(prevState =>{
                return {
                    data: prevState.data.filter(each => each._id !== id)
                }
            })
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleEdit = (id, updates) =>{
        axios.put(`https://api.vschool.io/duc/todo/${id}`, updates).then(res =>{
            console.log(res)
            this.setState(prevState =>{
                return {
                    data: prevState.data.map(each => each._id === id ? res.data : each)
                }
            })
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const newObj = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl,
            price: this.state.price,
        }
        axios.post("https://api.vschool.io/duc/todo", newObj).then(res => {
            console.log(res)
            const data = res.data
            this.setState(prevState => {
                return {
                    data: [data, ...prevState.data],
                    title: "",
                    description: "",
                    imgUrl: "",
                    price: "",
                }
            })
        })
    }

    render() {
        return (
            <div>
                <Form
                    title={this.state.title}
                    description={this.state.description}
                    imgUrl={this.state.imgUrl}
                    price={this.state.price}
                    completed={this.state.completed}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />

                {this.state.data.map(each => <Todo 
                title={each.title} 
                handleDelete={this.handleDelete}
                handleEdit = {this.handleEdit} 
                description ={each.description}
                key ={each._id}
                price= {each.price}
                imgUrl = {each.imgUrl}
                completed = {each.completed}
                id = {each._id} />)}
            </div>
        )
    }
}
export default PostTodo;
//prevState.todo.filter(=> each._id !== id)