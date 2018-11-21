import React, { Component } from 'react';
import Heroes from "./Heroes.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
        heroName: "",
        alignment: "",
        heroes:[]
    }
  }

  handleChange = (e) =>{
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      const name = e.target.name
      this.setState({
        [name]: value
      })
  }

  submit = (e) => {
      e.preventDefault();
      const newHeroes = {
        name: this.state.heroName,
        alignment: this.state.alignment,
      }
      this.setState(prevState => {
        return {
        heroes: [...prevState.heroes, newHeroes]
      }})
  }

  render(){
    return(
      <div>
      <form onSubmit={this.submit}>
        <input type="text" value={this.state.fullName} name="heroName" required placeholder="Hero Name" onChange={this.handleChange}/>
        Good:<input type="radio" value="Good" name="alignment" onChange={this.handleChange}/>
        Evil:<input type="radio" value="Evil" name="alignment"onChange={this.handleChange}/>
        Unknown:<input type="radio" value="Unknown" name="alignment"onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
      <h1>{this.state.heroName}</h1>
      {this.state.heroes.map((each ,id) => <Heroes name={each.name} alignment={each.alignment} id = {id}/>)}
      </div>
    )
  }
}

export default App;
