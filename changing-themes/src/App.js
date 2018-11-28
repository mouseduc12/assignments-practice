import React, { Component } from 'react';
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
