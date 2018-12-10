import React, { Fragment } from "react";

class Bounties extends React.Component {
    constructor() {
        super()
        this.state = {
            isEdit: false,
            editFirstName: "",
            editLastName: "",
            editIsLiving: "",
            editBounty: "",
            editType: ""
        }
    }
    handleEditChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
      }

    editForm = () =>{
        this.setState({
            isEdit: true
        })
    }

    handleEditSubmit = (e) => {
        e.preventDefault()
        const newObj = {
          firstName: this.state.editFirstName,
          lastName: this.state.editLastName,
          isLiving: this.state.editIsLiving,
          bountyAmount: this.state.editBounty,
          type: this.state.editType
        }
        this.props.handleEditRequest(this.props.id, newObj)
        this.setState({
            isEdit: false
        })
      }

    render() {
        return (
            <Fragment>
                {this.state.isEdit === false? 
                <div id={this.props.id}>
                    <h2>{this.props.firstName}</h2>
                    <h3>{this.props.lastName}</h3>
                    <h2>{this.props.isLiving}</h2>
                    <h2>{this.props.bountyAmount}</h2>
                    <h2>{this.props.type}</h2>
                    <button onClick = {this.editForm}>Edit</button>
                    <button  onClick={() => this.props.deleteData(this.props.id)}>Delete</button>
                </div>
                :
                <form onSubmit={this.handleEditSubmit}>
                    <input type = "text" placeholder="first name" name="editFirstName" value ={this.state.editFirstName} onChange= {this.handleEditChange}></input>
                    <input type = "text" placeholder="last name" name="editLastName"  value ={this.state.editLastName} onChange= {this.handleEditChange}></input>    
                    <input type = "text" placeholder="is living"  name="editIsLiving" value ={this.state.editIsLiving}  onChange= {this.handleEditChange}></input>    
                    <input type = "text" placeholder="bounty" name="editBounty" value ={this.state.editBounty}  onChange= {this.handleEditChange}></input>
                    <input type = "text" placeholder="type" name="editType" value ={this.state.editType}  onChange= {this.handleEditChange}></input>
                    <button>Submit</button>            
                </form>
                }
            </Fragment>
        )
    }
}
export default Bounties