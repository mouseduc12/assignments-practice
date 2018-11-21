import React, { Component } from 'react';
import Form from "./Form"

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      aboutYou: ""
    }
  }
  handleChange = (e) =>{
    const { name , value } = e.ta
  }

  render() {
    return (
      <div className="App">
        <Form firstName={this.state.firstName} 
              lastNameName={this.state.lastNameName} 
              email={this.state.email}
              placeOfBirth={this.state.placeOfBirth}
              phone={this.state.phone}
              favoriteFood={this.state.favoriteFood}
              aboutYou = {this.state.aboutYou}
              handleChange = {this.handleChange}/>
      </div>
    );
  }
}

export default App;
