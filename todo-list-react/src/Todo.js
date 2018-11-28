import React from "react"
import { Fragment } from "react"
import "./Todo.css"

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false,
            title: ""
        }
    }

    handleEdit = () => {
        this.setState(prevState => {
            return {
                display: !prevState.display
            }
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const updates = {
            title: this.state.title
        }
        this.props.handleEdit(this.props.id, updates)
        this.handleEdit();
    }

    render() {
        return (
            <Fragment>
                {this.state.display === false ?
                    <div>
                        <h1>{this.props.title}</h1>
                        <h3>{this.props.description}</h3>
                        <h3>{this.props.price}</h3>
                        <div style={{ backgroundImage: `url(${this.props.imgUrl})` }}></div>
                        <p>{this.props.completed.toString()}</p>
                        <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                        <button onClick={this.handleEdit}>Edit</button>
                    </div>
                    :
                    <div>
                        <form onSubmit = {this.handleSubmit}>
                            <input type="text" value={this.state.title} onChange={this.handleChange} name="title" placeholder={this.props.title}></input>
                            <button>Save</button>
                        </form>
                        <button onClick = {this.handleEdit}>Close</button> 
                    </div>
                }
            </Fragment>
        )
    }
}

export default Todo;