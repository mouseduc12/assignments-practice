import React, { Component } from 'react';
import Links from "./Link"
import axios from "axios"
import { Switch, Route } from "react-router-dom"
import Character from './Character';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const forwarder = "https://vschool-cors.herokuapp.com?url="
    const url = " https://swapi.co/api/people/"
    axios.get(forwarder + url)
      .then(res => {
        const data = res.data.results
        this.setState({
          data
        })
      }).catch(error =>
        console.log(error)
      )
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <Switch>
          <Route exact path="/" render={props => {
            return (
            <Links
              data={this.state.data}
            />)
          }} />
          <Route exact path ="/:id" component= {Character} />
        </Switch>
      </div>
    );
  }
}

export default App;

