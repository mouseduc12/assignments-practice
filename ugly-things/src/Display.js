import React, { Fragment } from "react";

class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditting: false,
            title: "",
            imgUrl: "",
            description: "",

        }
    }

    editting = () => {
        this.setState(prevState => {
            return {
                isEditting: !prevState.isEditting
            }
        })
    }

    closeEdit = () => {
        this.setState(prevState => {
            return {
                isEditting: !prevState.isEditting
            }
        })
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const newObj = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }
        this.props.handleEdit(this.props.id, newObj)
        this.closeEdit()
    }
    render() {
        return (
            <Fragment>
                {this.state.isEditting === false ?
                    <div className = "middle">
                        <h2>{this.props.title}</h2>
                        <div className="img" style={{ backgroundImage: `url(${this.props.imgUrl})` }}></div>
                        <p>{this.props.description}</p>
                        <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                        <button onClick={this.editting}>Edit</button>
                    </div>
                    :
                    <div className = "middle">
                        <form onSubmit = {this.handleSubmit} className = "middle">
                            <input type="text" value={this.state.title} name="title" onChange={this.handleChange}></input>
                            <input type="text" value={this.state.imgUrl} name="imgUrl" onChange={this.handleChange}></input>
                            <input type="text" value={this.state.description} name="description" onChange={this.handleChange}></input>
                            <button>Submit</button>
                        </form>
                        <button onClick={this.closeEdit}>Close</button>
                    </div>
                }
            </Fragment>
        )
    }
}

export default Display