import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import About from "./About"
import Home from "./Home"
import Services from "./Services"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
            <Route exact path = "/" component ={Home} />
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/services" component = {Services}/>
        </Switch>
      </div>
    );
  }
}

export default App;
