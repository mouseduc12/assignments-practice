import React, { Component } from 'react';
import Form from "./Form"
import Display from "./Display"

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      aboutYou: "",
      newArr: [],
      alreadySubmitted: false,
      color: "red",
    }
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      alreadySubmitted: true && false 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newObj = {}
    newObj.firstName = this.state.firstName
    newObj.lastName = this.state.lastName
    newObj.email = this.state.email
    newObj.placeOfBirth = this.state.placeOfBirth
    newObj.favoriteFood = this.state.favoriteFood
    newObj.aboutYou = this.state.aboutYou
    newObj.color = this.state.color
    const specialChar = "-.!@#$%^&*()_+={}|:<>?~`\/"
    let splitSpecialChar = specialChar.split('')
    let splitPhone = this.state.phone.toString().split('');
    for (let i = 0; i < splitPhone.length; i++) {
      for (let j = 0; j < splitPhone.length; j++) {
        if (splitPhone[i] === splitSpecialChar[j]) {
          return alert("PHONE NUMBER CANNOT CONTAIN SPECIAL CHARACTERS")
        }
      }
    }
    newObj.phone = Number(this.state.phone)
    if (this.state.firstName.length <= 3 || this.state.lastName.length <= 3 || this.state.favoriteFood.length <= 3 || this.state.email.length <= 3 || this.state.aboutYou.length <= 3 || this.state.placeOfBirth.length <= 3 || this.state.phone.length <= 3) {
      alert("Please enter over 3 characters")
    } else {
      this.setState(prevState => {
        return {
          newArr: [...prevState.newArr, newObj],
          alreadySubmitted: true,
          color: this.state.color === "red" ? "blue" : "red"
        }
      })
    }
    
  }

  render() {

    return (
      <div className="App">
        <Form firstName={this.state.firstName}
          lastNameName={this.state.lastName}
          email={this.state.email}
          placeOfBirth={this.state.placeOfBirth}
          phone={this.state.phone}
          favoriteFood={this.state.favoriteFood}
          aboutYou={this.state.aboutYou}
          alreadySubmitted={this.state.alreadySubmitted}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        {this.state.alreadySubmitted &&
            this.state.newArr.map((each, id) => <Display
              key={id}
              firstName={each.firstName}
              lastName={each.lastName}
              phone={each.phone}
              email={each.email}
              placeOfBirth={each.placeOfBirth}
              favoriteFood={each.favoriteFood}
              aboutYou={each.aboutYou} 
              color ={each.color}
              />)
        }
      </div>
    );
  }
}

export default App;


